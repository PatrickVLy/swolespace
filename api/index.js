const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("connected to mongoDB"))
.catch((err)=>console.log(err));


app.use("/api/auth", authRoute)

app.listen("5000", ()=> {
    console.log("now listening on port 5000");
});