import express from "express";

const router = express.Router()

//login 
router.post("/", (req, res) => {
  const {email, password} = req.body
  
  res.send("post login")
})

module.exports = router