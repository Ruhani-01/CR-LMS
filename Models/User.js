const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose =require('passport-local-mongoose');
const UserSchema = new Schema({
  username:String,
  role: {
    type: String,
    default: "user",
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
