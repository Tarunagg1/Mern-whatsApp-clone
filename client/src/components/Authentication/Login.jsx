import { Dialog, Box, Typography, List, ListItem } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { makeStyles } from "@mui/styles";
import { GoogleLogin } from "react-google-login";

import { toast } from "react-toastify";
import { AccountContext } from "../../context/Authprovider";
import { clientId } from "../../constant/config";
import { adduser } from "../../services/api";

const useStyle = makeStyles({
  component: {
    display: "flex",
    height: "100vh !important",
    background: "#DCDCDK !important",
  },
  dialog: {
    padding: "56px 0 56px 56px",
  },
  qr: {
    margin: "50px 0 0 50px",
    height: 264,
    width: 264,
  },
  title: {
    fontSize: "26px !important",
    marginBottom: "50px !important",
    color: "#525252 !important",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif !important",
    fontWeight: "300pd !important",
  },
  list: {
    "&  > *": {
      padding: 0,
      marginTop: 15,
      fontSize: 18,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

function Login() {
  const classes = useStyle();
  const url = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    toast.success("Login Success");
    setAccount(res.profileObj);
    await adduser(res.profileObj);
  };

  const onLoginFailure = (res) => {
    toast.error("logiing failed");
  };

  return (
    <Fragment>
      <Box>
        <Dialog
          open={true}
          BackdropProps={{ style: { backgroundColor: "unset" } }}
        >
          <Box className={classes.component}>
            <Box className={classes.dialog}>
              <Typography className={classes.title}>
                To Use whatsapp on your computer
              </Typography>
              <List className={classes.list}>
                <ListItem>1. Open Whatsapp on your phone</ListItem>
                <ListItem>2. tap phone or settings and select</ListItem>
                <ListItem>
                  3. Pont your phone to this secreen to capture the code
                </ListItem>
              </List>
            </Box>
            <Box style={{ position: "relative" }}>
              <img src={url} alt="QR" className={classes.qr} />
              <Box style={{ position: "absolute", right: "29%", top: "22%" }}>
                <GoogleLogin
                  buttonText=""
                  clientId={clientId}
                  isSignedIn={true}
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Fragment>
  );
}

export default Login;
