import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare the hashed password with the plain password
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("Entered password:", enteredPassword);  // Debugging log
  console.log("Hashed password:", this.password);     // Debugging log

  if (typeof enteredPassword !== 'string' || typeof this.password !== 'string') {
    throw new Error("Passwords must be of type string");
  }

  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model('User', userSchema);
