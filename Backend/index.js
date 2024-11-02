const express = require("express");

const app = express(); //instance
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const AuthRoute = require("./Routes/Auth");
const mongoose = require("mongoose");
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://deevikareddy94:Amazon@cluster0.mbcem.mongodb.net/",
    console.log("MongoDB connected")
  );
  app.use("/api/amazon/auth", AuthRoute);
}
// app.get("/",(req,res)=>{
//     res.send("welcome to my website")
// })
app.listen(8888, () => {
  console.log("server is running on 8888");
});
