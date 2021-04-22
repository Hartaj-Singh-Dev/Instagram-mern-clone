const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    min: 3,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    min: 10,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  cpassword: {
    type: String,
    require: true,
    trim: true,
  },
});


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
