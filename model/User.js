const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name !"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email !"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide valid email",
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    minlength: [6, "Please provide a password with min length 6"],
    required: [true, "Please provide a password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  place: {
    type: String,
  },
  website: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

//UserSchema Methods
UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payLoad = {
    id: this._id,
    name: this.name,
  };

  const token = jwt.sign(payLoad, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });
  return token;
};

//Before Starting Hashing
UserSchema.pre("save", function (next) {
  //İf password change

  if (this.isModified("password")) {
    next();
  }

  bcrpyt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }

    bcrpyt.hash(this.password, salt, (err, hash) => {
      if (err) {
        next(err);
      }
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
