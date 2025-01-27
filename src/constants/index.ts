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
  TariffsCalcCardsTypes,
  TarriffsTypes,
  TarrifsCalculatorTypes,
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
  { id: uuid4(), text: "To'lov", icon: FaCreditCard, type: "modal" },
  {
    id: uuid4(),
    path: "",
    text: "Xizmat hujjatlari",
    icon: MdBook,
    type: "link",
  },
  {
    id: uuid4(),
    path: "",
    text: "Buxgalteriya hujjatlari",
    icon: BsFillClipboard2CheckFill,
    type: "link",
  },
  { id: uuid4(), path: "", text: "Kirish", icon: FiLogIn, type: "link" },
];

export { default as AccordionStyled } from "./components/AccordionStyled";

export const HeroCardsData: HeroCardsTypes[] = [
  {
    id: uuid4(),
    title: "Veb-sayt uchun hosting",
    text: "Har qanday murakkablikdagi veb-saytlarni yaratish va joylashtirish - oddiy tashrif qog'ozlaridan tortib 1C-Bitrix-dagi yirik do'konlargacha",
    price: "50k",
    btnText: "Bepul sinab ko'ring",
    icon: FaGlobe,
  },
  {
    id: uuid4(),
    title: "VDS va VPS",
    text: "Soatlik to'lov bilan virtual serverlar. Server konfiguratsiyasini istalgan vaqtda va bir necha marta bosish orqali o'zgartiring",
    price: "100k",
    btnText: "Serverni tanlang",
    icon: BsCloudsFill,
  },
  {
    id: uuid4(),
    title: "Serverlar",
    text: "Har qanday konfiguratsiyadagi jismoniy serverlarni ijaraga olish - tayyor yig'ilishlar yoki so'rov bo'yicha",
    price: "120k",
    btnText: "Serverni tanlang",
    icon: FaServer,
  },
  {
    id: uuid4(),
    title: "Veb-sayt yaratish",
    text: "15 daqiqada dasturchilar va dizaynerlardan foydalanmasdan veb-sayt yarating",
    price: "180k",
    btnText: "Bepul sinab ko'ring",
    icon: CgWebsite,
  },
];

