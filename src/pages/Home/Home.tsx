import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import { HeroCardsData, HomeSlidersData } from "../../constants";
import { HeroCard } from "../../components";
import { IoGift } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    </>
  );
}

export default Home;
