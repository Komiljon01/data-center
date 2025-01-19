import { Box, Typography } from "@mui/material";
import { AdditionalServicesIntroTypes } from "../../types";
import "./ServicesCard.css";
import { Link } from "react-router-dom";

interface Props {
  data: AdditionalServicesIntroTypes;
}

function ServicesCard({ data }: Props) {
  const { title, text, btnText, icon: Icon } = data;
  return (
    <Box component="div" className="services__card">
      <Box component="div" className="services__card-content">
        <Typography variant="h3" className="services__card-title">
          {title}
        </Typography>
        <Typography variant="body1" className="services__card-text">
          {text}
        </Typography>
        <Link to="" className="services__card-btn">
          {btnText}
        </Link>
      </Box>

      <Box component="span" className="services__card-img">
        {<Icon />}
      </Box>
    </Box>
  );
}

export default ServicesCard;
