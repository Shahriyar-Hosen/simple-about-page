"use client";

import {
  account,
  addPhoto,
  book,
  cards,
  filter,
  location,
  mockup,
  smileFace,
} from "@/assets";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export interface IFeatherCard {
  label: string;
  title: string;
  des: string;
  items: { icon: string; label: string }[];
  btnText: string;
  img: StaticImageData;
  reverse?: boolean;
}

const FeatherCard: FC<IFeatherCard> = ({
  btnText,
  des,
  img,
  items,
  label,
  title,
  reverse,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    marginX={{ xs: 3, md: 10 }}
    marginY={{ xs: 5, md: 10 }}
  >
    <Grid
      container
      spacing={{ xs: 10, md: 5 }}
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: "row-reverse", md: "row" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        display={{ xs: "block", md: reverse ? "block" : "none" }}
      >
        <Box>
          <Image
            src={img}
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} width="fit-content">
        <Box>
          <Typography
            variant="body2"
            fontSize={24}
            fontFamily="cursive"
            paddingBottom={2}
          >
            {label}
          </Typography>
          <Typography variant="h4" fontWeight={500} maxWidth={400}>
            {title}
          </Typography>
          <Typography variant="body1" fontSize={21} maxWidth={450} paddingY={2}>
            {des}
          </Typography>

          <Box>
            {items.map(({ icon, label }, i) => (
              <Typography
                key={i}
                display="flex"
                justifyContent="start"
                alignItems={{ xs: "start", md: "center" }}
                gap="5px"
                fontSize={14}
              >
                <Image src={icon} alt="" /> {label}
              </Typography>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              tetTransform: "capitalize",
              marginTop: 5,
            }}
          >
            {btnText}
          </Button>
        </Box>
      </Grid>
      {!reverse && (
        <Grid item xs={12} md={6} lg={6} display={{ xs: "none", md: "block" }}>
          <Box>
            <Image
              src={img}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  </Box>
);

export const Feather: FC = () => (
  <Box>
    <Box maxWidth="1280px" margin="0 auto">
      <FeatherCard
        img={mockup}
        label="Za Klijente"
        title="Pronadite idealnog fotografa za svoje potrebe"
        des="Brz i jednostavan pronalazak idealnog fotografa uz pomoc nasih alata
      za pretragu."
        items={[
          {
            icon: filter,
            label: `Filteri po kategorijama (Vjencanja,
        Nekretnine, Potreti...)`,
          },
          {
            icon: cards,
            label: `Dodatna pretraga po uslugama (Dron,
                Video, Print...)`,
          },
          {
            icon: location,
            label: `Dostupnost fotografa po lokaciji
              fotografiranja`,
          },
        ]}
        btnText="Pronadi folografe"
      />
      <FeatherCard
        img={book}
        label="Za folografe"
        title="Pokazi se klijentima iz raznih industrija"
        des="Regqistriraj se i prezentiraj svoje najbolje fotografije sasvim novoj klijenteli."
        items={[
          {
            icon: account,
            label: `lzradi profil fotografa potpuno besplatno`,
          },
          {
            icon: addPhoto,
            label: `Istakni svoje najbolje fotografije`,
          },
          {
            icon: smileFace,
            label: `Zaprimaj direktne upite novih klijenata`,
          },
        ]}
        btnText="Pronadi folografe"
        reverse
      />
    </Box>
  </Box>
);
