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

// Tarrifs
export interface TarriffsTypes {
  classical: PricingStructure;
  premium: PricingStructure;
}

export type PlanDetails = {
  customerChoice: boolean;
  transfer: boolean;
  title: string;
  text: string;
  oldPrice?: string;
  price?: string;
  services?: ServicesDetails;
  servicesLists?: string[];
  buttonText: string;
  footerText: string;
};

export type ServicesDetails = {
  site: string;
  drives: string;
  databases: string;
  certificate: string;
  mailQuota: string;
  mailboxes: string;
};

export type PlanType = "year" | "optimo" | "century" | "millenium";

export type PricingCategory = Record<PlanType, PlanDetails>;

export type Duration = "monthly" | "yearly" | "3years";

export type PricingStructure = Record<Duration, PricingCategory>;

/* ------------------------------------ = ----------------------------------- */

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
