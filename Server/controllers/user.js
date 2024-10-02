// import User from "../models/userModel.js"
// //import { createToken } from "../utilities/jwt.js"
// //import {sendEmail} from "../utilities/email.js"

// const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body
//         const user = await User.create({
//             name, email, password
//         })
//         console.log(user);
//         return res.status(201).send({ message: "User registered successfully" })
//     } catch (error) {
//         return res.status(500).send({ message: "Error in registering user", error: error.message })
//     }
// }


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).send({ message: "Invalid credentials" });
//         }

//         const passwordMatch = await user.matchPassword(password);
//         if (!passwordMatch) {
//             return res.status(400).send({ message: "Invalid credentials" });
//         }

//         const token = createToken({ id: user._id });
//         console.log("Generated Token:", token); // Debugging log

//         res.cookie("authToken", token, {
//             path: "/",
//             expires: new Date(Date.now() + 3600000), // 1 hour
//             secure: process.env.NODE_ENV === "production", // Use true if using HTTPS
//             httpOnly: true,
//             sameSite: "Lax"
//         });

//         console.log("Token set in cookie:", token); // Debugging log

        
//         const userObj = user.toObject();
//         delete userObj.password;

//         return res.status(200).send({ 
//             message: "User logged in successfully", 
//             token, 
//             user: userObj 
//         });
//     } catch (error) {
//         return res.status(500).send({ message: "Error in signing in user", error: error.message });
//     }
// };

// const logOut=async(req,res)=>{
//     res.clearCookie("authToken")
//     return res.status(200).send({message:"User Logged Out successfully"})
// }



// export { register, login ,logOut}



import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }
       const tokenData = {
        id:user._id
       }
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1h"});

        return res.status(200).cookie("token", token).json({
            message:`Welcome back ${user.fullName}`,
            user,
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req,res) => {
    return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"User logged out successfully.",
        success:true,
    });
}

export const Register = async (req,res) =>{
    console.log("Register route hit");
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashedPassword = await bcryptjs.hash(password,16);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};