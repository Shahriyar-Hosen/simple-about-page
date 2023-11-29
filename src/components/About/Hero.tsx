"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Hero: FC = () => (
  <Box
    sx={{
      backgroundImage: 'url("/hero-bg.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      px: "20px",
      py: "20px",
    }}
  >
    <Typography
      variant="h1"
      sx={{ color: "white", fontSize: "50px", pt: "30px" }}
    >
      Welcome to My Next.js App
    </Typography>
  </Box>
);
