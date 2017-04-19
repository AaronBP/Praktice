mongoose = require('mongoose');

var followSchema = mongoose.Schema({
  user: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  }
})

module.exports = mongoose.model('Follow', followSchema);
