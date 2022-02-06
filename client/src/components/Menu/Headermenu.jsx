import { MoreVert } from '@material-ui/icons';
import React, { Fragment, useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoogleLogout } from 'react-google-login';
import { toast } from "react-toastify";
import { AccountContext } from '../../context/Authprovider';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border:'none!important', 
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})

export default function Headermenu() {
    const classes = useStyle();

    const [open, setopen] = useState(false);
    const {setAccount} = useContext(AccountContext);

    const clientId = "606481443302-gfpg74e1kntrp8hvo1vaqt7877o1arqh.apps.googleusercontent.com";

    const handleClose = () => {
        setopen(false);
    }

    const handelClick = (e) => {
        setopen(e.currentTarget);
    }

    const onLoginSuccess = () => {
        setAccount('');
        toast.success("Logout success");
        console.clear();
    }

  return (
      <Fragment>
        <MoreVert style={{cursor: 'pointer'}} onClick={handelClick} />
        <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchor={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleClose} className={classes.menuItem}>Profile</MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>My account</MenuItem>
        <MenuItem onClick={handleClose}
        ><GoogleLogout 
        buttonText="Logout"
        clientId={clientId}
        isSignedIn={true}
        className={classes.logout}
        onLoginSuccess={onLoginSuccess}
        /></MenuItem>
      </Menu>
      </Fragment>
  );
}
