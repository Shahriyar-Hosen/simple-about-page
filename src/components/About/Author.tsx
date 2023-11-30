"use client";

import { lvan, never } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

export const Author: FC = () => (
  <Box borderTop={2} borderColor="rgba(0, 0, 0, 0.05)" paddingY={1}>
    <Box maxWidth="1280px" margin="0 auto">
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
          spacing={{ xs: 2, md: 5 }}
          justifyContent="center"
          alignItems="start"
          flexDirection={{ xs: "row-reverse", md: "row" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={{ xs: "block", md: "none" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="start"
              gap={{ xs: 2, md: 5 }}
              maxWidth="100%"
              flexWrap="wrap"
              paddingTop={3}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                gap={1}
                marginTop={{ xl: "", md: "80px" }}
              >
                <Image
                  src={lvan}
                  alt=""
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                  }}
                />
                <Typography>Ivan Bile</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                gap={1}
              >
                <Image
                  src={never}
                  alt=""
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                  }}
                />
                <Typography>Never Kalar</Typography>
              </Box>
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="start"
              gap={5}
              maxWidth="100%"
              paddingTop={3}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                gap={1}
                marginTop="80px"
              >
                <Image
                  src={lvan}
                  alt=""
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                  }}
                />
                <Typography>Ivan Bile</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                gap={1}
              >
                <Image
                  src={never}
                  alt=""
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                  }}
                />
                <Typography>Never Kalar</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
);
