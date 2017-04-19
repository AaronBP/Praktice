var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Follow'
    }
  ],
  practices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }]
});

userSchema.plugin(mongooseUniqueValidator);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
