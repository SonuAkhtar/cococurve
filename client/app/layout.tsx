// fontawesome setup
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";

// components
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "CocoCurve",
  description: "Your only destination for fashion",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const bannerText: string =
  "USE FIRST15 TO GET 15% DISCOUNT ON YOUR FIRST ORDER";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner text={bannerText} />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
