import type { Metadata } from "next";
import "./globals.css";
import "@/public/css/font.css";
import "@/public/css/style.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "خرید سرور مجازی | VPSBazaar - فروش VPS با کیفیت و قیمت مناسب",
  description:
    "VPSBazaar مرجع خرید سرور مجازی با کیفیت بالا و قیمت مناسب. ارائه انواع VPS با منابع اختصاصی، سرعت بالا، آی‌پی ثابت، تحویل آنی و پشتیبانی ۲۴ ساعته. مناسب برای میزبانی سایت، اجرای نرم‌افزار، کار با ربات‌ها، ترید، گیم سرور و پروژه‌های توسعه نرم‌افزار.",
  keywords:
    "خرید سرور مجازی, خرید VPS, سرور مجازی لینوکس, VPS ویندوز, خرید وی پی اس فوری, وی پی اس برای ترید, سرور مجازی برای ربات تلگرام, VPS ارزان",
  metadataBase: new URL("https://vpsbazaar.cloud"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://vpsbazaar.cloud",
    title: "خرید سرور مجازی | VPSBazaar - فروش VPS با کیفیت و قیمت مناسب",
    description:
      "VPSBazaar مرجع خرید سرور مجازی با کیفیت بالا و قیمت مناسب. ارائه انواع VPS با منابع اختصاصی، سرعت بالا، آی‌پی ثابت، تحویل آنی و پشتیبانی ۲۴ ساعته. مناسب برای میزبانی سایت، اجرای نرم‌افزار، کار با ربات‌ها، ترید، گیم سرور و پروژه‌های توسعه نرم‌افزار.",
    siteName: "VPSBazaar",
    images: [
      {
        url: "https://vpsbazaar.cloud/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VPSBazaar - فروش سرور مجازی ایران",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "خرید سرور مجازی ایران با کیفیت و قیمت مناسب | VPSBazaar",
    description:
      "VPSBazaar مرجع خرید سرور مجازی با کیفیت بالا و قیمت مناسب. ارائه انواع VPS با منابع اختصاصی، سرعت بالا، آی‌پی ثابت، تحویل آنی و پشتیبانی ۲۴ ساعته. مناسب برای میزبانی سایت، اجرای نرم‌افزار، کار با ربات‌ها، ترید، گیم سرور و پروژه‌های توسعه نرم‌افزار.",
    images: ["https://vpsbazaar.cloud/img/og-image.webp"],
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", sizes: "any" },
      { url: "/img/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/img/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: "/img/apple-touch-icon.webp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body className="bg-[#5B2C6F]">
        <div className="">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
