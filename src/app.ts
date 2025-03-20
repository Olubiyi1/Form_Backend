import express from "express"
import connectDb from "./config/Db";
import userRoute from "./routes/userRoute.routes";
// import cors from "cors"

const app = express()

// allowing express access json files
app.use(express.json())



// Db connection
connectDb();

app.use("/api",userRoute)


export default app;