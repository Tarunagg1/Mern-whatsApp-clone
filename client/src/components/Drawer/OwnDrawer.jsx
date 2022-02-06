import React from "react";
import { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
      background: '#00bfa5',
      height: 97,
      color: '#FFFFFF',
      display: 'flex',
      '& > *': {
        marginTop: 'auto',
        padding: 15,
        fontWeight: 600
      }
    },
    component: {
      background: '#ededed',
      height: '85%'
    } 
});
  
export default function OwnDrawer({open,setOpen}) {

    const handelClose = ()=>{
        setOpen(false);
    }

  return (
    <Fragment>
        <Drawer
            open={open}
            onClose={handelClose}
        >
            <h1>kok</h1>
        </Drawer>
    </Fragment>
  );
}
