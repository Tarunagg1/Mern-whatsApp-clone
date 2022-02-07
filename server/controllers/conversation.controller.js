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