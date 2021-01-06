const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId},
    community: { type: Object },
    activity: { type: Object }
})

module.exports = mongoose.model("Event", eventSchema);