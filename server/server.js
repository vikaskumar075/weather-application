import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoute from "./routes/weatherRoute.js";

dotenv.config();

const app= express();
app.use(cors(

));
app.use(express.json({limit: "50mb"}));

app.use("/api/v1", weatherRoute);

const port= process.env.PORT;
app.listen(port || 8001, ()=>{
    console.log(`Server is running on ${port}`);
})