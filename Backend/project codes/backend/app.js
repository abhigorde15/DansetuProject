// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const path = require('path');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const app = express();
// const bodyParser = require('body-parser');

// // Middleware
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../public'))); // Serve static files from public folder

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Session Middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: MongoStore.create({
//     mongoUrl: process.env.MONGODB_URI,
//   }),
// }));

// // User Schemas & Models
// const clientSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// const organizerSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// const Client = mongoose.model('Client', clientSchema);
// const Organizer = mongoose.model('Organizer', organizerSchema);

// // Routes
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'login.html')); // Serve login page
// });

// // Client Registration
// app.post('/register/client', async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newClient = new Client({ username, email, password: hashedPassword });
//     await newClient.save();
//     res.send('Client registered successfully!');
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).send('Error registering client. Please try again later.');
//   }
// });

// // Organizer Registration
// app.post('/register/organizer', async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newOrganizer = new Organizer({ username, email, password: hashedPassword });
//     await newOrganizer.save();
//     res.send('Organizer registered successfully!');
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).send('Error registering organizer. Please try again later.');
//   }
// });


// // Client Login
// app.post('/login/client', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const client = await Client.findOne({ email });
//     if (!client) return res.status(400).send('Invalid email or password.');

//     const isMatch = await bcrypt.compare(password, client.password);
//     if (!isMatch) return res.status(400).send('Invalid email or password.');

//     req.session.userId = client._id;
//     res.send('Client login successful!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error logging in client.');
//   }
// });

// // Organizer Login
// app.post('/login/organizer', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const organizer = await Organizer.findOne({ email });
//     if (!organizer) return res.status(400).send('Invalid email or password.');

//     const isMatch = await bcrypt.compare(password, organizer.password);
//     if (!isMatch) return res.status(400).send('Invalid email or password.');

//     req.session.userId = organizer._id;
//     res.send('Organizer login successful!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error logging in organizer.');
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
