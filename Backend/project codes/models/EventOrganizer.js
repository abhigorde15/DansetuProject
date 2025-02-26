





const mongoose = require('mongoose');

const eventOrganizerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const EventOrganizer = mongoose.model('EventOrganizer', eventOrganizerSchema);

module.exports = EventOrganizer;
