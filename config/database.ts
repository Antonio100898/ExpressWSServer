import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const password = process.env.MONGO_PASSWORD

export async function getDatabase() {
  await mongoose.connect(`mongodb+srv://beecommchat:${password}@beecommchat.esuogdz.mongodb.net/?retryWrites=true&w=majority`);
}