var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String
});

module.exports = UserSchema;