const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

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

// Routes
app.use('/api', require('./routes/auth'));
app.use("/api", require("./routes/community"));

// Database MongoDB Connected
require('./config/db')();

app.listen(process.env.PORT, process.env.HOST, (err) => {
  if (err) return err;

  console.log('Listening on port 3000');
});
