import { Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.cutoutzone.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Cut Out service | image excellence service provider",
    description:
      "CutOut Zone is one of the biggest image editing and graphic design company in Asia. We have been working in this field with years of experience and more than 3000 happy client’s worldwide.",
    url: "https://www.cutoutzone.com",
    siteName: "Cut Out Zone",
    type: "website",
    local: "en_US",
  },
  twitter: {
    title: "Cut Out service | image excellence service provider",
    description:
      "CutOut Zone is one of the biggest image editing and graphic design company in Asia. We have been working in this field with years of experience and more than 3000 happy client’s worldwide.",
    handle: "cutoutzone",
    site: "Cut Out Zone",
    cardType: "summary_large_image",
  },
  applicationName: "Cut Out Zone",
  keywords: [
    "Photo crop",
    "Image resizing",
    "Image editing",
    "Visual enhancement",
    "Image optimization",
    "Color correction",
    "Image quality",
    "Professional editing",
    "E-commerce images",
    "Print media images",
    "Social media visuals",
    "Image composition",
    "Image enhancement",
    "Client collaboration",
  ],
  title: "Cut Out service | image excellence service provider",
  description:
    "CutOut Zone is one of the biggest image editing and graphic design company in Asia. We have been working in this field with years of experience and more than 3000 happy client’s worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
