const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true},
    typeDocument: { type: String, required: true },
    document: { type: String, required: true },
    status: { type: String, required: true},
    gender:{ type: String, required: true}

})

module.exports = mongoose.model('user',userSchema);