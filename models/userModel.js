const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  cpassword: {
    type: String,
    required: [true, "Please enter a cpassword"],
  },
  number: {
    type: Number,
    required: [true, "Please enter a number"],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
