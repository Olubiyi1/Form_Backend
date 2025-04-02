import express from "express"
import connectDb from "./config/Db";
import userRoute from "./routes/userRoute.routes";
import cors from "cors"

const app = express()
app.use(cors({
    origin:"*",
    methods:["GET","PUT,","POST","DELETE"],
    allowedHeaders:["content-type","Authorization"]
}))

// allowing express access json files
app.use(express.json())



// Db connection
connectDb();

app.use("/api",userRoute)


export default app;