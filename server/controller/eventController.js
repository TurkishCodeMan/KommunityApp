const Event = require("../models/Event")
const subscriber=require("../config/subscriber")
module.exports = async (req, res, next) => {
    // const eventEmitter = req.app.get("eventEmitter")
    // eventEmitter.on("createCommunity", async data => {
    //     console.log("Burada")
    //     let event = new Event({
    //         userID: "5ff5cf8fdba016348432b26e",
    //         community: data,
    //         eventType: "createCommunity"
    //     });
    //     await event.save();
    
    // })
    subscriber("events");
    next();
  
}