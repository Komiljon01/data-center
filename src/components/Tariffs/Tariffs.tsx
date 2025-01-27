import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Tab,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { TabContext } from "@mui/lab";
import { TarrifsData } from "../../constants";
import { FaRegClock, FaRegStar, FaXmark } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import "./Tariffs.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { TabListStyled, AccordionStyled } from ".";
import TariffContent from "./TariffsContent";
import { TarriffsTypes } from "../../types";

const Tariffs: React.FC = () => {
  const [mainTab, setMainTab] = useState<keyof TarriffsTypes>("classical");
  const [subTab, setSubTab] =
    useState<keyof TarriffsTypes["classical"]>("monthly");
  const [isExpanded, setIsExpanded] = useState(false);

  // Main Tabs action
  const handleMainTabChange = (_: ChangeEvent<unknown>, newValue: string) => {
    setMainTab(newValue as keyof TarriffsTypes);
  };
  const handleSubTabChange = (_: ChangeEvent<unknown>, newValue: string) => {
    setSubTab(newValue as keyof TarriffsTypes["classical"]);
  };

  const currentData = TarrifsData[mainTab][subTab];

  // Filters action = mobile tabs
  const changeMainTab = (val: keyof TarriffsTypes) => setMainTab(val);
  const changeSubTab = (val: keyof TarriffsTypes["classical"]) =>
    setSubTab(val);

  const handleExpandedChange = (
    _: ChangeEvent<unknown>,
    isExpanded: boolean
  ) => {
    setIsExpanded(isExpanded);
  };

  return (
    <>
      <Box className="tariffs__tabs-wrapper">
        <TabContext value={mainTab}>
          <Box className="tariffs__main-tabs">
            <TabListStyled
              onChange={handleMainTabChange}
              aria-label="Main Tabs"
            >
              <Tab
                label="Klassik"
                value="classical"
                icon={<AiOutlineThunderbolt />}
                iconPosition="start"
              />
              <Tab
                label="Premium"
                value="premium"
                icon={<FaRegStar />}
                iconPosition="start"
              />
            </TabListStyled>
          </Box>
        </TabContext>

        <TabContext value={subTab}>
          <Box className="tariffs__sub-tabs">
            <TabListStyled onChange={handleSubTabChange} aria-label="Sub Tabs">
              <Tab label="1 Oylik" value="monthly" />
              <Tab label="1 yillik" value="yearly" />
              <Tab label="3 yillik" value="3years" />
            </TabListStyled>
          </Box>
        </TabContext>
      </Box>

      <AccordionStyled
        className="tariffs__filter"
        disableGutters
        expanded={isExpanded}
        onChange={handleExpandedChange}
      >
        <AccordionSummary>
          <Typography component="span" className="tariffs__filter-intro">
            {isExpanded ? <FaXmark /> : <VscSettings />}
            Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">Tarif</Typography>
          <FormControl fullWidth>
            <Select value={mainTab} variant="standard" disableUnderline>
              <MenuItem
                value={"classical"}
                onClick={() => changeMainTab("classical")}
              >
                <AiOutlineThunderbolt /> Klassik
              </MenuItem>
              <MenuItem
                value={"premium"}
                onClick={() => changeMainTab("premium")}
              >
                <FaRegStar /> Premium
              </MenuItem>
            </Select>
          </FormControl>

          <Typography variant="body1">Ijara muddati</Typography>
          <FormControl fullWidth>
            <Select value={subTab} variant="standard" disableUnderline>
              <MenuItem
                value={"monthly"}
                onClick={() => changeSubTab("monthly")}
              >
                1 oylik
              </MenuItem>
              <MenuItem value={"yearly"} onClick={() => changeSubTab("yearly")}>
                1 yillik
              </MenuItem>
              <MenuItem value={"3years"} onClick={() => changeSubTab("3years")}>
                3 yillik
              </MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </AccordionStyled>

      <Box component="div" className="tariffs__intro-content">
        <Box component="div">
          <Box component="span">
            <CiHeadphones />
          </Box>
          <Typography variant="body1">
            Malakali va do'stona yordam xizmati 24/7
          </Typography>
        </Box>
        <Box component="div">
          <Box component="span">
            <FaRegClock />
          </Box>
          <Typography variant="body1">
            99,98% server ish vaqti kafolati
          </Typography>
        </Box>
        <Box component="div">
          <Box component="span">
            <HiOutlineSquares2X2 />
          </Box>
          <Typography variant="body1">
            Intuitiv va foydalanuvchilar uchun qulay boshqaruv paneli
          </Typography>
        </Box>
      </Box>

      {/* Bottom Content */}
      <Box className="tariffs__content">
        <TariffContent tariffData={currentData} />
      </Box>
    </>
  );
};

export default Tariffs;
