const { Schema, model } = require('mongoose')

const MusicSchema = new Schema({
    music: {
        type: String,
        required: true,
    }
})

module.exports = model('Music', MusicSchema)