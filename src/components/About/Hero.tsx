"use client";

import { IHeroCard } from "@/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

export const Hero: FC = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));

  const HeroCard: FC<IHeroCard> = ({ title, content }) => (
    <Card
      sx={{
        backgroundColor: "#161616",
        p: "24px",
        px: "16px",
        borderRadius: "30px",
        width: "fit-content",
        maxWidth: "360px",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: "white" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white", mt: "20px" }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        backgroundImage: 'url("/hero-bg.png")',
        backgroundSize: "center",
        backgroundPosition: "top",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        px: "20px",
        py: "30px",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "white", fontWeight: 400, pt: "30px" }}
        textAlign="center"
      >
        Fotografiraj.hr - profesionalni fotografi na jednom mjestu
      </Typography>

      <Typography
        variant="h1"
        sx={{
          color: "white",
          maxWidth: "680px",
          textAlign: "center",
        }}
        fontSize={{ xs: 30, md: 70 }}
        paddingY={{ xs: 3, md: 4 }}
        paddingBottom={{ xs: 3, md: 5.5 }}
      >
        Najveća platforma za prezentaciju fotografa u Hrvatskoj.
      </Typography>

      <Button variant="contained">Pridruži se</Button>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={{ xs: 5, md: 6 }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 20 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={6} width="fit-content">
            <HeroCard
              title="Naša misija"
              content="Učiniti pretragu fotografa u Hrvatskoj brzom, jednostavnom i učinkovitom, a fotografe prezentirati široj klijenteli."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <HeroCard
              title="Naša vizija"
              content="Okupiti sve kvalitetne profesionalne fotografe u Hrvatskoj te postati sveobuhvatna baza i sinonim za pretragu fotografa."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
