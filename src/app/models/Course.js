const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String, maxLength: 255 },
        videoID: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);



module.exports = mongoose.model('Course', Course);
