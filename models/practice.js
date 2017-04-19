var mongoose = require('mongoose');

var User = require('./user');

// mongoose code
var practiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: String,
  dateAdded: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like"
    }
  ]
})

practiceSchema.post('remove', function(practice){
  User.findById(practice.user, function(err, user){
    if(err){
      console.log('this is the error');
    }
    user.practices.pull(practice);
    user.save();
  });
});

module.exports = mongoose.model("Practice", practiceSchema);
