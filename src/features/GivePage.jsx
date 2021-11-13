import {Typography, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dollar: {
    // borderWidth: "1px",
    // borderRadius: "3px",
  },
}));

if (navigator.share) {
  console.log("good");
} else {
  console.log("bad");
}

export const GivePage = () => {
  const classes = useStyles();
  return (
    <Box sx={{maxWidth: "375px"}}>
      <Typography variant="h4">Give</Typography>
      <Typography sx={{my: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box
        component="form"
        sx={{
          "& > input": {my: 1, width: "25ch", p: 1},
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>Enter your name</Typography>
        <input type="text" id="name" name="name" placeholder="name" />
        <Typography>Enter your phone pumber</Typography>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(000) 000-0000"
        />
        <Typography>Amount to give</Typography>
        <input placeholder="$" disabled={true} className={classes.dollar} />
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="$1.00"
          min="0.00"
          max="10000.00"
          step="0.01"
        />
      </Box>
    </Box>
  );
};
