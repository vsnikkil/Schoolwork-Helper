const sanitize = require('../../functions/sanitize');
const giveSession = require('../../functions/giveSession');
const decodeAuth = require('../../functions/decodeAuth');
const bcrypt = require('bcrypt');

function login(router, models) {
  const {
    User
  } = models;
  router.get('/login', (req, res) => {
    if (!sanitize(req.query.username,'string') || !sanitize(req.query.password,'string')) return res.status(400).send('Malformed Request');
    let {username,password} = req.query;
    username = username.split(' ').join('');
    if (username.length < 3 || password.length < 7) return res.status(400).send('Malformed Request');
    User.findOne({
      username
    }, (err, user) => {
      if (err) throw err;
      if (!user) return res.status(401).send('Unauthorized');
      if (user.banned === true) return res.status(403).send('Banned');
      bcrypt.compare(password, user.hash, (err, match) => {
        if (err) return res.status(500).send('Internal Error');
        if (match === true) {
          giveSession(res, user, models).then(()=>{
            const output = {
              username: user.username,
              displayname: user.displayname,
              admin: user.admin
            };
            res.redirect('/');
          }).catch(err=>{
            res.status(500).send('Internal Error');
          });
        } else {
          res.status(401).send('Unauthorized');
        }
      });
    });
  });
}
module.exports = login;
