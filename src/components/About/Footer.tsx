"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Footer: FC = () => (
  <Box
    width="100%"
    paddingTop={20}
    borderBottom={1}
    borderColor="#f8faff"
    padding={{ xs: 3, md: 5 }}
    sx={{ backgroundColor: "#f8faff" }}
    boxShadow="inset 0px 2px 6px rgba(0, 0, 0, 0.1)"
  >
    <Typography
      variant="h1"
      fontSize={{ xs: 20, md: 30 }}
      textAlign="center"
      fontWeight={400}
    >
      Kontaktirajte nas.
    </Typography>
    <Typography
      variant="body2"
      textAlign={{ xs: "justify", md: "center" }}
      maxWidth={320}
      margin="0 auto"
      marginY={2}
    >
      Imate li kakvih pitanja, prijedloga ili ponuda za&nbsp;suradnju, javite
      nam se putem emaila na adresu:
    </Typography>
    <Typography
      variant="h1"
      fontSize={{ xs: 20, md: 30 }}
      textAlign="center"
      fontWeight={600}
    >
      iInfo@fotografiraj.nr
    </Typography>
  </Box>
);
