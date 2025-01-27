import {
  Box,
  Button,
  Input,
  Slider,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import "./TariffsCalculator.css";
import { TariffsCalcData, TariffsCalculatorData } from "../../constants";
import TariffsCalcCard from "./TariffsCalcCard";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const SliderStyled = styled(Slider)({
  position: "absolute",
  width: "90%",
  height: "2px",
  bottom: "-12.6px",
  left: "12px",

  "& .MuiSlider-track": {
    color: "#fff",
  },

  "& .MuiSlider-thumb": {
    height: 13,
    width: 13,
    backgroundColor: "#fff",
  },

  "& .MuiSlider-rail": {
    backgroundColor: "#fff",
    color: "#fff",
    opacity: "1",
  },
});

const SwitchStyled = styled(Switch)({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#6592da",
        opacity: 1,
        border: 0,
      },
    },
  },
});

function TariffsCalculator() {
  const { name, cpu, nvme, price, ram } = TariffsCalculatorData;
  const [IP, setIP] = useState(TariffsCalculatorData.publicIP);
  const [cpuVal, setCpuVal] = useState(+cpu.count);
  const [ramVal, setRamVal] = useState(+ram.count);
  const [nvmeVal, setNvmeVal] = useState(+nvme.count);

  const baseMonthlyPrice = IP ? +price.monthlyWithIp : +price.monthlyWithoutIp;

  // Calculate the total monthly price, including the CPU, RAM, NVME cost
  const totalPrice =
    baseMonthlyPrice +
    (cpuVal - 1) * +cpu.pricePer +
    (ramVal - 1) * +ram.pricePer +
    (nvmeVal > 15 ? (nvmeVal - 15) * +nvme.pricePer : 0);

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIP(e.target.checked);
  };

  // Calculator input & slider functionality
  const handleSliderChange = (
    _: Event,
    newValue: number | number[],
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    setValue(newValue as number);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    setValue(value);
  };

  const handleBlur = (
    value: number,
    setValue: Dispatch<SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    }
  };

  return (
    <Box component="div" className="tariffsCalculator__cards">
      {TariffsCalcData.map((item) => (
        <TariffsCalcCard key={item.id} data={item} />
      ))}

      <Box component="div" className="tariffsCalculator">
        <Box component="div" className="tariffsCalculator__header">
          <Typography variant="body1" className="tariffsCalculator__name">
            {name}
          </Typography>
          <Typography variant="h4" className="tariffsCalculator__monthly">
            {totalPrice.toFixed(0)}k so'm <Box component="sup">/oyiga</Box>
          </Typography>
          <Typography variant="h3" className="tariffsCalculator__daily">
            {(totalPrice / 30).toFixed(1)}k so'm kuniga
          </Typography>
        </Box>

        <Box component="div" className="tariffsCalculator__content">
          <Box component="div" className="tariffsCalculator__content-item">
            <Typography variant="body1">
              CPU <Box component="span">3.3 GHz</Box>
            </Typography>
            <Input
              size="small"
              value={cpuVal}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, setCpuVal)
              }
              onBlur={() => handleBlur(cpuVal, setCpuVal, 1, +cpu.max)}
              inputProps={{
                step: 1,
                min: 1,
                max: cpu.max,
                type: "number",
              }}
              disableUnderline
            />
            <SliderStyled
              className="tariffsCalculator__content-slider"
              value={typeof cpuVal === "number" ? cpuVal : 0}
              onChange={(e, newValue) =>
                handleSliderChange(e, newValue, setCpuVal)
              }
              min={1}
              max={+cpu.max}
              step={1}
            />
          </Box>

          <Box component="div" className="tariffsCalculator__content-item">
            <Typography variant="body1">RAM, GB</Typography>
            <Input
              size="small"
              value={ramVal}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, setRamVal)
              }
              onBlur={() => handleBlur(ramVal, setRamVal, 1, +ram.max)}
              inputProps={{
                step: 1,
                min: 1,
                max: ram.max,
                type: "number",
              }}
              disableUnderline
            />
            <SliderStyled
              className="tariffsCalculator__content-slider"
              value={typeof ramVal === "number" ? ramVal : 0}
              onChange={(e, newValue) =>
                handleSliderChange(e, newValue, setRamVal)
              }
              min={1}
              max={+ram.max}
              step={1}
            />
          </Box>

          <Box component="div" className="tariffsCalculator__content-item">
            <Typography variant="body1">NVME, GB</Typography>
            <Input
              size="small"
              value={nvmeVal}
              onChange={(e) =>
                handleInputChange(
                  e as ChangeEvent<HTMLInputElement>,
                  setNvmeVal
                )
              }
              onBlur={() => handleBlur(nvmeVal, setNvmeVal, 5, +nvme.max)}
              inputProps={{
                step: 5,
                min: 15,
                max: nvme.max,
                type: "number",
              }}
              disableUnderline
            />
            <SliderStyled
              className="tariffsCalculator__content-slider"
              value={typeof nvmeVal === "number" ? nvmeVal : 0}
              onChange={(e, newValue) =>
                handleSliderChange(e, newValue, setNvmeVal)
              }
              min={15}
              max={+nvme.max}
              step={5}
            />
          </Box>

          <Box component="div">
            <Typography variant="body1">Umumiy IP</Typography>
            <SwitchStyled checked={IP} onChange={handleSwitchChange} />
          </Box>

          <Button
            variant="contained"
            disableElevation
            className="tariffsCalculator__btn"
          >
            Buyurtma berish
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TariffsCalculator;
