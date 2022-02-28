import React from "react";
import Image from "next/image";
import img1 from "../../public/academia-hat.bmp";
import img2 from "../../public/image2.bmp";

import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "azure",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: 5,
        pb: 5,
      }}
    >
      <Box>
        <Image alt="Lamp" src={img1} width="300" height="200" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ color: "red", mt: 2, mb: 2 }}>
          Dear Students,
        </Typography>
        <Typography sx={{ color: "blue" }}>
          Greetings from College of Engineering & Technology, SRMIST !!
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "70%", mt: 5, mb: 2 }}>
        <Typography sx={{ color: "blue", mt: 2, mb: 2, fontSize: "24px" }}>
          👉
          <a style={{ color: "red" }}>
            Information for III year B.Tech(UG) Students:-
          </a>
          We are pleased to inform you that we will be opening the oncampus
          classes from
          <a style={{ color: "red" }}>14/03/2022 (Monday).</a> The classes will
          be held through physical mode only. SOPs to be strictly adhered to.
          Suitable travel plans can be made at your end. Those who have already
          booked the hostels will be permitted to occupy their rooms from{" "}
          <a style={{ color: "red" }}>1st of March, 2022.</a> No fresh bookings
          for the hostel will be permitted. SRMIST awaits your return to
          experience the lively campus.🙂
        </Typography>
      </Box>
      <Typography sx={{ m: 4 }}>test test</Typography>
      <Box sx={{ border: "solid 1px #1E90FF", width: "60%" }}>
        <Typography sx={{ color: "red", fontSize: "24px" }}>
          Hostel booking for III Year B.Tech, B.Arch and B. Des students,
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "60%", mt: 0.25 }}>
        <Typography sx={{ fontSize: "24px" }}>
          Hostel booking portal:
          <a style={{ color: "red", textDecoration: "underline" }} href="#">
            Click Here
          </a>
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "60%", mt: 0.25, mb: 8 }}>
        <Typography sx={{ fontSize: "24px" }}>
          Use your Net ID and Password.
        </Typography>
      </Box>
      <Box>
        <Image alt="Lamp" src={img2} width="300" height="200" />
      </Box>
    </Box>
  );
};

export default index;
