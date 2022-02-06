import React, { Fragment } from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { Box, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  component: {
    background: "#F6F6F6",
    height: 43,
    display: "flex",
    alignItems: "center",
    transition: "box-shadow .18s ease-out,background-color .25s ease-out",
  },
  search: {
    position: "relative",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    margin: "0 13px",
    width: "100%",
  },
  searchIcon: {
    color: "#919191",
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 65,
    fontSize: 14,
    height: 15,
    width: "100%",
  },
});

export default function Search() {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.component}>
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <SearchIcon fontSize="small" />
          </Box>
          <InputBase
            placeholder="Search or start new chat"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            style={{ paddingLeft: "30px" }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Box>
    </Fragment>
  );
}
