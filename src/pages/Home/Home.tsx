import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import {
  AdditionalServicesCards,
  AdditionalServicesIntroCards,
  HeroCardsData,
  HomeSlidersData,
  HostingFeaturesCardsData,
  HostingPanelData,
} from "../../constants";
import {
  FaqAccordion,
  HeroCard,
  HostingCard,
  ServicesCard,
  Tariffs,
} from "../../components";
import { IoGift } from "react-icons/io5";
import { FaCheck, FaGlobe } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { panelDesctopIMG, panelMobileIMG } from "../../assets";

function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    swipe: false,
    touchMove: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box component="section" className="hero">
        <Box component="div" className="container">
          <Box component="div" className="hero__cards">
            {HeroCardsData.map((item) => (
              <HeroCard data={item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" className="home__domains">
        <Box component="div" className="container">
          <Box component="div" className="home__domains-transfer">
            <Box className="home__domains-transfer_content">
              <Typography
                variant="h3"
                className="home__domains-transfer_title1"
              >
                We will transfer websites, domains and mail
              </Typography>
              <Typography
                variant="h3"
                className="home__domains-transfer_title2"
              >
                any complexity in 24 hours!
              </Typography>
            </Box>
            <Box component="div" className="home__domains-transfer_footer">
              <Button variant="contained" disableElevation>
                Transfer websites or domains
              </Button>

              <Box component="div" className="home__domains-transfer_prize">
                <Box component="span">
                  <IoGift />
                </Box>
                <Typography variant="body1">
                  We will transfer your balance from another hosting provider or
                  give you 3 months as a gift when paying for a year
                </Typography>
              </Box>
            </Box>
            <Box component="span" className="home__domains-transfer_icon">
              <FaGlobe />
            </Box>
          </Box>

          <Box component="section" className="domain__register">
            <Typography variant="h4" className="domain__register-title">
              Domain registration <Box component="span">from 50k soum</Box>
            </Typography>
            <Typography variant="body1" className="domain__register-text">
              Huge selection and best prices for registration and renewal
            </Typography>

            <Box component="form" className="domain__register-form">
              <Box
                component="input"
                type="search"
                placeholder="Enter domain or word"
              />
              <Button type="submit" variant="contained" disableElevation>
                Check
              </Button>
            </Box>

            <Box component="span" className="domain__register-icon">
              <GrCertificate />
            </Box>
          </Box>

          <Box component="div" className="home__domains-sliders">
            <Slider {...settings}>
              {HomeSlidersData.map((item) => {
                const { id, text, img, type } = item;

                return (
                  <Box
                    component="div"
                    className="home__domains-slider"
                    key={id}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={text}
                      style={{ width: type === "image" ? "auto" : "50px" }}
                    />
                    <Typography variant="body1">{text}</Typography>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>

      <Box component="section" className="tariffs">
        <Box component="div" className="container">
          <Typography variant="h2" className="tariffs__intro">
            Virtual Hosting Rates
          </Typography>

          <Tariffs />
        </Box>
      </Box>

      <Box component="section" className="additional__services">
        <Box component="div" className="container">
          {/* Intro */}
          <Box component="div" className="additional__services-intro">
            <Typography variant="h2" className="additional__services-title">
              Additional services
            </Typography>
            <Typography variant="body1" className="additional__services-text">
              We offer a variety of additional services to solve various
              problems. The required option can be connected and disconnected at
              any time.
            </Typography>
          </Box>

          {/* Cards */}
          <Box component="div" className="services__cards">
            {AdditionalServicesIntroCards.map((item) => (
              <ServicesCard key={item.id} data={item} />
            ))}
          </Box>

          <Typography variant="body1" className="additional__services-more">
            And also:
          </Typography>

          <Box component="div" className="additional__services-cards">
            {AdditionalServicesCards.map(({ id, title, text }) => (
              <Box className="additional__sercices-card" key={id}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" className="hosting__features">
        <Box component="div" className="container">
          {/* Intro */}
          <Box component="div" className="hosting__features-intro">
            <Typography variant="h2" className="hosting__features-title">
              Data Center — modern and reliable hosting
            </Typography>
            <Typography variant="body1" className="hosting__features-text">
              With us you can buy hosting for a website of any complexity: from
              a simple business card website to complex applications based on
              1C-Bitrix.
            </Typography>
          </Box>

          {/* Cards */}
          <Box component="div" className="hosting__features-cards">
            {HostingFeaturesCardsData.map((item) => (
              <HostingCard key={item.id} data={item} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" className="hosting__panel">
        <Box component="div" className="container">
          <Typography variant="h2" className="hosting__panel-intro">
            Hosting Control Panel
          </Typography>

          <Box className="hosting__panel-card">
            <Box className="hosting__panel-content">
              <Typography
                variant="body1"
                className="hosting__panel-content_text"
              >
                Data center control panel is a convenient and clear web
                interface for managing all services, options and their settings
                in one window
              </Typography>

              <Typography
                variant="body1"
                className="hosting__panel-content_title"
              >
                In the control panel you can:
              </Typography>

              <Box component="div" className="hosting__panel-features">
                {HostingPanelData.map(({ id, text }) => (
                  <Box
                    component="div"
                    key={id}
                    className="hosting__panel-feature"
                  >
                    <Box component="span">
                      <FaCheck />
                    </Box>
                    <Typography variant="body1">{text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="hosting__panel-card_img">
              <Box component="img" src={panelDesctopIMG} />
              <Box component="img" src={panelMobileIMG} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" className="faq">
        <Box component="div" className="container">
          <Typography variant="h2" className="faq__intro">
            Questions and Answers
          </Typography>
          <Box component="div" className="faq__accordions">
            <FaqAccordion />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
