import { Box, Typography } from "@mui/material";
import { HeroCardsTypes } from "../../types";
import "./HeroCard.css";
import { Link } from "react-router-dom";

interface Props {
  data: HeroCardsTypes;
}

function HeroCard({ data }: Props) {
  const { title, text, price, btnText, icon: Icon } = data;

  return (
    <Box component="div" className="hero__card">
      <Box component="div" className="hero__card-content">
        <Typography variant="h3" className="hero__card-title">
          {title}
        </Typography>
        <Box
          component="div"
          className="hero__card-content_price"
        >
          <Typography variant="body1">{price} so'm</Typography>
          <Box component="span">/ oylik</Box>
        </Box>
        <Typography variant="body1" className="hero__card-text">
          {text}
        </Typography>
        <Link to="" className="hero__card-btn">
          {btnText}
        </Link>
      </Box>
      <Box component="div" className="hero__card-price">
        <Box component="span">{price} so'm</Box>
        <Typography variant="body1">oyiga</Typography>
      </Box>

      <Box component="span" className="hero__card-img">
        {<Icon />}
      </Box>
    </Box>
  );
}

export default HeroCard;
