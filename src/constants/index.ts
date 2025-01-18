import { FaCreditCard } from "react-icons/fa6";
import { NavbarListsTypes } from "./../types/index";
import uuid4 from "uuid4";
import { MdBook } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

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
