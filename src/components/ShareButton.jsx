import React, {useState} from "react";
import {Button, Box} from "@mui/material";

export const ShareButton = ({cause, message, children}) => {
  const url = "rileybergamasco.com/giveapp/give";

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Donate to ${cause}!`,
          url: url,
          text: message,
        })
        .then(() => {
          console.log("success");
        })
        .catch(console.error);
    } else {
      alert("no native sharing: " + message);
    }
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {children}
    </Button>
  );
};
