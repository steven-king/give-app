import {AppBar, Tab, Box, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  brandLink: {
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    margin: "0px 18px",
    padding: "18px 12px",
    opacity: "1",
    minWidth: "auto",
  },
  navLink: {
    color: theme.palette.text.disabled,
    textTransform: "capitalize",
    margin: "0px 18px",
    padding: "18px 12px",
    opacity: "1",
    minWidth: "auto",
    "&.active": {
      color: theme.palette.text.primary,
    },
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));

export const Nav = () => {
  const classes = useStyles();
  const tabs = ["about", "give", "progress"];

  return (
    <AppBar position="static">
      <Box bgcolor="background.paper">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            flexGrow: 10,
          }}
        >
          <Tab
            component={NavLink}
            className={classes.brandLink}
            to="/"
            label="GiveApp"
            disableRipple
          />
          <Box sx={{display: "flex", flexGrow: 1}} />
          {tabs.map((tab) => (
            <Tab
              component={NavLink}
              className={classes.navLink}
              to={tab}
              key={tab}
              label={tab}
              disableRipple
            />
          ))}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
