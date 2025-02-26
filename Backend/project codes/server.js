const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const EventBooking = require('./models/EventBooking'); // Adjust the path as necessary
const User = require('./models/User'); // Client model
const EventOrganizer = require('./models/EventOrganizer'); // Event Organizer model

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventq', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// API for user (client) registration
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email });

        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// API for user (client) login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, username: user.username, email: user.email });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

// API for event organizer registration
app.post('/api/organizer/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingOrganizer = await EventOrganizer.findOne({ $or: [{ username }, { email }] });
        if (existingOrganizer) {
            return res.status(400).send('Event Organizer already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newOrganizer = new EventOrganizer({ username, email, password: hashedPassword });

        await newOrganizer.save();
        res.status(201).send('Event Organizer registered successfully');
    } catch (error) {
        res.status(500).send('Error registering Event Organizer');
    }
});

// API for event organizer login
app.post('/api/organizer/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const organizer = await EventOrganizer.findOne({ username });
        if (!organizer) {
            return res.status(401).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, organizer.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: organizer._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, username: organizer.username, email: organizer.email });
    } catch (error) {
        res.status(500).send('Error logging in Event Organizer');
    }
});

// API endpoint to handle event booking
app.post('/api/book-event', async (req, res) => {
    console.log('Booking request received:', req.body); // Log the request body
    const { firstName, lastName, email, numGuests, date, time } = req.body;

    const newBooking = new EventBooking({
        firstName,
        lastName,
        email,
        numGuests,
        date,
        time,
    });

    try {
        await newBooking.save();
        res.status(200).json({ message: 'Event booked successfully!' });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ message: 'Error booking the event.', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});










// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// // Import models
// const User = require('./models/User'); // Client model
// const EventOrganizer = require('./models/EventOrganizer'); // Organizer model

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/eventq', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// /* -----------------------------------------------
//    CLIENT USER REGISTRATION ROUTE
// ------------------------------------------------ */
// app.post('/api/client/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).send('Client user already exists');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });

//     await newUser.save();
//     res.status(201).send('Client registered successfully');
//   } catch (error) {
//     console.error('Client registration error:', error);
//     res.status(500).send('Error registering client');
//   }
// });

// /* -----------------------------------------------
//    EVENT ORGANIZER REGISTRATION ROUTE
// ------------------------------------------------ */
// app.post('/api/organizer/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingOrganizer = await EventOrganizer.findOne({ $or: [{ username }, { email }] });
//     if (existingOrganizer) {
//       return res.status(400).send('Event organizer already exists');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newOrganizer = new EventOrganizer({ username, email, password: hashedPassword });

//     await newOrganizer.save();
//     res.status(201).send('Organizer registered successfully');
//   } catch (error) {
//     console.error('Organizer registration error:', error);
//     res.status(500).send('Error registering organizer');
//   }
// });

// /* -----------------------------------------------
//    CLIENT LOGIN ROUTE
// ------------------------------------------------ */
// app.post('/api/client/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).send('Invalid client credentials');
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).send('Invalid client credentials');
//     }

//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.json({ token, username: user.username, email: user.email });
//   } catch (error) {
//     console.error('Client login error:', error);
//     res.status(500).send('Error logging in client');
//   }
// });

// /* -----------------------------------------------
//    ORGANIZER LOGIN ROUTE
// ------------------------------------------------ */
// app.post('/api/organizer/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const organizer = await EventOrganizer.findOne({ username });
//     if (!organizer) {
//       return res.status(401).send('Invalid organizer credentials');
//     }

//     const isMatch = await bcrypt.compare(password, organizer.password);
//     if (!isMatch) {
//       return res.status(401).send('Invalid organizer credentials');
//     }

//     const token = jwt.sign({ id: organizer._id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.json({ token, username: organizer.username, email: organizer.email });
//   } catch (error) {
//     console.error('Organizer login error:', error);
//     res.status(500).send('Error logging in organizer');
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
