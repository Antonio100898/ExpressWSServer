import express from "express";
import { createUser } from "../services/create-user-service";

const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  res.send("get all users");
});

//create new user
router.post("/", async (req, res) => {
  const { email, password, name } = req.body;

  //validate all fields of user
  if (!email) {
    return res.status(400).json({
      error: true,
      message: "email is required",
    });
  }

  if (!password) {
    return res.status(400).json({
      error: true,
      message: "password is required",
    });
  }

  if (!name) {
    return res.status(400).json({
      error: true,
      message: "name is required",
    });
  }

  //create new user by mongoose model

  try {
    //try to create user and send him in response

    const user = await createUser(req.body);

    res.status(200).json({
      error: false,
      message: "A new user nas been successfully created!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error,
    });
  }
});

module.exports = router;
