const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    community: { type: Object },
    activity: { type: Object },
    eventType:{type:String}
})

module.exports = mongoose.model("Event", eventSchema);