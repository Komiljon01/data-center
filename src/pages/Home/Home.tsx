import { Box } from "@mui/material";
import "./Home.css";
import { HeroCardsData } from "../../constants";
import { HeroCard } from "../../components";

function Home() {
  return (
    <>
      <Box component="section" className="hero">
        <Box component="div" className="container">
          <Box component="div" className="hero__cards">
            {HeroCardsData.map((item) => (
              <HeroCard data={item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
