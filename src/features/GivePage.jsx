import {useState, useEffect} from "react";
import {Typography, Box} from "@mui/material";

// if (navigator.share) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

export const GivePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleInputPhone = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhone);
  };

  const handleInputAmount = (e) => {
    const formattedAmount = formatAmount(e.target.value);
    setAmount(formattedAmount);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // remove nondigit values
    const number = value.replace(/[^\d]/g, "");

    const numberLength = number.length;
    if (numberLength < 4) return number;
    if (numberLength < 7) {
      return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
  };

  const formatAmount = (value) => {
    if (!value) return value;
    value = value.replace(/\D|^0+/g, "");
    const amt = value.replace(/[^\d]/g, "");
    const amtLength = amt.length;
    if (amtLength === 1) return `0.0${amt}`;
    if (amtLength === 2) return `0.${amt}`;
    return `${amt.slice(0, -2)}.${amt.slice(-2)}`;
  };

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
          "& > input": {mb: 1, width: "180px", p: 1},
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
          onChange={(e) => handleInputPhone(e)}
          value={phoneNumber}
        />
        <Typography>Amount to give</Typography>
        <div className="amountContainer">
          <span className="dollar">
            <Typography>$</Typography>
          </span>
          <input
            id="amount"
            name="amount"
            type="text"
            placeholder="1.00"
            onChange={(e) => handleInputAmount(e)}
            value={amount}
          />
        </div>
      </Box>
    </Box>
  );
};
