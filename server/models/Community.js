const mongoose = require('mongoose');

const communitySchema = mongoose.Schema({
  name: { type: String, required: [true, 'Please enter a name'] },
  location: { type: String }, // İlerde mapquest ile location alınabilir ve harita ile gösterilebilir ! pre ile
  organizators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  description: { type: String },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
  type:{type:Boolean,default:false},
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment",
    }
  ]
});

module.exports = mongoose.model('Community', communitySchema);
