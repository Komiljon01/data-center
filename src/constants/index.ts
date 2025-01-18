import { FaCreditCard, FaGlobe, FaServer } from "react-icons/fa6";
import { HeroCardsTypes, NavbarListsTypes } from "./../types/index";
import uuid4 from "uuid4";
import { MdBook } from "react-icons/md";
import { BsCloudsFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

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
