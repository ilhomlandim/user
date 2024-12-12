import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={`${gilroyFont.className} antialiased`}>{children}</body>
    </html>
  );
}
