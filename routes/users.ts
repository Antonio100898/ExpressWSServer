import express from "express";
import { createUser, deleteUser, getAllUsers, getUser } from "../services/users/users-service";

const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers()
    if (users) {
      res.status(200).json({
        error: false,
        message: "",
        data: users,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error,
    });
  }
});

//get 1 user by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || id.length === 0) {
    return res.status(400).json({
      error: true,
      message: `You must provide a valid user id`,
    })
  }

  try {
    const user = await getUser(id)
    if (user) {
      res.status(200).json({
        error: false,
        message: "",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error,
    });
  }
});

//create new user
router.post("/", async (req, res) => {
  const { email, password, name } = req.body;

  //validate all fields of user
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: true,
      message: "email is required",
    });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      error: true,
      message: "password must be a valid string of 8 symbols",
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
    //try to create user 
    const userCreated = await createUser(req.body);
    if (userCreated) {
      return res.status(200).json({
        error: false,
        message: "A new user nas been successfully created!",
      });
    }
    return res.status(400).json({
      error: true,
      message: "Ran into a problem while trying to create a new user",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error,
    });
  }
});

//delete user
router.delete("/", async (req, res) => {
  const { id } = req.body;

  //validate user id from body of request
  if (!id || id.length === 0) {
    return res.status(400).json({
      error: true,
      message: `You must provide a valid user id`,
    })
  }

  try {
   const userDeleted = await deleteUser(id)
   if (userDeleted) {
    return res.status(200).json({
      error: false,
      message: `A user has been deleted successfully!`,
    });
   }
   res.status(400).json({
    error: true,
    message: `A user has not been deleted`,
  });
    
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error,
    });
  }
});

module.exports = router;
