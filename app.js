//mongodb+srv://su0000676:MpOUYDFPgv550QDT@cluster0.na5zdws.mongodb.net/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/userModel");
app.use(express.json());
app.use(require("./router/auth"));

const DB = process.env.DATABASE_SECRETE_KEY;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is listening on  ${process.env.PORT} `);
    });
    console.log("Server connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("home page");
  console.log("homepage");
});
