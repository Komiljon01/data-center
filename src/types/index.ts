import { IconType } from "react-icons";

export interface NavbarListsTypes {
  id: string;
  text: string;
  icon: IconType;
  path?: string;
  type: "link" | "modal";
}

export interface HeroCardsTypes {
  id: string;
  title: string;
  text: string;
  price: string;
  btnText: string;
  icon: IconType;
}
