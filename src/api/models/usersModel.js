/**
 * User Model Class
 * @author Amilton Brune
 */

const mongoose = require("../../database");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    mail: {
      type: String,
      unique: true,
      required: true,
      lowercase: false
    },
    roles: {
      type: Array,
      required: true,
      default: "USER"
    },
    createAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
