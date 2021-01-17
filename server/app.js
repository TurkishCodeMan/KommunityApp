const express = require('express');

const app = express();
const http = require("http").createServer(app)

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession=require("cookie-session")

const passport = require('passport');

const Community = require('./models/Community');

// Passport Config
require('./config/passport-config')(passport);


//Socket İO Entegration
const socketApi = require("./config/socket");


socketApi.io.attach(http);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session is there
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 60,
  keys: ['secretKey'],


}));


app.use(passport.initialize());
app.use(passport.session());


require("./config/subscriber")()
// app.use(require("./controller/eventController"));

// Routes
app.use("/api/session", (req, res, next) => {
  if (req.user) {
    return res.json({ user: req.user })
  }
  return res.json({ user: undefined })
})
app.use('/api', require('./routes/auth'));
app.use("/api", require("./routes/community"));

// Database MongoDB Connected
require('./config/db')();

http.listen(process.env.PORT, process.env.HOST, (err) => {
  if (err) return err;



  // let community1 = new Community({
  //   name: "DevOps Malatya",
  //   location: "Malatya",
  //   description: "Güncel Community"
  // });
  // community1.save().then(c => {
  //   c.organizators.push("5ff5cf8fdba016348432b26e")
  // })
  // let community2 = new Community({
  //   name: "Yazılımcılar Burada",
  //   location: "Mersin",
  //   description: "Güncel Community"
  // });
  // community2.save().then(c => {
  //   c.organizators.push("5ff5cf8fdba016348432b26e")
  // })




  console.log('Listening on port 3000');
});


