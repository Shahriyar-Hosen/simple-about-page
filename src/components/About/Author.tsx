"use client";

import { author } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

export const Author: FC = () => (
  <Box boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)" paddingY={1}>
    <Box maxWidth="1280px" margin="0 auto">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginX={{ xs: 3, md: 10 }}
        marginY={{ xs: 10, md: 10 }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "row-reverse", md: "row" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={{ xs: "block", md: "none" }}
          >
            <Box>
              <Image
                src={author}
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
              <Typography variant="h4" fontWeight={500}>
                Upoznajte tim Fotografiraj.hr
              </Typography>
              <Typography variant="body1" maxWidth={450} marginTop={2}>
                Suosnivaci Fotografiraj.hr su prijatelji jos od osnovnoskolskih
                dana kada su vec radili zajedno na hobi projektima.
              </Typography>
              <Typography variant="body1" maxWidth={450} marginTop={1}>
                Zamisao o izradi platforme je nastala 2016. godine iz osobne
                potrebe za kvalitetnijim nacinom pronalaska profesionalnih
                fotografa.
              </Typography>
              <Typography variant="body1" maxWidth={450} marginTop={1}>
                Tada su odlugili izraditi platformu koja bi spajala fotografe s
                klijentima koji traze njihove usluge, a 2023. godine se ideja
                napokon realizirala.
              </Typography>
              <Typography variant="body1" maxWidth={450} marginTop={1}>
                lvan ima dugogodisnje iskustvo u fotografiji koja ga uvijek
                iznova inspirira, dok je Neven iskusan full stack programer koji
                je oduvijek bio zainteresiran za rjesavanje problema.
              </Typography>
              <Typography variant="body1" maxWidth={450} marginTop={1}>
                Tim je strastven u vezi Fotografiraj.hr projekta i vjeruje da je
                ova platforma odlican alat za pronalazak savrSenog fotografa za
                svacije potrebe, a fotografima alat za dolazak do novih
                klijenata.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={{ xs: "none", md: "block" }}
          >
            <Box>
              <Image
                src={author}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
);
