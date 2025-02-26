


const mongoose = require('mongoose');

const eventBookingSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        match: [/.+@.+\..+/, 'Please enter a valid email address'] 
    },
    numGuests: { type: Number, required: true },
    date: { 
        type: Date, 
        required: true,
        validate: {
            validator: function(v) {
                return v > new Date(); // Ensure the date is in the future
            },
            message: 'Event date must be in the future.'
        }
    },
    time: { type: String, required: true }
}, { timestamps: true }

); // Enable timestamps


module.exports = mongoose.model('EventBooking', eventBookingSchema);