export const HomeSlidersData: HomeSliderTypes[] = [
  {
    id: uuid4(),
    text: "O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi",
    img: digitalIMG,
    type: "content",
  },
  {
    id: uuid4(),
    text: "O‘zbekiston Respublikasi Hukumat portali",
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
    img: lexuzIMG,
    type: "image",
  },
  {
    id: uuid4(),
    text: "Oʻzbekiston Prezidentining rasmiy sayti",
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
    text: "O‘zbekiston Respublikasi Prezidentining virtual qabulxonasi",
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
        text: "Vizitka veb-sayti uchun mukammal yechim",
        price: "342",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Mashhur bloggerlar va galereya saytlarini tanlash",
        price: "552",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "Sizning kompaniyangiz veb-sayti uchun eng yaxshi variant",
        price: "772",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Katta elektron tijorat loyihalari uchun ilg'or yechim",
        price: "1071",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
    },
    yearly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "Year+",
        text: "Vizitka veb-sayti uchun mukammal yechim",
        oldPrice: "342",
        price: "222",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Mashhur bloggerlar va galereya saytlarini tanlash",
        oldPrice: "552",
        price: "357",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "Sizning kompaniyangiz veb-sayti uchun eng yaxshi variant",
        oldPrice: "772",
        price: "503",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Katta elektron tijorat loyihalari uchun ilg'or yechim",
        oldPrice: "1071",
        price: "701",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
    },
    "3years": {
      year: {
        customerChoice: false,
        transfer: false,
        title: "Year+",
        text: "Vizitka veb-sayti uchun mukammal yechim",
        oldPrice: "342",
        price: "222",
        services: {
          site: "2",
          drives: "15 GB",
          databases: "2",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      optimo: {
        customerChoice: false,
        transfer: false,
        title: "Optimo+",
        text: "Mashhur bloggerlar va galereya saytlarini tanlash",
        oldPrice: "552",
        price: "357",
        services: {
          site: "15",
          drives: "40 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      century: {
        customerChoice: true,
        transfer: false,
        title: "Century+",
        text: "Sizning kompaniyangiz veb-sayti uchun eng yaxshi variant",
        oldPrice: "772",
        price: "503",
        services: {
          site: "35",
          drives: "50 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: "Domain .UZ as a gift!",
      },
      millenium: {
        customerChoice: false,
        transfer: false,
        title: "Millenium+",
        text: "Katta elektron tijorat loyihalari uchun ilg'or yechim",
        oldPrice: "1071",
        price: "701",
        services: {
          site: "60",
          drives: "60 GB",
          databases: "Cheksiz",
          certificate: "Bepul",
          mailQuota: "10 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
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
        text: "Kichik onlayn-do'kon va kompaniya veb-sayti uchun",
        price: "741",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "Katta onlayn-do'kon uchun",
        price: "2061",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "Katta hajmdagi loyihalar uchun",
        price: "4490",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Bepul",
          mailQuota: "20 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "Biz sizning veb-saytingizni o'zimizga o'tkazamiz",
        text: "Bir yil davomida xosting uchun to'lashda biz nafaqat saytingizni, balki qolgan mablag'larni ham bepul o'tkazamiz",
        servicesLists: ["Darhol panelga kirish", "Tez uzatish", "+3 oy bepul"],
        buttonText: "Saytni ko'chirish",
        footerText:
          "Xuddi shu kuchli hostingni arzonroq topdingizmi? Biz sizga chegirma beramiz!",
      },
    },
    yearly: {
      year: {
        customerChoice: false,
        transfer: false,
        title: "1Site",
        text: "Kichik onlayn-do'kon va kompaniya veb-sayti uchun",
        oldPrice: "741",
        price: "489",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "Katta onlayn-do'kon uchun",
        oldPrice: "2061",
        price: "1334",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "Katta hajmdagi loyihalar uchun",
        oldPrice: "4490",
        price: "3600",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Bepul",
          mailQuota: "20 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "Biz sizning veb-saytingizni o'zimizga o'tkazamiz",
        text: "Bir yil davomida xosting uchun to'lashda biz nafaqat saytingizni, balki qolgan mablag'larni ham bepul o'tkazamiz",
        servicesLists: ["Darhol panelga kirish", "Tez uzatish", "+3 oy bepul"],
        buttonText: "Saytni ko'chirish",
        footerText:
          "Xuddi shu kuchli hostingni arzonroq topdingizmi? Biz sizga chegirma beramiz!",
      },
    },
    "3years": {
      year: {
        customerChoice: false,
        transfer: false,
        title: "1Site",
        text: "Kichik onlayn-do'kon va kompaniya veb-sayti uchun",
        oldPrice: "741",
        price: "489",
        services: {
          site: "1",
          drives: "15 GB",
          databases: "20000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      optimo: {
        customerChoice: true,
        transfer: false,
        title: "Eterno",
        text: "Katta onlayn-do'kon uchun",
        oldPrice: "2061",
        price: "1334",
        services: {
          site: "50",
          drives: "80 GB",
          databases: "55000",
          certificate: "Bepul",
          mailQuota: "15 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      century: {
        customerChoice: false,
        transfer: false,
        title: "Premium",
        text: "Katta hajmdagi loyihalar uchun",
        oldPrice: "4490",
        price: "3600",
        services: {
          site: "999",
          drives: "150 GB",
          databases: "90000",
          certificate: "Bepul",
          mailQuota: "20 GB",
          mailboxes: "Cheksiz",
        },
        buttonText: "Bepul boshlang",
        footerText: ".uz domenlari 200 mingdan",
      },
      millenium: {
        customerChoice: false,
        transfer: true,
        title: "Biz sizning veb-saytingizni o'zimizga o'tkazamiz",
        text: "Bir yil davomida xosting uchun to'lashda biz nafaqat saytingizni, balki qolgan mablag'larni ham bepul o'tkazamiz",
        servicesLists: ["Darhol panelga kirish", "Tez uzatish", "+3 oy bepul"],
        buttonText: "Saytni ko'chirish",
        footerText:
          "Xuddi shu kuchli hostingni arzonroq topdingizmi? Biz sizga chegirma beramiz!",
      },
    },
  },
};

export const TariffsCalcData: TariffsCalcCardsTypes[] = [
  {
    id: uuid4(),
    name: "Cloud-15",
    price: { monthlyWithIp: "270", monthlyWithoutIp: "135" },
    cpu: "1 x 3.3 GHz",
    ram: "1GB RAM",
    nvme: "15 GB",
    internet: "1000 Mbps",
    publicIP: true,
    type: "simple",
  },
  {
    id: uuid4(),
    name: "Cloud-30",
    price: { monthlyWithIp: "495", monthlyWithoutIp: "360" },
    cpu: "1 x 3.3 GHz",
    ram: "2GB RAM",
    nvme: "30 GB",
    internet: "1000 Mbps",
    publicIP: true,
    type: "simple",
  },
  {
    id: uuid4(),
    name: "Cloud-40",
    price: { monthlyWithIp: "765", monthlyWithoutIp: "630" },
    cpu: "2 x 3.3 GHz",
    ram: "2GB RAM",
    nvme: "40 GB",
    internet: "1000 Mbps",
    publicIP: true,
    type: "clients",
  },
];

export const TariffsCalculatorData: TarrifsCalculatorTypes = {
  name: "Serveringizni yarating",
  price: { monthlyWithIp: "594", monthlyWithoutIp: "459" },
  cpu: { count: "1", pricePer: "189", max: "104" },
  ram: { count: "1", pricePer: "108", max: "730" },
  nvme: { count: "15", pricePer: "10.8", max: "2000" },
  publicIP: true,
};

export const AdditionalServicesIntroCards: AdditionalServicesIntroTypes[] = [
  {
    id: uuid4(),
    title: "Veb-sayt uzatish",
    text: "Saytlar va domenlaringizni Data Center hostingiga o'tkazing va faqat texnik yordamga so'rov qoldiring",
    btnText: "Saytlarni uzatish",
    icon: CgArrowsExchange,
  },
  {
    id: uuid4(),
    title: "Turnkey veb-sayt",
    text: "200 000 so'm  evaziga Turnkey veb-sayt ishlab chiqishga buyurtma bering yoki veb-sayt yaratuvchisi yordamida bepul veb-sayt yarating",
    btnText: "Veb-saytga buyurtma bering",
    icon: MdDisplaySettings,
  },
];

export const AdditionalServicesCards: AdditionalServicesCardsTypes[] = [
  {
    id: uuid4(),
    title: "Veb-sayt himoyasi",
    text: "Hisobingizdagi barcha saytlarda zararli kod mavjudligini tekshiradigan va natijalar haqida sizni xabardor qiladigan avtomatik zaiflik skaneri",
  },
  {
    id: uuid4(),
    title: "Veb-saytni tezlashtirish",
    text: "Joriy ko'rsatkichlarni tahlil qiladigan va kodga o'zgartirish kiritmasdan ishlashni yaxshilashga yordam beradigan veb-sayt ish faoliyatini optimallashtirish xizmati",
  },
  {
    id: uuid4(),
    title: "DDoS va CDN himoyasi",
    text: "L3, L4 va L7 darajalarida har qanday murakkablikdagi hujumlarning ishonchli aks etishi va foydalanuvchilarga kontentni yetkazib berishning yuqori tezligi",
  },
  {
    id: uuid4(),
    title: "Qo'shimcha IP manzil",
    text: "DDoS himoyasini o'rnatish va o'ziga xos manzilni talab qiladigan veb-saytlar va domenlarni joylashtirish uchun maxsus IPv4 manzili",
  },
];

export const HostingFeaturesCardsData: HostingFeaturesCardsTypes[] = [
  {
    id: uuid4(),
    title: "Biz 2006 yildan beri ishlaymiz",
    text: "Biz allaqachon Rossiya va qo'shni davlatlardan 200 000 mijoz uchun 700 000 saytga xizmat ko'rsatmoqdamiz.",
    icon: FaRegCheckCircle,
  },
  {
    id: uuid4(),
    title: "Narx + sifat",
    text: "Biz bozorni kuzatib boramiz va har bir mijozimiz o'z pullari uchun eng yaxshisini olishiga ishonch hosil qilamiz",
    icon: HiMiniPercentBadge,
  },
  {
    id: uuid4(),
    title: "24/7 qo'llab-quvvatlash",
    text: "Biz kun yoki tunning istalgan vaqtida javob beramiz - dam olish kunlari, bayramlar va tushlik tanaffuslarisiz",
    icon: BsBookmarkCheckFill,
  },
  {
    id: uuid4(),
    title: "Uzluksiz ishlash",
    text: "Biz 99,98% SLA darajasida veb-sayt mavjudligiga kafolat beramiz",
    icon: FaClock,
  },
  {
    id: uuid4(),
    title: "Ishonchli ma'lumotlar markazlari",
    text: "Rossiya va Qozog'istondagi ma'lumotlar markazlari xalqaro xavfsizlik standartlariga javob beradi",
    icon: FaLocationDot,
  },
  {
    id: uuid4(),
    title: "O'zingizning boshqaruv panelingiz",
    text: "Xosting, pochta, domenlar va boshqa xizmatlarni intuitiv boshqarish uchun",
    icon: MdOutlineDevices,
  },
  {
    id: uuid4(),
    title: "SSL sertifikati",
    text: "Biz sizga domeningiz uchun bepul Let's Encrypt sertifikatini chiqarish va HTTPS orqali xavfsiz ishlashni sozlashda yordam beramiz",
    icon: IoShieldCheckmark,
  },
  {
    id: uuid4(),
    title: "Kundalik zaxira nusxalari",
    text: "Maʼlumotlaringiz har doim xavfsiz boʻlishini taʼminlash uchun har kuni saytlaringizning zaxira nusxalarini yaratamiz.",
    icon: IoCalendarSharp,
  },
  {
    id: uuid4(),
    title: "Kirish huquqlarini sozlash",
    text: "Kerakli huquqlarni belgilash va ularni xodimlaringizga berish orqali panelga kirishni boshqaring.",
    icon: VscSettings,
  },
];

export const HostingPanelData: HostingPanelTypes[] = [
  {
    id: uuid4(),
    text: "Veb-sayt fayllarini serverga yuklash,",
  },
  {
    id: uuid4(),
    text: "Ma'lumotlar bazasini yaratish,",
  },
  {
    id: uuid4(),
    text: "Mashhur CMS-ni o'rnating: 1C-Bitrix, Wordpress, Joomla, Drupal va boshqalar,",
  },
  {
    id: uuid4(),
    text: "Domen qo'shing yoki yangisini sotib oling,",
  },
  {
    id: uuid4(),
    text: "Domeningiz uchun DNS yozuvlarini sozlang,",
  },
  {
    id: uuid4(),
    text: "Pochtalarni boshqarish,",
  },
  {
    id: uuid4(),
    text: "Cron vazifalarini bajaring,",
  },
  {
    id: uuid4(),
    text: "SSH orqali server bilan ishlash.",
  },
];

export const footerCliendsListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Veb-sayt yaratish",
  },
  {
    id: uuid4(),
    text: "Xizmatlarni solishtirish",
  },
  {
    id: uuid4(),
    text: "Nima uchun bizni tanlashingiz kerak",
  },
  {
    id: uuid4(),
    text: "Mijozlar va hamkorlar",
  },
  {
    id: uuid4(),
    text: "Savollar va javoblar",
  },
  {
    id: uuid4(),
    text: "Shartnoma",
  },
  {
    id: uuid4(),
    text: "Yangiliklar",
  },
  {
    id: uuid4(),
    text: "Zaxira",
  },
];

export const footerPartnersListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Dasturchilar uchun",
  },
  {
    id: uuid4(),
    text: "Integratorlar uchun",
  },
  {
    id: uuid4(),
    text: "Bizning logotipimiz",
  },
  {
    id: uuid4(),
    text: "Webmaster shartnomasi",
  },
  {
    id: uuid4(),
    text: "Bizning siyosatimiz",
  },
];

export const footerProductsListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Xosting",
  },
  {
    id: uuid4(),
    text: "VDS va VPS",
  },
  {
    id: uuid4(),
    text: "Biznes uchun pochta",
  },
  {
    id: uuid4(),
    text: "Domenlar",
  },
  {
    id: uuid4(),
    text: "Maxsus serverlar",
  },
  {
    id: uuid4(),
    text: "Veb-sayt uchun sharhlar vidjeti",
  },
];

export const footerAboutCompanyListsData: FooterListsTypes[] = [
  {
    id: uuid4(),
    text: "Bog'lanish uchun ma'lumot",
  },
  {
    id: uuid4(),
    text: "Bizning jamoamiz",
  },
  {
    id: uuid4(),
    text: "Data markazlari",
  },
  {
    id: uuid4(),
    text: "Foydali maqolalar",
  },
  {
    id: uuid4(),
    text: "Kamchiliklar haqida xabar bering",
  },
];
