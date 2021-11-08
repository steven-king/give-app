import {Typography, Box, TextField} from "@mui/material";

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
          "& > :not(style)": {my: 1, width: "25ch"},
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" />
        <TextField label="Phone Number" variant="outlined" />
        <TextField label="Amount to Give" variant="outlined" />
      </Box>
    </Box>
  );
};
