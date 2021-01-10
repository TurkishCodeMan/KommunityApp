const redis = require("redis");
const client = redis.createClient();
const Event = require("../models/Event")
client.on("error", (err) => {
    if (err) return console.log(err);
})

client.on('connect', function () {
    console.log('Redis client bağlandı');
});


module.exports = async () => {
    client.on("message", async (channel, message) => {
        let msg = JSON.parse(message)

        console.log("SUBSCRİBER ALDI")
        let event = new Event({
            userID: msg.user?msg.user._id:"5ff5cf8fdba016348432b26e",
            community: msg.community,
            eventType: msg.eventType
        });
        await event.save();
    })
    client.subscribe("events")
}
