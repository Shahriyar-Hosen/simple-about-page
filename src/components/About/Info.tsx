"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Info: FC = () => (
  <Box
    width="100%"
    sx={{ backgroundColor: "#f8faff" }}
    borderBottom={1}
    borderColor="#f8faff"
    boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
    padding={{ xs: 3, md: 5 }}
  >
    <Typography
      variant="h1"
      fontSize={{ xs: 20, md: 30 }}
      textAlign="center"
      fontWeight={500}
    >
      Tko se može oglasiti na Fotografiraj.hr?
    </Typography>
    <Typography
      variant="body1"
      textAlign={{ xs: "justify", md: "center" }}
      maxWidth={700}
      margin="0 auto"
      marginTop={2}
    >
      Dobrodošli su svi profesionalni fotografi čija kvaliteta fotografija
      zadovoljava naše standarde. Ukoliko se profesionalno baviš fotografijom,
      registriraj se i pridruži se našoj zajednici.
    </Typography>
  </Box>
);
