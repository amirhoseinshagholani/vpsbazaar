import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "درباره ما | VPSBazaar - ارائه‌دهنده سرور مجازی با کیفیت",
    description:
        "VPSBazaar با هدف ارائه سرورهای مجازی پرسرعت، پایدار و مقرون‌به‌صرفه راه‌اندازی شد. ما با پشتیبانی ۲۴ ساعته و تحویل آنی، بستری حرفه‌ای برای میزبانی پروژه‌های آنلاین شما فراهم کرده‌ایم.",
    keywords:
        "درباره وی پی اس بازار, VPSBazaar, فروش سرور مجازی, تیم پشتیبانی VPS, وی پی اس ارزان, خرید سرور مجازی",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/about_us",
        title: "درباره ما | VPSBazaar - ارائه‌دهنده سرور مجازی با کیفیت",
        description:
            "VPSBazaar با هدف ارائه سرورهای مجازی پرسرعت، پایدار و مقرون‌به‌صرفه راه‌اندازی شد. ما با پشتیبانی ۲۴ ساعته و تحویل آنی، بستری حرفه‌ای برای میزبانی پروژه‌های آنلاین شما فراهم کرده‌ایم.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - فروش VPS و سرور مجازی",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "درباره ما | VPSBazaar - ارائه‌دهنده سرور مجازی با کیفیت",
        description:
            "آشنایی با اهداف و خدمات VPSBazaar در زمینه ارائه سرورهای مجازی سریع، پایدار و مقرون‌به‌صرفه با پشتیبانی حرفه‌ای.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/about_us",
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


const About_us = () => {
    return (
        <>
            <Script id="breadcrumb-ld-json" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "خانه",
                            "item": "https://vpsbazaar.cloud"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "درباره ما",
                            "item": "https://vpsbazaar.cloud/about_us"
                        }
                    ]
                })}
            </Script>

            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">درباره ما</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-xl md:text-2xl text-gray-800">درباره ما - اهداف ما در VPS Bazaar</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10 grid grid-cols-12">
                        <div className="mt-3 col-span-12 md:col-span-8 mt-10 md:mt-20">
                            <p className="h-fit text-justify">
                                ما در VPSBazaar گردهم آمده‌ایم تا فضایی دوستانه و حرفه‌ای برای کاربران و مشترکین خود ایجاد کنیم. وی پی اس بازار کار خود را از سال 1403 با هدف کمک به مشترکین در جهت تهیه سرورهای مجازی مطمئن و با کیفیت آغاز کرد.
                            </p>
                            <p className="h-fit mt-5 text-justify">
                                هدف ما از روز نخست، کمک به مشترکین در ارائه راه‌حل‌های زیرساختی مطمئن و ایجاد تجربه‌ای متفاوت در زمینه فروش سرورهای مجازی بوده است. ما متعهدیم که خدمات باکیفیت را با قیمت‌های مقرون‌به‌صرفه ارائه دهیم تا همه بتوانند به بهترین زیرساخت‌های مجازی دسترسی داشته باشند. فاز اول فعالیت ما، بر ارائه VPS‌های داخلی متمرکز بوده است؛ اما در فازهای آتی، برنامه داریم تا سرویس‌های بین‌المللی را نیز اضافه کنیم و نیازهای متنوع کاربرانمان را در سطحی گسترده‌تر پوشش دهیم. همچنین، به زودی سرورهای اختصاصی را نیز فراهم خواهیم کرد تا مشترکین بتوانند به منابع اختصاصی خود دسترسی پیدا کنند و از توان و امنیت بیشتر در پروژه‌های خود بهره‌مند شوند. در ادامه، با ارائه خدمات هاستینگ کامل‌تر در کنار شما خواهیم بود تا تمامی نیازهای میزبانی و زیرساختی شما را با کیفیتی ممتاز و پشتیبانی مداوم پاسخ دهیم. پشتیبانی ۲۴ ساعته و تضمین آپتایم ۹۹ درصدی از اولویت‌های اصلی ماست. همکاران ما به صورت شبانه‌روزی آماده خدمت‌رسانی هستند و تمامی تلاش خود را به کار می‌گیرند تا تجربه‌ای رضایت‌بخش و مطمئن را برای شما فراهم آورند. به VPSBazaar بپیوندید و تجربه‌ای حرفه‌ای، کارآمد و مطمئن از خدمات سرور مجازی و میزبانی وب را تجربه کنید
                            </p>
                        </div>
                        <div className="col-span-4 flex h-fit hidden md:block">
                            <Image className="items-center mx-auto" src="/img/about_us.webp" width={500} height={500} alt="About Us" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About_us;