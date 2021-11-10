const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema ({ 
    user: { type: String, required: true },
    name: { type: String, required: true},
    race: { type: String, required: true},
    gender: { type: String, required: true}
})

module.exports = mongoose.model('pet', petSchema)