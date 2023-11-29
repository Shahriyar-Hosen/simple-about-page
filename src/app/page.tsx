import { Author, Feather, Hero, Info } from "@/components";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box component="section">
      <Hero />
      <Info />
      <Feather />
      <Author />
      <h1>Hello world</h1>
      {/* Footer */}
    </Box>
  );
};

export default Home;
