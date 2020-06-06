var Post = require('../../models/post');
var mongoose = require('mongoose');
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = function(on) {
  on('task', {
    userCreate() {
      return new Promise(function(resolve) {
        console.log(mongoose);
        console.log(Post);
        mongoose.connect('mongodb://localhost/acebook_test', function(err) {
          console.log('connected');
          var newPost = new Post({body: 'I love tugz'});
          newPost.save(function(err) {
            console.log('saved');
            resolve('done');
          });
        });
        // Post.find(function(err, result) {
        //   if(err) {
        //     console.log(err);
        //   }
        //   console.log(result);
        //   resolve('done');
        // })
      });
    },
    userLog(arg) {
      console.log(arg);
      return null;
    }
  })
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}


// module.exports = (on, config) => {
//   on('task', {
//     log (message) {
//       console.log(message)

//       return null
//     }
//   })
// }