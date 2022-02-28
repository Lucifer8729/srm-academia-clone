import React from "react";
import Image from "next/image";
import img1 from "../../public/academia-hat.bmp";
import img2 from "../../public/image2.bmp";

import { Box, Typography } from "@mui/material";

const circular = () => {
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
      <Box sx={{ border: "solid 1px #1E90FF", width: "70%", mt: 4, mb: 2 }}>
        <Typography sx={{ color: "blue", mt: 2, mb: 2, fontSize: "28px" }}>
          Students who are on internship with High Radius need not come to
          campus physically. They will continue with online mode.
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "100%", mt: 4, mb: 2 }}>
        <Typography sx={{ color: "red", mt: 2, mb: 2, fontSize: "18px" }}>
          👉You are hereby directed not to spam the email accounts of faculty
          members, HoDs, Deans, Directors and other senior administrators of SRM
          IST by sending the same content through multiple email accounts and
          from non-srmist email (official email IDs) accounts by an individual.
          This is going to be an unproductive effort.
          <br />
          <br /> You are also informed that any email coming from student&apos;s
          personal email accounts will not be entertained and will be summarily
          rejected or blocked.
        </Typography>
      </Box>
      <Typography sx={{ m: 4 }}>Trulli</Typography>
      <Box sx={{ border: "solid 1px #1E90FF", width: "100%" }}>
        <Typography sx={{ color: "blue", mt: 2, mb: 2, fontSize: "20px" }}>
          For Registration:
          <a style={{ color: "red", textDecoration: "underline" }} href="#">
            Click Here
          </a>
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "100%", mt: 0.25 }}>
        <Typography sx={{ color: "blue", mt: 2, mb: 2, fontSize: "20px" }}>
          Last date for submission:
          <a style={{ color: "red" }}>7th March 2022.</a>
        </Typography>
      </Box>
      <Box sx={{ border: "solid 1px #1E90FF", width: "100%", mt: 0.25, mb: 8 }}>
        <Typography sx={{ color: "blue", mt: 2, mb: 2, fontSize: "20px" }}>
          For Registration:
          <a style={{ color: "red" }}>24th-26th March 2022.</a>
        </Typography>
      </Box>
      <Box>
        <Image alt="Lamp" src={img2} width="300" height="200" />
      </Box>
    </Box>
  );
};

export default circular;
