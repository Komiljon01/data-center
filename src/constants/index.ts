import { FaCreditCard, FaGlobe, FaServer } from "react-icons/fa6";
import {
  AdditionalServicesCardsTypes,
  AdditionalServicesIntroTypes,
  HeroCardsTypes,
  HomeSliderTypes,
  NavbarListsTypes,
} from "./../types/index";
import uuid4 from "uuid4";
import { MdBook, MdDisplaySettings } from "react-icons/md";
import { BsCloudsFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CgArrowsExchange, CgWebsite } from "react-icons/cg";
import {
  digitalIMG,
  gerbIMG,
  lexuzIMG,
  mygovIMG,
  opendataIMG,
} from "../assets";

export const NavbarListsData: NavbarListsTypes[] = [
  { id: uuid4(), text: "Payment", icon: FaCreditCard, type: "modal" },
  {
    id: uuid4(),
    path: "",
    text: "Service documentation",
    icon: MdBook,
    type: "link",
  },
  {
    id: uuid4(),
    path: "",
    text: "Accounting documents",
    icon: BsFillClipboard2CheckFill,
    type: "link",
  },
  { id: uuid4(), path: "", text: "Login", icon: FiLogIn, type: "link" },
];

export { default as AccordionStyled } from "./components/AccordionStyled";

export const HeroCardsData: HeroCardsTypes[] = [
  {
    id: uuid4(),
    title: "Hosting for a website",
    text: "Create and host websites of any complexity - from simple business cards to large stores on 1C-Bitrix",
    price: "50k",
    btnText: "Try it for free",
    icon: FaGlobe,
  },
  {
    id: uuid4(),
    title: "VDS and VPS",
    text: "Virtual servers with hourly payment. Change the server configuration at any time and in a couple of clicks",
    price: "100k",
    btnText: "Select server",
    icon: BsCloudsFill,
  },
  {
    id: uuid4(),
    title: "Servers",
    text: "Rent of physical servers of any configuration - ready-made assemblies or on request",
    price: "120k",
    btnText: "Select server",
    icon: FaServer,
  },
  {
    id: uuid4(),
    title: "Website builder",
    text: "Create a website without using programmers and designers in just 15 minutes",
    price: "180k",
    btnText: "Try it for free",
    icon: CgWebsite,
  },
];

export const HomeSlidersData: HomeSliderTypes[] = [
  {
    id: uuid4(),
    text: "Ministry of Digital Technologies of the Republic of Uzbekistan",
    img: digitalIMG,
    type: "content",
  },
  {
    id: uuid4(),
    text: "The Government portal of the Republic of Uzbekistan",
    img: gerbIMG,
    type: "content",
  },
  {
    id: uuid4(),
    img: mygovIMG,
    type: "image",
  },
  {
    id: uuid4(),
    text: "The Government portal of the Republic of Uzbekistan",
    img: gerbIMG,
    type: "content",
  },
  {
    id: uuid4(),
    img: lexuzIMG,
    type: "image",
  },
  {
    id: uuid4(),
    text: "Official web-site of the President of Uzbekistan",
    img: gerbIMG,
    type: "content",
  },
  {
    id: uuid4(),
    text: "Open Data Portal",
    img: opendataIMG,
    type: "content",
  },
  {
    id: uuid4(),
    text: "Virtual Reception of the President of the Republic of Uzbekistan",
    img: gerbIMG,
    type: "content",
  },
];

export const AdditionalServicesIntroCards: AdditionalServicesIntroTypes[] = [
  {
    id: uuid4(),
    title: "Website transfer",
    text: "Transfer your sites and domains to Timeweb hosting while maintaining your balance, leaving only a request to technical support.",
    btnText: "Transfer sites",
    icon: CgArrowsExchange,
  },
  {
    id: uuid4(),
    title: "Turnkey website",
    text: "Order a turnkey website development for 20,000 rubles or create a website for free using a website builder.",
    btnText: "Order a website",
    icon: MdDisplaySettings,
  },
];

export const AdditionalServicesCards: AdditionalServicesCardsTypes[] = [
  {
    id: uuid4(),
    title: "Website Protector",
    text: "An automatic vulnerability scanner that checks all sites on your account for malicious code and notifies you of the results.",
  },
  {
    id: uuid4(),
    title: "Website Accelerator",
    text: "A service for optimizing website performance that will analyze current indicators and help improve performance without making changes to the code.",
  },
  {
    id: uuid4(),
    title: "DDoS and CDN protection",
    text: "Reliable reflection of attacks of any complexity at levels L3, L4 and L7 and high speed of content delivery to your users.",
  },
  {
    id: uuid4(),
    title: "Additional IP address",
    text: "Dedicated IPv4 address for setting up DDoS protection and hosting websites and domains that require their own unique address.",
  },
];
