import express, { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import { getDatabase } from "./config/database";

const messages: Router = require("./routes/messages")
const users: Router = require("./routes/users")
const login: Router = require("./routes/login")

dotenv.config()

const app = express();
const WSserver = require("express-ws")(app)
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/messages", messages)
app.use("/users", users)
app.use("/login", login)

getDatabase().catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("Server has been started on port " + PORT); 
})