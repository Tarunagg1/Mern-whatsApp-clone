import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import "./css/chatbox.css";
import Menu from "./Menu/Menu";
import Chat from "./chat/Chat";

const useStyle = makeStyles({
  component: {
    display: "flex",
  },
  leftCompponent: {
    minWidth: 380,
  },
  rightCompponent: {
    border: "1px solid rgba(0,0,0,0.14)",
    width: "100%",
  },
});
export default function Chatbox() {
  const classes = useStyle();
  // BackdropProps={{ style: { backgroundColor: "unset" } }}
  // backdropProps={{style: {backgroundColor:"unset"}}}
  
  return (
    <Fragment>
      <Dialog open={true}>
        <Box className={classes.component}>
          <Box className={classes.leftCompponent}>
            <Menu />
          </Box>
          <Box className={classes.rightCompponent}>
            <Chat />
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}
