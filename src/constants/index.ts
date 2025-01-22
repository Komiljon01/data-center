import {
  FaClock,
  FaCreditCard,
  FaGlobe,
  FaLocationDot,
  FaServer,
} from "react-icons/fa6";
import {
  AdditionalServicesCardsTypes,
  AdditionalServicesIntroTypes,
  FooterListsTypes,
  HeroCardsTypes,
  HomeSliderTypes,
  HostingFeaturesCardsTypes,
  HostingPanelTypes,
  NavbarListsTypes,
  TarriffsTypes,
} from "./../types/index";
import uuid4 from "uuid4";
import { MdBook, MdDisplaySettings, MdOutlineDevices } from "react-icons/md";
import {
  BsBookmarkCheckFill,
  BsCloudsFill,
  BsFillClipboard2CheckFill,
} from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CgArrowsExchange, CgWebsite } from "react-icons/cg";
import {
  digitalIMG,
  gerbIMG,
  lexuzIMG,
  mygovIMG,
  opendataIMG,
} from "../assets";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { IoCalendarSharp, IoShieldCheckmark } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

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

export const TarrifsData: TarriffsTypes = {
  classical: {
    monthly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "Year+",
        text: "The perfect solution for a business card website",
        price: "342",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Selection of popular bloggers and gallery sites",
        price: "552",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "The best option for your company's website",
        price: "772",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Advanced solution for large e-commerce projects",
        price: "1071",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
    },
    yearly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "Year+",
        text: "The perfect solution for a business card website",
        oldPrice: "342",
        price: "222",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Selection of popular bloggers and gallery sites",
        oldPrice: "552",
        price: "357",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "The best option for your company's website",
        oldPrice: "772",
        price: "503",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Advanced solution for large e-commerce projects",
        oldPrice: "1071",
        price: "701",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
    },
    "3years": {
      year: {
        customerChoice: false,
        transfer: false,
        title: "Year+",
        text: "The perfect solution for a business card website",
        oldPrice: "342",
        price: "222",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Selection of popular bloggers and gallery sites",
        oldPrice: "552",
        price: "357",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "The best option for your company's website",
        oldPrice: "772",
        price: "503",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Advanced solution for large e-commerce projects",
        oldPrice: "1071",
        price: "701",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Unlimited",
          certificate: "Free",
          mailQuota: "10 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domain .UZ as a gift!",
      },
    },
  },

  premium: {
    monthly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "1Site",
        text: "For a small online store and company website",
        price: "741",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "For a large online store",
        price: "2061",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "For large-scale projects",
        price: "4490",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Free",
          mailQuota: "20 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "We will transfer your website to us",
        text: "When paying for hosting for a year, we will transfer not only your site, but also the remaining funds for free",
        servicesLists: [
          "Access to the panel immediately",
          "Quick transfer",
          "+3 months free",
        ],
        buttonText: "Move site",
        footerText:
          "Found the same powerful hosting cheaper? We'll give you a discount!",
      },
    },
    yearly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "1Site",
        text: "For a small online store and company website",
        oldPrice: "741",
        price: "489",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "For a large online store",
        oldPrice: "2061",
        price: "1334",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "For large-scale projects",
        oldPrice: "4490",
        price: "3600",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Free",
          mailQuota: "20 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "We will transfer your website to us",
        text: "When paying for hosting for a year, we will transfer not only your site, but also the remaining funds for free",
        servicesLists: [
          "Access to the panel immediately",
          "Quick transfer",
          "+3 months free",
        ],
        buttonText: "Move site",
        footerText:
          "Found the same powerful hosting cheaper? We'll give you a discount!",
      },
    },
    "3years": {
      year: {
        customerChoice: false,
        transfer: false,
        title: "1Site",
        text: "For a small online store and company website",
        oldPrice: "741",
        price: "489",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "For a large online store",
        oldPrice: "2061",
        price: "1334",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Free",
          mailQuota: "15 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "For large-scale projects",
        oldPrice: "4490",
        price: "3600",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Free",
          mailQuota: "20 GB",
          mailboxes: "Unlimited",
        },
        buttonText: "Start for free",
        footerText: "Domains .uz from 200k uzs",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "We will transfer your website to us",
        text: "When paying for hosting for a year, we will transfer not only your site, but also the remaining funds for free",
        servicesLists: [
          "Access to the panel immediately",
          "Quick transfer",
          "+3 months free",
        ],
        buttonText: "Move site",
        footerText:
          "Found the same powerful hosting cheaper? We'll give you a discount!",
      },
    },
  },
};

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

