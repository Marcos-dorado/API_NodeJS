const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user")

const app = express();
const port = process.env.PORT || 3300;

// middlewre

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())
app.use("/api",userRoutes);

// routes

app.get ("/",(req, res) => {
    res.send("¡Bienvenidos!")
});

//mongodb conection

mongoose.connect(
    process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDB Atlas"))
    .catch((error)=>console.error(error))

app.listen(port, () => console.log ("server listening on port", port));