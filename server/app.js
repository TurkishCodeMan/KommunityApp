const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const EventEmitter=require("events")
const eventEmitter=new EventEmitter();
eventEmitter.setMaxListeners(1) 
app.set("eventEmitter",eventEmitter)

// Passport Config
require('./config/passport-config')(passport);

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



app.use(require("./controller/eventController"));

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

app.listen(process.env.PORT, process.env.HOST, (err) => {
  if (err) return err;

  console.log('Listening on port 3000');
});
