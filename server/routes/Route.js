import express from "express";
import {getConversation, newConversation } from '../controllers/conversation.controller.js';
import {addmessage, getmessages } from '../controllers/message.controller.js';

import { adduser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/add",adduser);
router.get("/users",getUsers);

router.post("/conversatation/add",newConversation);
router.post("/conversatation/get",getConversation);

router.post("/message/add",addmessage);
router.get("/message/get/:id",getmessages);


export default router;