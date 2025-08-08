import Image from "next/image";
import Contact_usForm from "./contact_usFotm";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "تماس با ما | VPSBazaar - ارتباط سریع با پشتیبانی",
    description:
        "از طریق صفحه تماس با ما VPSBazaar می‌توانید با تیم پشتیبانی حرفه‌ای ما در ارتباط باشید و سوالات خود درباره خرید سرور مجازی و خدمات ما را مطرح کنید.",
    keywords:
        "تماس با وی پی اس بازار, VPSBazaar, ارتباط با پشتیبانی, پشتیبانی VPS, خرید سرور مجازی, وی پی اس ارزان",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/contact_us",
        title: "تماس با ما | VPSBazaar - ارتباط سریع با پشتیبانی",
        description:
            "از طریق صفحه تماس با ما VPSBazaar می‌توانید با تیم پشتیبانی ما ارتباط برقرار کنید و سوالات خود درباره خرید سرور مجازی و خدمات ما را مطرح نمایید.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - تماس با ما",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "تماس با ما | VPSBazaar - ارتباط سریع با پشتیبانی",
        description:
            "از طریق صفحه تماس با ما VPSBazaar می‌توانید با تیم پشتیبانی ما ارتباط برقرار کرده و سوالات خود درباره خرید VPS و سرور مجازی را مطرح نمایید.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/contact_us",
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

const Contact_us = () => {

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
                            "name": "تماس با ما",
                            "item": "https://vpsbazaar.cloud/contact_us"
                        }
                    ]
                })}
            </Script>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">تماس با ما</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">تماس با ما</h1>
                    <h2 className="vazirfont-medium text-lg text-gray-800 mt-5">ما آماده و منتظر سوالات شما هستیم</h2>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10 grid grid-cols-12">
                        <div className="mt-3 col-span-12 md:col-span-8 md:mt-20">
                            <p className="h-fit">
                                تلفن: 91095238-021
                            </p>
                            <p className="h-fit mt-5">
                                ایمیل: info@vpsbazaar.cloud
                            </p>
                            <p className="h-fit mt-5 text-justify">
                                آدرس: تهران - خیابان شهید حسین نیازمند - کوچه شهید رحیم نریمانی دوم - پلاک : 9.0 - طبقه : 2
                            </p>
                            <div className="mt-10">
                                <Contact_usForm />
                            </div>
                        </div>
                        <div className="md:col-span-4 flex h-fit hidden md:block">
                            <Image className="items-center mx-auto" src="/img/contact_us.webp" width={500} height={500} alt="About Us" />
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Contact_us;