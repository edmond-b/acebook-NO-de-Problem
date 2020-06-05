var User = require('../models/user');



var UserController = {
  Index:function(req, res){

    res.render('user/signup', { title: 'Signup to Acebook', success: req.session.success, errors: req.session.errors  }); // is this useruser grabbing entire instance
    req.session.errors = null;
  },

  Create: function(req, res) {
    var user = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password});
    
    // check 


    req.check('email', "ERROR email in use").isEmail()
    req.check("password", "PAssword is too short").isLength(8).equals(req.body.confirmPassword)
    

    var errors = req.validateErrors();
    if (errors){
      req.session.errors = errors
      req.session.success = false
    } else {
      req.session.success = true
      user.save(function(err) {
        if (err) { throw err; }
        res.status(201).redirect('/signup/validate');
      });
      
      req.session.user = user._id
    }

    res.redirect("/signup");



   
  },
  

  Validate: function(req, res){
    User.findOne({ _id: req.session.user }, function(err, user) {
      if (err) { throw err; }

      res.render('user/valid', { firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, user: req.session.user });
    });
  },
};

module.exports = UserController;


// create a session for user = User._id
