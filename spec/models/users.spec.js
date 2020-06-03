var mongoose = require('mongoose');

require('../mongodb_helper')
var User = require('../../models/user');

describe('User model', function() {
  // beforeEach(function(done) {
  //   mongoose.connection.collections.user.drop(function() {
  //     done();
  //   });
  // });

  it('firstName is saved', function() {
    var user = new User({firstName: "John"});
    expect(user.firstName).toEqual('John');
  });

  it('lastName is saved', function(){
    var user = new User({lastName:'Zoidberg'});
    expect(user.lastName).toEqual('Zoidberg');
  });
});
