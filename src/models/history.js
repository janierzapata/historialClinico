const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorySchema = new Schema({
  pet: { type: String, required: true },
  temperature: { type: String, required: true },
  weight: { type: String, required: true },
  heartRate:{ type: String, required: true},
  breatheRate:{ type: String, required: true },
  time: { type: String, required: true},
  feeding: { type: String, required: true },
  habitat: { type: String, required: true },
  notes: { type: String, required: true}
});

module.exports = mongoose.model('history', HistorySchema);
