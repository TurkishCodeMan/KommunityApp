const socket = require('socket.io');

const io = socket();

const socketApi = { io };
const Event = require("../models/Event")




io.on("connection", (socket) => {
    console.log("Connect Socket")

   
  

})




module.exports = socketApi;