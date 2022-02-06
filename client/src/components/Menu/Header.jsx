import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useContext, useState } from "react";
import { Chat as MessageIcon } from "@material-ui/icons";
import { AccountContext } from "../../context/Authprovider";
import Headermenu from "./Headermenu";
import OwnDrawer from '../Drawer/OwnDrawer';

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#cdcdcd",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avtar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
    cursor: "pointer",
  },
  chatIcons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      color: "#919191",
      padding: 8,
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 2,
    },
  },
});

export default function Header() {
  const classes = useStyles();
  const { Account } = useContext(AccountContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = ()=>{
      setOpen(true);
  }

  return (
    <Fragment>
      <Box className={classes.header}>
        <img
          src={Account.imageUrl}
          className={classes.avtar}
          onClick={toggleDrawer}
          alt="Profile img"
        />
        <Box className={classes.chatIcons}>
          <MessageIcon />
          <Headermenu />
        </Box>
      </Box>
      <OwnDrawer open={open} setOpen={setOpen}  />
    </Fragment>
  );
}
