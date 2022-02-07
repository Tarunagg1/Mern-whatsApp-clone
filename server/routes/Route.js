import express from "express";
import { newConversation } from '../controllers/conversation.controller.js';

import { adduser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/add",adduser);
router.get("/users",getUsers);

router.post("/conversatation/add",newConversation);



export default router;