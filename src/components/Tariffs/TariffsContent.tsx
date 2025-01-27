import React from "react";
import { PlanType, PricingCategory } from "../../types";
import { Box, Button, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa6";

const TariffContent: React.FC<{ tariffData: PricingCategory }> = ({
  tariffData,
}) => {
  return (
    <>
      {Object.keys(tariffData).map((planKey, index) => {
        const plan = tariffData[planKey as PlanType];
        const {
          customerChoice,
          transfer,
          text,
          title,
          price,
          services,
          servicesLists,
          buttonText,
          footerText,
          oldPrice,
        } = plan;

        return (
          <Box
            component="div"
            key={index}
            className={`tariff__card ${customerChoice && "customer-choice"}`}
          >
            {!transfer ? (
              <Box component="div" className="tariff__card-top">
                {customerChoice && (
                  <Box component="span" className="customer__choice-text">
                    Mijozlar tanlovi
                  </Box>
                )}

                <Box component="div">
                  <Box component="span" className="tariff__card-top_title">
                    {title}
                  </Box>
                  <Typography variant="body1" className="tariff__card-top_text">
                    {text}
                  </Typography>
                </Box>
                <Box component="div" className="tariff__card-prices">
                  {oldPrice && <Box component="del">{oldPrice}</Box>}
                  <Typography variant="h4">
                    {price}k uzs
                    <Box component="sup">/oyiga</Box>
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box className="tariff__card-transfer_wrapper">
                <Box component="div" className="tariff__card-transfer">
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="body1">{text}</Typography>
                </Box>
                <Box component="div" className="tariff__card-lists">
                  {servicesLists?.map((item, idx) => (
                    <Typography variant="body1" key={idx}>
                      <FaCheck />
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Button variant="contained" disableElevation>
                  {buttonText}
                </Button>

                <Typography
                  variant="body1"
                  className="tariff__card-footer_text"
                >
                  {footerText}
                </Typography>
              </Box>
            )}

            {!transfer && (
              <Box component="div" className="tariff__card-content">
                <Box component="div" className="tariff__card-lists">
                  <Typography variant="body1">
                    <FaCheck />
                    <Box component="b">{services?.site} </Box>
                    ta sayt{Number(services?.site) > 1 && "lar"}
                  </Typography>
                  <Typography variant="body1">
                    <FaCheck />
                    Tezkor NVMe disklariga
                    <Box component="b">{services?.drives} </Box>
                  </Typography>
                  {Number(services?.databases) > 100 ? (
                    <Typography variant="body1">
                      <FaCheck />
                      MySQL yuklash -{" "}
                      <Box component="b">{services?.databases} </Box>
                    </Typography>
                  ) : (
                    <Typography variant="body1">
                      <FaCheck />
                      <Box component="b">{services?.databases} </Box>databazalar
                    </Typography>
                  )}
                  <Typography variant="body1">
                    <FaCheck />
                    <Box component="b">{services?.certificate} </Box>
                    SSL Sertifikat
                  </Typography>
                  <Typography variant="body1">
                    <FaCheck />
                    <Box component="b">{services?.mailQuota} </Box>
                    pochta kvotasi
                  </Typography>
                  <Typography variant="body1">
                    <FaCheck />
                    <Box component="b">{services?.mailboxes} </Box>
                    pochtalar
                  </Typography>
                </Box>

                <Button variant="contained" disableElevation>
                  {buttonText}
                </Button>

                <Typography
                  variant="body1"
                  className="tariff__card-footer_text"
                >
                  {footerText}
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default TariffContent;
