// fontawesome setup
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css"; // CSS
import type { Metadata } from "next";

import { bannerText } from "@/appData"; //appData

// components
import { StoreProvider } from "@/redux/StoreProvider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Banner text={bannerText} />

          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
