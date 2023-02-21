import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  groupId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

export const Message = mongoose.model("Message", messageSchema);
