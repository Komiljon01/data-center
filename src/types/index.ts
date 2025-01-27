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

// Tariffs Calculator
export interface TariffsCalcCardsTypes {
  id: string;
  name: string;
  price: TariffsCalcPrice;
  cpu: string;
  ram: string;
  nvme: string;
  internet: string;
  publicIP: boolean;
  type: "clients" | "simple";
}

export interface TarrifsCalculatorTypes {
  name: string;
  price: TariffsCalcPrice;
  cpu: priceCpuRamNvme;
  ram: priceCpuRamNvme;
  nvme: priceCpuRamNvme;
  publicIP: boolean;
}

interface priceCpuRamNvme {
  count: string;
  pricePer: string;
  max: string;
}

interface TariffsCalcPrice {
  monthlyWithIp: string;
  monthlyWithoutIp: string;
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
