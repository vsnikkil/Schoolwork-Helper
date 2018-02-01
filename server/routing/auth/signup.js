const giveSession = require('../../functions/giveSession');
const sanitize = require('../../functions/sanitize');
const getValidEmail = require('../../functions/getValidEmail');
const bcrypt = require('bcrypt');

function signup(router, models) {
  const {
    User
  } = models;
  router.post('/signup', (req, res) => {
    let {
      username,
      password,
      email
    } = req.body;
    if (!sanitize(req.body,{username:'string',password:'string',email:'string'})) return res.redirect('/signup?message=Malformed+Request');
    username = username.split(' ').join('');
    const displayname = username;
    username = username.toLowerCase();
    if (username.length < 3 || password.length < 7) return res.redirect('/signup?message=Invalid+Request');
    email = getValidEmail(email);
    if (!email) return res.redirect('/signup?message=Invalid+Request');
    bcrypt.hash(password, 12, (err, hash) => {
      if (err) throw err;
      const createUser = new User({
        username,
        displayname,
        hash,
        email
      });
      createUser.save(err => {
        if (err) return res.redirect('/signup?message=Internal+Error');
        const userOut = {
          username
        };
        giveSession(res, createUser, models).then(()=>{
          const output = {
            username: createUser.username,
            displayname: createUser.displayname,
            admin: createUser.admin
          };
          res.redirect('/');
        }).catch(err=>{
          res.redirect('/signup?message=Internal+Error');
        });
      });
    });
  });
}
module.exports = signup;
