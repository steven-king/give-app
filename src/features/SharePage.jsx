import React, {useState} from "react";
import {Typography, Button, Box} from "@mui/material";

export const SharePage = ({cause, name}) => {
  const [url, setUrl] = useState("rileybergamasco.com/giveapp/give");
  const [message, setMessage] = useState(
    `Hi this is ${name}! I just made a donation to help ${cause}. Can you join me by donating $1?`
  );

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Donate Now",
          url: url,
          text: message,
        })
        .then(() => {
          console.log("success");
        })
        .catch(console.error);
    } else {
      console.log("no native sharing");
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h4" align="center">
        {`Thank you for donating to ${cause}!`}
      </Typography>
      <Typography align="center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        voluptate error perspiciatis earum illum laboriosam? Voluptatem
        accusamus eius culpa vitae similique distinctio officia cumque dolores
        libero, placeat, dignissimos laudantium ad.
      </Typography>
      <Box sx={{display: "flex", justifyContent: "center", m: 2}}>
        <Button variant="contained" onClick={handleClick}>
          Share with friends
        </Button>
      </Box>
    </React.Fragment>
  );
};
