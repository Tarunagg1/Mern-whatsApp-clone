import React, { Fragment, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Login from "./Authentication/Login";
import { AccountContext } from '../context/Authprovider';
import Chatbox from './Chatbox';

const useStyle = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5 !important",
    boxShadow: "none !important",
  },
  header: {
    height: 115,
    background: "#00bfa5 !important",
    boxShadow: "none !important"
  }
  
});

export default function Messenger() {
  const classes = useStyle();
  const {Account} = useContext(AccountContext);


  return (
    <Fragment>
      <AppBar className={Account ? classes.loginHeader : classes.header}>
        <Toolbar></Toolbar>
      </AppBar>
      {
        Account ? <Chatbox /> :<Login />
      }
    </Fragment>
  );
}
