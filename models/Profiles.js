const mongoose = require("mongoose");
const { isEmail } = require("validator");
const profileschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "minimum password length is 6"],
  },
});
const Profile = new mongoose.model("Profile", profileschema);

module.exports = Profile;
