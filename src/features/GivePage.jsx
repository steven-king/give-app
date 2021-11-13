import {Typography, Box} from "@mui/material";
import "css/givePage.css";

if (navigator.share) {
  console.log("good");
} else {
  console.log("bad");
}

export const GivePage = () => {
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
        <div class="amountContainer">
          <span class="dollar">
            <Typography>$</Typography>
          </span>
          <input
            id="amount"
            name="amount"
            type="text"
            maxlength="10"
            placeholder="1.00"
          />
        </div>
      </Box>
    </Box>
  );
};
