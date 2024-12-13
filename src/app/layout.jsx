import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header";
import { Desktop, Mobile } from "@/app/components/Navbars";
import Footer from "@/app/components/Footer";
import TestMode from "@/app/components/TestMode";
import Card from "@/app/components/Card";

const gilroyFont = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Black.woff",
      weight: "900",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy-Light.woff",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilroy-Thin.woff",
      weight: "100",
    },
  ],
});

export const metadata = {
  title: "Bosh sahifa",
  description:
    "chizlab.uz loyihasi. Siz o'ylaganingizdan ko'ra ko'proq ma'lumot beramiz",
};

export default function layout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body
        className={`${gilroyFont.className} antialiased flex flex-col h-full`}
      >
        <TestMode />
        <Header />
        <Desktop />
        <Mobile />
        <main className="grow">{children}</main>
        <Card></Card>
        <Footer />
      </body>
    </html>
  );
}
