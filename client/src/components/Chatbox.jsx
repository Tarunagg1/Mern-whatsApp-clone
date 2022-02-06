import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import "./css/chatbox.css";
import Menu from './Menu/Menu';

const useStyle = makeStyles({
  component: {
    display: "flex",
  },
  leftCompponent: {
    minWidth: 380,
  },
  rightCompponent: {
    border:'1px solid rgba(0,0,0,0.14)'
  },
});
export default function Chatbox() {
  const classes = useStyle();
  // BackdropProps={{ style: { backgroundColor: "unset" } }}

  return (
    <Fragment>
      <Dialog backdropProps={{style: {backgroundColor:"unset"}}} open={true}>
        <Box className={classes.component}>
          <Box className={classes.leftCompponent}>
            <Menu />
          </Box>
          <Box className={classes.rightCompponent}>
            <h1>h11</h1>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}