export const HostingFeaturesCardsData: HostingFeaturesCardsTypes[] = [
  {
    id: uuid4(),
    title: "We have been working since 2006",
    text: "We already serve 700,000 sites for 200,000 clients from Russia and neighboring countries",
    icon: FaRegCheckCircle,
  },
  {
    id: uuid4(),
    title: "Price + quality",
    text: "We monitor the market and make sure that each of our clients gets the best for their money",
    icon: HiMiniPercentBadge,
  },
  {
    id: uuid4(),
    title: "24/7 support",
    text: "We respond at any time of the day or night - without weekends, holidays and lunch breaks",
    icon: BsBookmarkCheckFill,
  },
  {
    id: uuid4(),
    title: "Uninterrupted operation",
    text: "We guarantee website availability at 99.98% SLA",
    icon: FaClock,
  },
  {
    id: uuid4(),
    title: "Reliable data centers",
    text: "Data centers in Russia and Kazakhstan meet international security standards",
    icon: FaLocationDot,
  },
  {
    id: uuid4(),
    title: "Your own control panel",
    text: "For intuitive management of hosting, mail, domains and other services",
    icon: MdOutlineDevices,
  },
  {
    id: uuid4(),
    title: "SSL certificate",
    text: "We will help you issue a free Let's Encrypt certificate for your domain and set up secure operation via HTTPS",
    icon: IoShieldCheckmark,
  },
  {
    id: uuid4(),
    title: "Daily backups",
    text: "We create backups of your sites every day to ensure your data is always safe.",
    icon: IoCalendarSharp,
  },
  {
    id: uuid4(),
    title: "Setting up access rights",
    text: "Manage access to the panel by assigning the necessary rights and issuing them to your employees.",
    icon: VscSettings,
  },
];

export const HostingPanelData: HostingPanelTypes[] = [
  {
    id: uuid4(),
    text: "Upload website files to the server,",
  },
  {
    id: uuid4(),
    text: "Create a database,",
  },
  {
    id: uuid4(),
    text: "Install popular CMS: 1C-Bitrix, Wordpress, Joomla, Drupal, etc.,",
  },
  {
    id: uuid4(),
    text: "Add a domain or buy a new one,",
  },
  {
    id: uuid4(),
    text: "Configure DNS records for your domain,",
  },
  {
    id: uuid4(),
    text: "Manage mailboxes,",
  },
  {
    id: uuid4(),
    text: "Run cron tasks,",
  },
  {
    id: uuid4(),
    text: "Work with the server via SSH.",
  },
];

export const footerCliendsListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Website builder",
  },
  {
    id: uuid4(),
    text: "Compare services",
  },
  {
    id: uuid4(),
    text: "Why choose us",
  },
  {
    id: uuid4(),
    text: "Clients and partners",
  },
  {
    id: uuid4(),
    text: "Questions and Answers",
  },
  {
    id: uuid4(),
    text: "Agreement",
  },
  {
    id: uuid4(),
    text: "News",
  },
  {
    id: uuid4(),
    text: "Stock",
  },
];

export const footerPartnersListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "For webmasters",
  },
  {
    id: uuid4(),
    text: "For integrators",
  },
  {
    id: uuid4(),
    text: "Our logo",
  },
  {
    id: uuid4(),
    text: "Webmaster Agreement",
  },
  {
    id: uuid4(),
    text: "Peering policy",
  },
];

export const footerProductsListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Hosting",
  },
  {
    id: uuid4(),
    text: "VDS and VPS",
  },
  {
    id: uuid4(),
    text: "Mail for business",
  },
  {
    id: uuid4(),
    text: "Domains",
  },
  {
    id: uuid4(),
    text: "Dedicated servers",
  },
  {
    id: uuid4(),
    text: "Reviews widget for website",
  },
];

export const footerAboutCompanyListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Contact information",
  },
  {
    id: uuid4(),
    text: "Our team",
  },
  {
    id: uuid4(),
    text: "Data centers",
  },
  {
    id: uuid4(),
    text: "Useful articles",
  },
  {
    id: uuid4(),
    text: "Report vulnerabilities",
  },
];
