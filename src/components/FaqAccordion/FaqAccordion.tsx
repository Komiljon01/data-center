import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import "./FaqAccordion.css";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { clickLogo, paymeLogo, uzumLogo } from "../../assets";

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  "&.MuiAccordion-root": {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",

    "&.Mui-expanded": {
      margin: "0",
      borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)", // Ensure border stays visible when expanded

      "::before": {
        opacity: "1",
      },
    },

    ".MuiAccordionSummary-root": {
      padding: "0",
      color: "#29426c",
      gap: "10px",

      ".MuiAccordionSummary-expandIconWrapper": {
        width: "36px",
        height: "36px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "#29426c",

        [theme.breakpoints.down("sm")]: {
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
        },
      },

      ".MuiAccordionSummary-content": {
        margin: "24px 0",
      },
    },

    ".MuiAccordionDetails-root": {
      margin: "0",
      padding: "0 0 24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  },
}));

function FaqAccordion() {
  return (
    <>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            What is the difference between hosting, VDS, VPS and dedicated
            server?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">Hosting</Box> is the simplest option for
            hosting a project. You are given space on a server that is already
            fully configured for website operation, and all you have to do is
            upload files.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">VDS and VPS, or virtual server,</Box> is when
            you are given a part of a physical server for rent, only for your
            use. A virtual server is usually chosen when there are not enough
            hosting resources for a project or when it requires special software
            that cannot be installed on the hosting.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">A dedicated server</Box> is the most serious
            solution of the listed options. You get a separate physical server
            on which only your projects will be hosted. Dedicated servers are
            chosen for complex, resource-intensive projects that require maximum
            power and stability.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            I already have a website and a domain. Can I transfer all this to
            you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Yes, of course. You can transfer a registered domain in two ways:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_num">
            <Box component="li">
              <Link to="">Perform a technical domain transfer</Link> - in this
              case, the domain will work with our hosting, but will be paid for
              through the previous provider.
            </Box>
            <Box component="li">
              <Link to="">
                Transfer the domain under Data Center management
              </Link>{" "}
              - in this case, you will be able to renew the domain and manage
              its settings in one panel with the hosting, which is much more
              convenient.
            </Box>
          </Box>
          <Typography variant="body1" className="faq__accordion-text">
            You can transfer the site either <Link to="">yourself</Link> or{" "}
            <Link to="">with the help of our specialists</Link> Our specialists
            will carefully transfer all project files and set up hosting for the
            correct operation of the site.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            What payment methods do you have?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            We offer all major payment methods:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_circle">
            <Box component="li">Bank cards, including foreign ones</Box>
            <Box component="li">Wallet YouMoney</Box>
            <Box component="li">Payment by receipt at the bank</Box>
            <Box component="li">
              Payment by invoice for legal entities and individual entrepreneurs
            </Box>
          </Box>
          <Box component="div" className="faq__accordion-payment">
            <Link to="">
              <Box component="img" src={paymeLogo} alt="payme logo" />
            </Link>
            <Link to="">
              <Box component="img" src={clickLogo} alt="click logo" />
            </Link>
            <Link to="">
              <Box component="img" src={uzumLogo} alt="uzum logo" />
            </Link>
          </Box>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Is it possible to purchase 1C-Bitrix and ISPmanager licenses from
            you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Yes, you can buy both licenses from us.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">1C-Bitrix.</Box> We offer licenses for
            "1C-Bitrix: Site Management" in the following editions: Start,
            Standard, Small Business and Business. When purchasing a license,
            you get a free year of hosting or VDS - details here .
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">ISPmanager. </Box> We offer ISPmanager 6 all
            editions: Lite, Pro, Host and Business. You can order ISP in your
            control panel when creating a server or in the "Licenses" section.
            The license is purchased for 1 month and is automatically renewed
            once a month if there is money on the balance.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            What hosting plans does Data Center offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            We offer different tariff lines that are suitable for a variety of
            tasks:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_circle">
            <Box component="li">
              <Box component="span">Virtual hosting</Box> is a universal service
              that is suitable for hosting most projects.
            </Box>
            <Box component="li">
              <Box component="span">Hosting for CMS</Box> — specialized tariffs
              for hosting websites created using Wordpress, Joomla and Drupal.
            </Box>
            <Box component="li">
              <Box component="span">Hosting for 1C-Bitrix</Box> —
              high-performance tariffs optimized for hosting websites on
              1C-Bitrix and other resource-intensive projects.
            </Box>
          </Box>
          <Typography variant="body1" className="faq__accordion-text">
            Within each line, you will find several tariffs that differ in the
            number of resources offered - choose the option that your project
            currently requires.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            How to choose the right tariff for your website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Focus on the type and needs of your project.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            If the site is created on CMS Wordpress, Joomla or Drupal, pay
            attention to the CMS hosting rates.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            If the site requires high performance and a lot of resources, one of
            the hosting rates for 1C-Bitrix will suit you.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            However, in most cases, one of the virtual hosting rates will suit
            you: Year+, Optimo+, Century+ or Millennium+. Study the parameters
            of the rates - they differ in the number of sites, disk space, and
            load limits. Choose the rate that seems sufficient now - you can
            always increase it if there are not enough resources.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Why is it good to be with us?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            We host your websites on modern server equipment in reliable
            fault-tolerant data centers and guarantee website availability at
            99.98% SLA.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Working with our hosting does not require special skills and
            technical knowledge - you will have a convenient and understandable
            control panel through which you can solve most problems.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            And if you need additional help - our support is always there 24/7.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
    </>
  );
}

export default FaqAccordion;
