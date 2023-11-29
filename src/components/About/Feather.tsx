"use client";

import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

export const Feather: FC = () => (
  <Box maxWidth="1280px" margin="0 auto" paddingX={4} paddingY={5}>
    <Typography
      variant="body2"
      fontSize={18}
      fontFamily="cursive"
      paddingBottom={2}
    >
      Za Klijente
    </Typography>
    <Typography variant="h5" fontWeight={500} maxWidth={320}>
      Pronadite idealnog fotografa za svoje potrebe
    </Typography>
    <Typography variant="body1" fontSize={18} maxWidth={390} paddingY={2}>
      Brz i jednostavan pronalazak idealnog fotografa uz pomoc nasih alata za
      pretragu.
    </Typography>

    <div>
      <Typography>
        Filteri po kategorijama (Vjencanja, Nekretnine, Potreti...)
      </Typography>
      <Typography>
        Dodatna pretraga po uslugama (Dron, Video, Print...)
      </Typography>
      <Typography>Dostupnost fotografa po lokaciji fotografiranja</Typography>
    </div>
    <Button variant="contained">Pronadi folografe</Button>
  </Box>
);
