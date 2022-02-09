import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useContext, useEffect, useState,useRef } from "react";
import { AccountContext } from "../../context/Authprovider";
import { createMessage, getMessages } from "../../services/api";
import Footer from "./Footer";
import Message from "./Message";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    backgroundSize: "50%",
  },
  footer: {
    height: "50px",
    background: "#ededed",
    width: "100%",
  },
  component: {
    height: "76vh",
    overflowY: "scroll",
  },
  container: {
    padding: "1px 80px",
  },
});
export default function Messages({ person, conversation }) {
  const scrolllRef = useRef();

  const [value, setValue] = useState("");
  const { Account, socket,incommingFlag,setIncommingFlag } = useContext(AccountContext);


  const [messages, setMessages] = useState([]);
  const [incommingMessage, setIncommingMessage] = useState(null);

  const classes = useStyles();
  
  useEffect(() => {
    socket.current && socket.current.on("newMessage", ({senderId,text}) => {
      console.log("incomm", text);
      setIncommingMessage({
        sender:senderId,
        text:text,
        date:Date.now()
      });
    });

    
  }, []);

  useEffect(() => {
    const getMessagesDetails = async () => {
      const data = await getMessages(conversation?.isExists?._id);
      setMessages(data.resp);
    };
    getMessagesDetails();
  }, [conversation?.isExists?._id,person._id,incommingFlag]);
  
  
  useEffect(() => {
    scrolllRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages]);
  
  useEffect(() => {
    incommingMessage && conversation?.isExists?.members.includes(incommingMessage.senderId)
    && setMessages(prev => [...prev,incommingMessage]);
    
  }, [incommingMessage,conversation]);

  const reciverId = conversation?.isExists?.members?.find(member => member !== Account.googleId);

  const sendText = async (e) => {
    let code = e.keyCode || e.which;

    const messageObj = {
      conversationId: conversation && conversation.isExists._id,
      text: value,
      sender: Account.googleId,
    };


    if (code === 13) {
      await createMessage(messageObj);
      socket.current.emit("sendMessages", {
        senderId: Account.googleId,
        reciverId:reciverId,
        text: value,
      });
      setValue("");
      setIncommingFlag(prev => !prev);
    }
  };

  return (
    <Fragment>
      <Box className={classes.wrapper}>
        <Box className={classes.component}>
          {messages &&
            messages.map((message, ind) => (
              <Box key={ind} className={classes.container} ref={null}>
                <Message message={message} />
              </Box>
            ))}
        </Box>
        <Footer sendText={sendText} value={value} setValue={setValue} />
      </Box>
    </Fragment>
  );
}
