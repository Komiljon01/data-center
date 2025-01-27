import { TabList } from "@mui/lab";
import { Accordion, styled } from "@mui/material";

// Custom Styles
export const TabListStyled = styled(TabList)(({ theme }) => ({
  "&.MuiTabs-root": {
    ".MuiTabs-flexContainer": {
      backgroundColor: "#8eb7fa",
      padding: "4px",
      borderRadius: "8px",
      height: "auto",
      minHeight: "auto",
      maxHeight: "auto",

      ".Mui-selected": {
        color: "#0021a3",
        backgroundColor: "#fff",
      },
    },

    ".MuiTab-root": {
      flex: 1,
      color: "#274068",
      fontSize: "14px",
      fontWeight: "600",
      padding: "0 20px",
      height: "40px",
      minHeight: "auto",
      borderRadius: "6px",

      ".MuiTab-iconWrapper": {
        width: "20px",
        height: "20px",

        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },

    ".MuiTabs-indicator": {
      display: "none",
    },
  },
}));

export const AccordionStyled = styled(Accordion)({
  "&.MuiAccordion-root": {
    padding: "12px 24px 12px",
    boxShadow: "-0.5px 1px 0.5px rgba(0, 0, 0, 0.2)",
    borderRadius: "16px",

    "&:before": {
      display: "none",
    },

    ".MuiAccordionSummary-root": {
      textAlign: "center",
      padding: "0",
      margin: "0",
      minHeight: "auto",
      height: "24px",

      ".MuiAccordionSummary-content .tariffs__filter-intro": {
        textAlign: "center",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: "16px",
        color: "#0021a3",
        fontWeight: "600",
      },
    },

    ".MuiAccordionDetails-root": {
      padding: "0",
      marginTop: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "15px",

      p: {
        fontSize: "14px",
        color: "#0021a3",
        opacity: "0.8",

        ":last-child": {
          marginTop: "20px",
        },
      },

      ".MuiSelect-root": {
        padding: "7px 18px",
        borderRadius: "8px",
        backgroundColor: "#c3d7f7",
        color: "#0021a3",
      },

      ".MuiSelect-select": {
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontWeight: "600",
      },
    },
  },
});
