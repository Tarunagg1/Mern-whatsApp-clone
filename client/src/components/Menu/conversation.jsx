import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/Authprovider";
import { userContext } from "../../context/userProvider";
import { getConversation, setConversation } from "../../services/api";

// import { setConversation, getConversation } from '../../../service/api';

const useStyles = makeStyles({
  component: {
    height: 40,
    display: "flex",
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
  },
  container: {
    display: "flex",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    color: "#00000099",
    marginRight: 20,
  },
  text: {
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
  },
});

const Conversation = ({ user }) => {
  const classes = useStyles();
  const url =
    user.imageUrl ||
    "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";

  const { setPerson } = useContext(userContext);
  const { Account, socket, setactiveUsers } = useContext(AccountContext);

  const [message, setMessage] = useState({});

  const setUser = () => {
    setPerson(user);
    setConversation({ senderId: Account.googleId, reciverId: user.googleId });
  };

  const getTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  useEffect(() => {
    socket.current.emit("adduser", Account.googleId);
    socket.current.on("getUsers", (user) => {
      setactiveUsers(user);
    });
  }, [Account]);

  useEffect(() => {
    const getConversationDetails = async () => {
      let { data } = await getConversation({
        senderId: Account.googleId,
        receiverId: user.googleId,
      });
      setMessage({text:data.isExists.message,timestamp:data.isExists.updatedAt});
    };
    getConversationDetails();
  }, []);

  return (
    <Box className={classes.component} onClick={setUser}>
      <Box>
        <img src={url} className={classes.displayPicture} alt="profilepic" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box className={classes.container}>
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timestamp}>
              {getTime(new Date(message.timestamp).getHours())}:
              {getTime(new Date(message.timestamp).getMinutes())}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
