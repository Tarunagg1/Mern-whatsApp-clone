import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Login from "./Authentication/Login";

const useStyle = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5 !important",
    boxShadow: "none !important",
  },
});

export default function Messenger() {
  const classes = useStyle();

  return (
    <Fragment>
      <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      <Login />
    </Fragment>
  );
}
