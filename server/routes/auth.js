const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/redirect', passport.authenticate('google'), (req, res, next) => {
  // Burada login eventi tetiklenebilir cliente

  // var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
  // responseHTML = responseHTML.replace('%value%', JSON.stringify({
  //     user: req.user
  // }));
  // res.status(200).send(responseHTML);

  res.json(req.user);
});

module.exports = router;
