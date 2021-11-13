import {useState} from "react";
import {
  AppBar,
  Box,
  Grid,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    textDecoration: "none",
  },
}));

export const Nav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const tabs = ["about", "give", "progress"];
  return (
    <AppBar>
      <Grid
        container
        bgcolor="background.paper"
        sx={{px: 3, py: 2, display: "flex", alignItems: "center"}}
      >
        <Grid item>
          <Link
            href={`/`}
            variant="h5"
            color="textPrimary"
            sx={{textDecoration: "none"}}
          >
            GiveApp
          </Link>
        </Grid>
        <Grid item sx={{display: "flex", flexGrow: 1}} />
        <Grid item>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            sx={{p: 0}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={`/`} className={classes.link}>
                home
              </Link>
            </MenuItem>
            {tabs.map((tab, i) => (
              <MenuItem onClick={handleClose}>
                <Link key={i} href={`/${tab}`} className={classes.link}>
                  {tab}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </AppBar>
    // <AppBar position="static">
    //   <Box bgcolor="background.paper">
    //     <Toolbar
    //       sx={{
    //         display: "flex",
    //         justifyContent: "flex-end",
    //         width: "100%",
    //         flexGrow: 10,
    //       }}
    //     >
    //       <Tab
    //         component={NavLink}
    //         className={classes.brandLink}
    //         to="/"
    //         label="GiveApp"
    //         disableRipple
    //       />
    //       <Box sx={{display: "flex", flexGrow: 1}} />
    //       {tabs.map((tab) => (
    //         <Tab
    //           component={NavLink}
    //           className={classes.navLink}
    //           to={tab}
    //           key={tab}
    //           label={tab}
    //           disableRipple
    //         />
    //       ))}
    //     </Toolbar>
    //   </Box>
    // </AppBar>
  );
};
