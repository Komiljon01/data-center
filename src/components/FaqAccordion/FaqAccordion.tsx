import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import "./FaqAccordion.css";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { clickLogo, paymeLogo, uzumLogo } from "../../assets";

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  "&.MuiAccordion-root": {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",

    "&.Mui-expanded": {
      margin: "0",
      borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)", // Ensure border stays visible when expanded

      "::before": {
        opacity: "1",
      },
    },

    ".MuiAccordionSummary-root": {
      padding: "0",
      color: "#0021a3",
      gap: "10px",

      ".MuiAccordionSummary-expandIconWrapper": {
        width: "36px",
        height: "36px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "#0021a3",

        [theme.breakpoints.down("sm")]: {
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
        },
      },

      ".MuiAccordionSummary-content": {
        margin: "24px 0",
      },
    },

    ".MuiAccordionDetails-root": {
      margin: "0",
      padding: "0 0 24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  },
}));

function FaqAccordion() {
  return (
    <>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Hosting, VDS, VPS va ajratilgan server o'rtasidagi farq nima?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">Hosting</Box> bu loyihani joylashtirishning
            eng oddiy variantidir. Sizga veb-sayt ishlashi uchun allaqachon
            to'liq sozlangan serverda joy beriladi va siz faqat fayllarni
            yuklashingiz kerak.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">VDS and VPS, or virtual server,</Box> sizga
            jismoniy serverning bir qismi faqat sizning foydalanishingiz uchun
            ijaraga beriladi. Virtual server odatda loyiha uchun xosting
            resurslari yetarli bo‘lmaganda yoki hostingga o‘rnatib bo‘lmaydigan
            maxsus dasturiy ta’minotni talab qilganda tanlanadi.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">Ajratilgan server</Box> sanab o'tilgan
            variantlarning eng jiddiy yechimidir. Siz faqat loyihalaringiz
            joylashtiriladigan alohida jismoniy serverga ega bo'lasiz.
            Ajratilgan serverlar maksimal quvvat va barqarorlikni talab qiluvchi
            murakkab, resurs talab qiladigan loyihalar uchun tanlanadi.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Menda allaqachon veb-sayt va domen bor. Bularning hammasini sizga
            olib kela olamanmi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Ha, albatta. Ro'yxatdan o'tgan domenni o'tkazishning ikki yo'li
            mavjud:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_num">
            <Box component="li">
              <Link to="">Texnik domenni uzatishni amalga oshiring</Link> - bu
              holda domen bizning hosting bilan ishlaydi, lekin avvalgi
              provayder orqali to'lanadi.
            </Box>
            <Box component="li">
              <Link to="">Domenni Data Center boshqaruvi ostida o'tkazing</Link>{" "}
              - bu holda siz domenni yangilash va uning sozlamalarini xosting
              bilan bitta panelda boshqarishingiz mumkin bo'ladi, bu ancha
              qulayroqdir. convenient.
            </Box>
          </Box>
          <Typography variant="body1" className="faq__accordion-text">
            Siz saytni <Link to="">o'zingiz</Link> or{" "}
            <Link to="">bizning mutaxassislarimiz yordamida</Link>{" "}
            o'tkazishingiz mumkin. Mutaxassislarimiz barcha loyiha fayllarini
            diqqat bilan o'tkazadilar va veb-saytning to'g'ri ishlashi uchun
            xostingni o'rnatadilar.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Sizda qanday to'lov usullari bor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Biz barcha asosiy to'lov usullarini taklif qilamiz:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_circle">
            <Box component="li">Bank kartalari, shu jumladan xorijiy</Box>
            <Box component="li">YuMoney hamyon</Box>
            <Box component="li">Bank cheki orqali to'lash</Box>
            <Box component="li">
              Yuridik shaxslar va yakka tartibdagi tadbirkorlar uchun
              schyot-faktura bo'yicha to'lov
            </Box>
          </Box>
          <Box component="div" className="faq__accordion-payment">
            <Link to="">
              <Box component="img" src={paymeLogo} alt="payme logo" />
            </Link>
            <Link to="">
              <Box component="img" src={clickLogo} alt="click logo" />
            </Link>
            <Link to="">
              <Box component="img" src={uzumLogo} alt="uzum logo" />
            </Link>
          </Box>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Sizdan 1C-Bitrix va ISPmanager litsenziyalarini sotib olish
            mumkinmi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Ha, bizdan ikkala litsenziyani ham sotib olishingiz mumkin.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">1C-Bitrix.</Box> Biz "1C-Bitrix: Saytni
            boshqarish" litsenziyalarini quyidagi nashrlarda taklif etamiz:
            Start, Standard, Small Business va Business. Litsenziyani sotib
            olganingizda, siz bepul yil hosting yoki VDS olasiz - bu erda
            tafsilotlar
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            <Box component="span">ISPmanager. </Box> Biz ISPmanager 6 ni barcha
            nashrlarda taklif etamiz: Lite, Pro, Host va Business. Server
            yaratishda yoki "Litsenziyalar" bo'limida boshqaruv panelida ISPga
            buyurtma berishingiz mumkin. Litsenziya 1 oyga sotib olinadi va agar
            balansda pul bo'lsa, oyiga bir marta avtomatik ravishda yangilanadi.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Date Center qanday hosting rejalarini taklif qiladi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Biz turli vazifalar uchun mos bo'lgan turli tarif liniyalarini
            taklif etamiz:
          </Typography>
          <Box component="ul" className="faq__accordion-lists_circle">
            <Box component="li">
              <Box component="span">Virtual hosting</Box> ko'pgina loyihalarni
              joylashtirish uchun mos bo'lgan universal xizmatdir.
            </Box>
            <Box component="li">
              <Box component="span">CMS uchun xosting </Box> — Wordpress, Joomla
              va Drupal yordamida yaratilgan saytlarni joylashtirish uchun
              maxsus tariflar.
            </Box>
            <Box component="li">
              <Box component="span">1C-Bitrix uchun hosting</Box> — 1C-Bitrix va
              boshqa resurslarni talab qiluvchi loyihalarda veb-saytlarni
              joylashtirish uchun optimallashtirilgan yuqori samarali tariflar.
            </Box>
          </Box>
          <Typography variant="body1" className="faq__accordion-text">
            Har bir qatorda siz taklif qilingan resurslar soni bo'yicha farq
            qiluvchi bir nechta tariflarni topasiz - hozirda loyihangiz talab
            qiladigan variantni tanlang.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Veb-saytingiz uchun mos tarifni qanday tanlash mumkin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Loyihangizning turi va ehtiyojlariga e'tibor qarating.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Agar sayt CMS Wordpress, Joomla yoki Drupal-da yaratilgan bo'lsa,
            CMS hosting tariflariga e'tibor bering.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Agar sizning veb-saytingiz yuqori unumdorlik va ko'p resurslarni
            talab qilsa, 1C-Bitrix uchun hosting rejalaridan biri sizga mos
            keladi.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Biroq, aksariyat hollarda umumiy hosting rejalaridan biri sizga mos
            keladi: Year+, Optimo+, Century+ yoki Millenium+. Tarif
            parametrlarini o'rganing - ular saytlar soni, disk maydoni va
            yuklanish cheklovlari bilan farqlanadi. Hozir etarli bo'lib
            tuyuladigan tarifni tanlang - agar resurslar etarli bo'lmasa, uni
            har doim oshirishingiz mumkin.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummary expandIcon={<FaAngleDown />}>
          <Typography component="span" className="faq__accordion-title">
            Nega bizni tanlashingiz kerak?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq__accordion-content">
          <Typography variant="body1" className="faq__accordion-text">
            Biz sizning veb-saytlaringizni zamonaviy server uskunalarida
            ishonchli, nosozliklarga chidamli ma'lumotlar markazlarida
            joylashtiramiz va veb-saytlarning SLA darajasida 99,98% mavjudligini
            kafolatlaymiz.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Bizning xostingimiz bilan ishlash maxsus ko'nikmalar yoki texnik
            bilimlarni talab qilmaydi - sizda qulay va tushunarli boshqaruv
            paneli bo'ladi, bu orqali siz ko'pgina muammolarni hal qilishingiz
            mumkin.
          </Typography>
          <Typography variant="body1" className="faq__accordion-text">
            Agar sizga qo'shimcha yordam kerak bo'lsa, bizning yordamimiz har
            doim 24/7 mavjud.
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
    </>
  );
}

export default FaqAccordion;
