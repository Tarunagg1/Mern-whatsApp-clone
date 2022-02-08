import messageModel from "../models/message.js";

// messages
export const addmessage = async (req, res) => {
  const { conversationId, text, sender } = req.body;
  try {
    const newMessage = new messageModel({ conversationId, text, sender });
    const resp = await newMessage.save();
    return res.status(200).json({ message: "message created", resp });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

export const getmessages = async (req, res) => {
    const conversationId = req.params.id;
  try {
    const resp = await messageModel.find({conversationId})
    return res.status(200).json({ message: "message list", resp });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
