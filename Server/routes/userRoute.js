// import express from "express"
// import { register,login,logOut} from "../controllers/userController.js"


// const userRouter= express.Router()
// userRouter.post('/register',register)
// userRouter.post('/login',login)
// userRouter.post('/logout',logOut)



// export default userRouter


import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;