import express from "express";

const router = express.Router()

//get all messages
router.get("/", (req, res) => {
  res.send("get messages")
})

module.exports = router