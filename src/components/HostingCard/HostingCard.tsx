import { Box, Typography } from "@mui/material";
import { HostingFeaturesCardsTypes } from "../../types";
import "./HostingCard.css";

interface Props {
  data: HostingFeaturesCardsTypes;
}

function HostingCard({ data }: Props) {
  const { title, text, icon: Icon } = data;
  return (
    <Box component="div" className="hosting__features-card">
      <Box component="span" className="hosting__features-card-img">
        {<Icon />}
      </Box>
      <Typography variant="h3" className="hosting__features-card-title">
        {title}
      </Typography>
      <Typography variant="body1" className="hosting__features-card-text">
        {text}
      </Typography>
    </Box>
  );
}

export default HostingCard;
