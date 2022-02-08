import conversationModel from '../models/conversation.js';


export const newConversation = async (req,res) => {
    const {senderId,reciverId} = req.body;

    if(!senderId || !reciverId){
        return res.status(400).json({ message: "SenderId or reciverId required" });
    }
    try {

        const isExists = await conversationModel.findOne({members:{$all:[senderId,reciverId]}});        

        if(isExists){
            return res.status(200).json({ message: "conversation exists" });
        }
        const newConv = new conversationModel({members:[senderId,reciverId]})
        const newConvresp = await newConv.save();
        return res.status(201).json({ message: "new conversation addded", newConvresp });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
      }
}


export const getConversation = async (req, res) => {
  const {senderId,receiverId} = req.body;
  if(!senderId || !receiverId){
    return res.status(400).json({ message: "SenderId or receiverId required" });
}
  try {

    const isExists = await conversationModel.findOne({members:{$all:[senderId,receiverId]}});        

    if(isExists){
        return res.status(200).json({ message: "conversation exists",isExists });
    }else{
      return res.status(400).json({ message: "Conversation not found" }); 
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}







