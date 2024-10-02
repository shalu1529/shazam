// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// // Define the user schema
// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       validate: {
//         validator: function (v) {
//           return /.+@.+\..+/.test(v); // Email regex validation
//         },
//         message: (props) => `${props.value} is not a valid email!`, // Custom error message
//       },
//     },
//     password: { type: String, required: true },
//   },
//   {
//     timestamps: true, // Automatically handle createdAt and updatedAt timestamps
//     versionKey: false, // Remove the "__v" version key from documents
//   }
// );

// // Pre-save middleware to hash the password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     console.log("Password not modified, skipping hashing.");
//     return next();
//   }
//   try {
//     console.log("Hashing password...");
//     const salt = await bcrypt.genSalt(10); // Generate salt asynchronously
//     this.password = await bcrypt.hash(this.password, salt); // Hash the password
//     console.log("Password hashed successfully.");
//     next(); // Proceed to the next middleware
//   } catch (error) {
//     console.log("Error hashing password:", error);
//     next(error); // Pass the error to the next middleware
//   }
// });

// // Method to check if the entered password matches the stored hashed password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password); // Use async bcrypt compare
// };

// // Create and export the User model
// const User = mongoose.model("User", userSchema);
// export default User;


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema);
