import { Accordion, styled } from "@mui/material";

const AccordionStyled = styled(Accordion)({
  "&.MuiAccordion-root": {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
    padding: "0",
    margin: "0",

    ".MuiAccordionSummary-root": {
      padding: "0",
      margin: "0",
      color: "white",
      transition: "all 0.5s ease",
      minHeight: "auto",

      ".MuiAccordionSummary-content": {
        margin: "0",
      },

      ".MuiAccordionSummary-expandIconWrapper": {
        color: "white",
      },
    },

    ".MuiAccordionDetails-root": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      gap: "10px",
      paddingTop: "15px",

      a: {
        transition: "all .3s ease",
        fontSize: "14px",

        "&:hover": {
          opacity: "0.8",
          transform: "translateX(3px)",
        },
      },
    },
  },
});

export default AccordionStyled;
