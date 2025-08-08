import LandingContent from "./components/landing/landingContent";
import LandingHeader from "./components/landing/landingHeader";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خرید سریع و مطمئن سرور مجازی | VPSBazaar",
  description:
    "با VPSBazaar بهترین تجربه خرید سرور مجازی را تجربه کنید. ارائه VPS با منابع اختصاصی، سرعت و پایداری بالا، آی‌پی ثابت، تحویل آنی و پشتیبانی ۲۴ ساعته. مناسب برای میزبانی سایت، ربات تلگرام، ترید، توسعه نرم‌افزار و انواع سرویس‌های آنلاین.",
  keywords: [
    "خرید سرور مجازی",
    "خرید VPS",
    "وی پی اس ارزان",
    "VPS ایران",
    "سرور مجازی برای ترید",
    "وی پی اس فوری",
    "VPSBazaar"
  ],
  metadataBase: new URL("https://vpsbazaar.cloud"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "خرید سرور مجازی | VPSBazaar - سرور سریع، پایدار و مقرون‌به‌صرفه",
    description:
      "VPSBazaar ارائه‌دهنده سرورهای مجازی قدرتمند با تحویل آنی و منابع اختصاصی. مناسب برای انواع کاربردها مثل ترید، ربات، سایت و اپلیکیشن.",
    url: "https://vpsbazaar.cloud",
    siteName: "VPSBazaar",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://vpsbazaar.cloud/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VPSBazaar - خرید سرور مجازی با کیفیت بالا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خرید سرور مجازی سریع و پایدار با قیمت مناسب | VPSBazaar",
    description:
      "خرید VPS با منابع اختصاصی، آی‌پی ثابت، تحویل آنی و پشتیبانی ۲۴ ساعته از VPSBazaar.",
    images: ["https://vpsbazaar.cloud/img/og-image.webp"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", sizes: "any" },
      { url: "/img/favicon-32x32.webp", type: "image/webp", sizes: "32x32" },
      { url: "/img/favicon-16x16.webp", type: "image/webp", sizes: "16x16" },
    ],
    apple: "/img/apple-touch-icon.webp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};



export default function Home() {
  return (
    <>
      <Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VPSBazaar",
          "alternateName": "وی پی اس بازار",
          "url": "https://vpsbazaar.cloud",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vpsbazaar.cloud/img/logo.webp"
          },
          "description": "VPSBazaar ارائه‌دهنده سرور مجازی سریع، پایدار و مقرون‌به‌صرفه با تحویل آنی، آی‌پی ثابت و پشتیبانی ۲۴ ساعته.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "021-91095238",
            "email": "info@vpsbazaar.cloud",
            "areaServed": "IR",
            "availableLanguage": ["fa"]
          }
        })}
      </Script>

      <Script id="website-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "VPSBazaar",
          "url": "https://vpsbazaar.cloud"
        })}
      </Script>
      <main className="">
        <LandingHeader />
        <LandingContent />
      </main>
    </>
  );
}
