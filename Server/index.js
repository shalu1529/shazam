import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import wishlistRouter from "./routes/wishlistRoute.js";
import cors from 'cors';


databaseConnection();

dotenv.config({
    path:"./.env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/user", userRouter);
app.use("/wishlist", wishlistRouter);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
    console.log(`Mongo URI: ${process.env.MONGO_URI}`);
});

app.get("/test", (req, res) => {
    res.send("Test route working!");
});

