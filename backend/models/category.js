const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:           { type: String, required: true },
    description:    { type: String, required: true },
    image:          { type: String, required: false },
    dateCreated:    { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', categorySchema);