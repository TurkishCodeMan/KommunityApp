const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  location: { type: String },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  endTime: { type: Date, default: (Date.now()+1) },
  happened: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  // expireAt:{
  //   type:Date,
  //   index:{expires:this.endTime}
  // }

}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
