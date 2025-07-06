import Link from "next/link";
import Bloglists from "./bloglists";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "مقالات تخصصی سرور مجازی و VPS | وبلاگ VPSBazaar",
  description:
    "مطالب تخصصی و آموزشی درباره سرور مجازی، وی پی اس، لینوکس، ویندوز، ترید، گیم سرور، ربات تلگرام و کاربردهای متنوع VPS. یادگیری، مقایسه و راهنمای خرید VPS در وبلاگ VPSBazaar.",
  keywords:
    "مقالات VPS, آموزش سرور مجازی, وی پی اس برای ترید, سرور مجازی لینوکس, مقایسه VPS, وبلاگ VPSBazaar, آموزش ریموت دسکتاپ, کاربردهای VPS",
  metadataBase: new URL("https://vpsbazaar.cloud"),
  robots: "index, follow",
  openGraph: {
    type: "article",
    url: "https://vpsbazaar.cloud/blogs",
    title: "مقالات تخصصی VPS و سرور مجازی | وبلاگ VPSBazaar",
    description:
      "در وبلاگ VPSBazaar بخوانید: آموزش‌ها، راهنماها و بررسی‌های تخصصی درباره VPS و سرور مجازی برای ترید، برنامه‌نویسی، ربات تلگرام و مدیریت سرورها.",
    siteName: "VPSBazaar",
    images: [
      {
        url: "https://vpsbazaar.cloud/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "وبلاگ VPSBazaar - مقالات تخصصی سرور مجازی",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "وبلاگ VPSBazaar | مقالات تخصصی VPS و آموزش سرور مجازی",
    description:
      "مطالب و مقالات آموزشی درباره VPS، ریموت دسکتاپ، انتخاب سرور، کاربردها و راهنمای خرید سرور مجازی در وبلاگ VPSBazaar.",
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


const Blogs = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">مقالات</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">مقالات</h1>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            در بخش مقالات VPSBazaar می‌توانید به جدیدترین آموزش‌ها، تحلیل‌ها و نکات کاربردی در زمینه سرور مجازی، زیرساخت ابری، امنیت سرورها و مدیریت منابع دسترسی داشته باشید. این مطالب به شما کمک می‌کنند تا انتخابی هوشمندانه داشته باشید و از سرور مجازی‌تان بیشترین بهره را ببرید. اگر به دنبال راهنمایی دقیق برای خرید، راه‌اندازی یا بهینه‌سازی VPS هستید، جای درستی آمده‌اید!
                        </p>
                        <Bloglists />
                    </div>
                </section>
            </main >
        </>
    )
}

export default Blogs;