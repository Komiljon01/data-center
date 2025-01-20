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

export interface HomeSliderTypes {
  id: string;
  text?: string;
  img: string;
  type: "image" | "content";
}

export interface AdditionalServicesIntroTypes {
  id: string;
  title: string;
  text: string;
  btnText: string;
  icon: IconType;
}

export interface AdditionalServicesCardsTypes {
  id: string;
  title: string;
  text: string;
}

export interface HostingFeaturesCardsTypes {
  id: string;
  title: string;
  text: string;
  icon: IconType;
}

export interface HostingPanelTypes {
  id: string;
  text: string;
}

export interface FooterListsTypes {
  id: string;
  text: string;
}
