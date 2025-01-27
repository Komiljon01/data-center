import {
  Box,
  Button,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { TariffsCalcCardsTypes } from "../../types";
import { ChangeEvent, useState } from "react";
import { BsQuestion } from "react-icons/bs";

function TariffsCalcCard({ data }: { data: TariffsCalcCardsTypes }) {
  const { cpu, internet, name, nvme, price, ram, type } = data;
  const [IP, setIP] = useState(data.publicIP);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIP(e.target.checked);
  };

  const tooltipText =
    "Serverlar Intel Xeon Gold 6348 3,3 gigagertsli Intel Xeon Gold 6230R 2,8 gigagertsli AMD EPYC 7502 3,3 gigagertsli protsessorli klasterlarda yaratilgan.";

  return (
    <Box component="div" className="tariffsCalculator__card">
      <Box component="div" className="tariffsCalculator__card-header">
        {type === "clients" && (
          <Box component="span" className="tariffsCalculator__card-client">
            Mijozlar tanlovi
          </Box>
        )}

        <Typography variant="body1" className="tariffsCalculator__card-name">
          {name}
        </Typography>
        <Typography variant="h4" className="tariffsCalculator__card-monthly">
          {IP ? price.monthlyWithIp : price.monthlyWithoutIp}k so'm{" "}
          <Box component="sup">/oyiga</Box>
        </Typography>
        <Typography variant="h3" className="tariffsCalculator__card-daily">
          {IP ? +price.monthlyWithIp / 30 : +price.monthlyWithoutIp / 30}k uzs
          kuniga
        </Typography>
      </Box>

      <Box component="div" className="tariffsCalculator__content">
        <Box component="div">
          <Box component="span" className="tariffsCalculator__content-text">
            CPU
            <Tooltip
              title={tooltipText}
              placement="top"
              disableTouchListener
              className="tooltipjon"
            >
              <IconButton
                disableRipple
                className="tariffsCalculator__tooltip-icon"
              >
                <BsQuestion />
              </IconButton>
            </Tooltip>
          </Box>

          <Box component="b">{cpu}</Box>
        </Box>
        <Box component="div">
          <Box component="span" className="tariffsCalculator__content-text">
            Ram
          </Box>
          <Box component="b">{ram}</Box>
        </Box>
        <Box component="div">
          <Box component="span" className="tariffsCalculator__content-text">
            NVME
          </Box>
          <Box component="b">{nvme}</Box>
        </Box>
        <Box component="div">
          <Box component="span" className="tariffsCalculator__content-text">
            Internet
          </Box>
          <Box component="b">{internet}</Box>
        </Box>
        <Box component="div">
          <Box component="span" className="tariffsCalculator__content-text">
            Umumiy IP
          </Box>
          <Switch checked={IP} onChange={handleChange} />
        </Box>
        <Button
          variant="contained"
          disableElevation
          className="tariffsCalculator__content-btn"
        >
          Buyurtma berish
        </Button>
      </Box>
    </Box>
  );
}

export default TariffsCalcCard;
