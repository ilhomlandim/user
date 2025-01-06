export const navLinks = [
  {
    text: "Adabiyotlar",
    path: "/literature",
  },
  {
    text: "Maqolalar",
    path: "/articles",
  },
  {
    text: "Taqdimotlar",
    path: "/presantations",
  },
  {
    text: "Videolar",
    path: "/videos",
  },
  {
    text: "Mualliflar",
    path: "/authors",
  },
];

import HeroBottomRightWhite from "/public/hero-white-br.svg";
import HeroBottomLeftWhite from "/public/hero-white-bl.svg";
export const publicResurs = [
  {
    title: "Adabiyotlar",
    href: "/adabiyotlar",
    img: HeroBottomLeftWhite,
    borderRadius: "rounded-br-[100px]",
    position: "right-0",
  },
  {
    title: "Maqolalar",
    href: "/maqolalar",
    img: HeroBottomRightWhite,
    borderRadius: "rounded-bl-[100px]",
    position: "left-0",
  },
  {
    title: "Taqdimotlar",
    href: "/taqdimotlar",
    img: HeroBottomLeftWhite,
    borderRadius: "rounded-br-[100px]",
    position: "right-0",
  },
  {
    title: "Videolar",
    href: "/videolar",
    img: HeroBottomRightWhite,
    borderRadius: "rounded-bl-[100px]",
    position: "left-0",
  },
];

export const aboutInfo = [
  {
    title: "Biz kimmiz?",
    disc: `Chizlab — bu chizmachilik va dizaynni sevuvchilar uchun onlayn maydon. 
O‘zbekistondagi ilk chizmachilik 
va dizayn sohasidagi materiallar to‘plangan vertual makon. 
Biz ijodkorlarni birlashtiramiz!
`,
  },
  {
    title: "Chizlab hikoyasi",
    disc: `Oddiy g‘oyadan boshlanib, 
butun o‘zbek  ijodkorlariga 
yordam beruvchi platforma 
tuzishni niyat qildik.`,
  },
  {
    title: "Nega aynan Chizlab?",
    disc: `Texnik bilimlarni mukammallashtirish 
uchun interaktiv resurslar va o'quv materiallarini taklif etamiz.

Biz bilan barchasi oson va kreativ.`,
  },
  {
    title: "Jamoamiz haqida",
    disc: `Chizlab ortida bilimdon va ijodkor 
jamoa turibdi. Siz uchun eng yaxshi vositalarni taqdim etishga intilamiz.`,
  },
  {
    title: "Bizning missiyamiz",
    disc: `Ijod va ta'limni birlashtirish. 
O‘zbekistonda ijodkorlik madaniyati yuksalishiga hissa qo‘shish. 

Har bir qalam harakati yangi imkoniyatlar ochishi uchun xizmat qiladi. `,
  },
  {
    title: "Ta'riflar",
    disc: `Saytda standart ta’rifda bepul 
materiallardan foydalana olasiz.

Pro ta’rifida yillik to‘lov
qilganingizdan so‘ng, 
saytdagi materiallarning 
barchasidan foydalana olasiz.
`,
  },
];

export const statistic = [
  {
    title: "Adabiyotlar",
    count: 100,
    imgRotate: 0,
    position: "right-0 bottom-0",
  },
  {
    title: "Taqdimotlar",
    count: 100,
    imgRotate: 90,
    position: "left-0 bottom-0",
  },
  {
    title: "Foydalanuvchilar",
    count: 200,
    imgRotate: "none",
  },

  {
    title: "Videolar",
    count: 100,
    imgRotate: 270,
    position: "right-0 top-0",
  },
  {
    title: "Maqolalar",
    count: 100,
    imgRotate: 180,
    position: "left-0 top-0",
  },
  {
    title: "Pro ta'rifida",
    count: 100,
    imgRotate: "none",
  },
];

export const baseURL = "https://json-api.uz/api/project/chizlab";
