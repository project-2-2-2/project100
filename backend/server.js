import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser';
import cors from "cors";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use("/api/v2/auth",authRoutes);
// app.use("/api/v2/auth",authRoutes);

app.listen(PORT,()=> {
    console.log(`server running on port ${PORT}`);
    connectDB();
}); 
