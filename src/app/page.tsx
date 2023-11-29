import { Author, Feather, Footer, Hero, Info } from "@/components";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box component="section">
      <Hero />
      <Info />
      <Feather />
      <Author />
      <Footer />
    </Box>
  );
};

export default Home;
