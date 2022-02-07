import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/Authprovider";
import { getusers } from "../../services/api";
import Conversation from "./conversation";

const useStyles = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
});

export default function Conversations({text}) {
  const [users, setusers] = useState();
  const classes = useStyles();

  const { Account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getusers();

      const userVal = data.userData;

      const filterData = userVal.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      setusers(filterData);
    };
    fetchData();
  }, [text]);



  return (
    <Fragment>
      <Box className={classes.component}>
        {users &&
          users.map(
            (user,ind) =>
              user.googleId !== Account.googleId && <Conversation key={ind} user={user} />
          )}
      </Box>
    </Fragment>
  );
}
