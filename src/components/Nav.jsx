import {AppBar, Tab, Box, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: theme.palette.text.disabled,
    margin: "0px 24px",
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

export const Nav = ({tabs}) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Box bgcolor="background.paper">
        {/* <Box> */}
        <Toolbar>
          <div>
            {tabs.map(({path, label}) => (
              <Tab
                component={NavLink}
                className={classes.navLink}
                to={path}
                // exact={path === "/"}
                key={path}
                label={label}
                disableRipple
              />
            ))}
          </div>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

Nav.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
