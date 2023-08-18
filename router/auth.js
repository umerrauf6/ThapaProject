const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello unce");
});

router.post("/register", async (req, res) => {
  try {
    const { email, name, password, cpassword, number } = req.body;
    if (!email || !name || !password || !cpassword || !number)
      return res.status(400).send("please fill all field");
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("user already exist");
    const user = new User({ email, name, password, cpassword, number });
    const newUser = await user.save();
    if (newUser) return res.status(200).send("user created");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
