const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, 'Please enter an name'] },
  uuid: { default: uuid(), type: String },
  tag: { type: String },
  googleID: { type: String },
  imageUrl: { type: String },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
