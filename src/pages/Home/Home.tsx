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
  TariffsCalculator,
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
            <Typography variant="h3" className="home__domains-transfer_title">
              Biz{" "}
              <Box component="span">
                24 soat ichida har qanday murakkablikdagi
              </Box>{" "}
              veb-saytlar, domenlar va elektron pochta xabarlarini o'tkazamiz!
            </Typography>

            <Box component="div" className="home__domains-transfer_footer">
              <Button variant="contained" disableElevation>
                Veb-sayt yoki domenlarni o'tkazish
              </Button>

              <Box component="div" className="home__domains-transfer_prize">
                <Box component="span">
                  <IoGift />
                </Box>
                <Typography variant="body1">
                  Balansingizni boshqa hosting provayderidan o'tkazamiz yoki bir
                  yil to'laganingizda sizga 3 oy sovg'a qilamiz
                </Typography>
              </Box>
            </Box>
            <Box component="span" className="home__domains-transfer_icon">
              <FaGlobe />
            </Box>
          </Box>

          <Box component="section" className="domain__register">
            <Typography variant="h4" className="domain__register-title">
              Domenni ro'yxatdan o'tkazish{" "}
              <Box component="span">50k so'mdan</Box>
            </Typography>
            <Typography variant="body1" className="domain__register-text">
              Ro'yxatdan o'tish va yangilash uchun katta tanlov va eng yaxshi
              narxlar
            </Typography>

            <Box component="form" className="domain__register-form">
              <Box
                component="input"
                type="search"
                placeholder="Domen yoki so'zni kiriting"
              />
              <Button type="submit" variant="contained" disableElevation>
                Tekshirish
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
            Virtual hosting tariflari
          </Typography>

          <Tariffs />

          <TariffsCalculator />
        </Box>
      </Box>

      <Box component="section" className="additional__services">
        <Box component="div" className="container">
          {/* Intro */}
          <Box component="div" className="additional__services-intro">
            <Typography variant="h2" className="additional__services-title">
              Qo'shimcha xizmatlar
            </Typography>
            <Typography variant="body1" className="additional__services-text">
              Biz turli muammolarni hal qilish uchun turli xil qo'shimcha
              xizmatlarni taklif qilamiz. Kerakli variantni istalgan vaqtda
              ulash va o'chirish mumkin
            </Typography>
          </Box>

          {/* Cards */}
          <Box component="div" className="services__cards">
            {AdditionalServicesIntroCards.map((item) => (
              <ServicesCard key={item.id} data={item} />
            ))}
          </Box>

          <Typography variant="body1" className="additional__services-more">
            Va shuningdek:
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
              Data Center — zamonaviy va ishonchli xosting
            </Typography>
            <Typography variant="body1" className="hosting__features-text">
              Biz bilan siz har qanday murakkablikdagi veb-sayt uchun xosting
              sotib olishingiz mumkin: oddiy vizitka veb-saytidan tortib
              1C-Bitrix asosidagi murakkab ilovalargacha
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
            Xosting boshqaruv paneli
          </Typography>

          <Box className="hosting__panel-card">
            <Box className="hosting__panel-content">
              <Typography
                variant="body1"
                className="hosting__panel-content_text"
              >
                Ma'lumotlar markazi boshqaruv paneli - bu barcha xizmatlar,
                variantlar va ularning sozlamalarini bir oynada boshqarish uchun
                qulay va tushunarli veb-interfeys
              </Typography>

              <Typography
                variant="body1"
                className="hosting__panel-content_title"
              >
                Boshqaruv panelida siz:
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
            Savollar va javoblar
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
