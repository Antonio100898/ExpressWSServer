import express from "express";

const router = express.Router()

//login 
router.post("/", (req, res) => {
  const {} = req.body
  res.send("post login")
})

module.exports = router