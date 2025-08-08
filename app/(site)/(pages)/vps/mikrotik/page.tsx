import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "../components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی میکروتیک | Flex MikroTik، Solo MikroTik، Pro MikroTik، Pro+ MikroTik، Ultra MikroTik و Max MikroTik | VPSBazaar",
    description: "خرید سرور مجازی میکروتیک با لایسنس رسمی و عملکرد پایدار از VPSBazaar. مناسب برای مدیریت شبکه، VPN، هات‌اسپات و روتینگ حرفه‌ای. ارائه در پلن‌های Flex MikroTik، Solo MikroTik، Pro MikroTik، Pro+ MikroTik، Ultra MikroTik و Max MikroTik.",
    keywords: "سرور مجازی میکروتیک, MikroTik VPS, خرید VPS MikroTik, VPS با لایسنس میکروتیک, Flex MikroTik, Solo MikroTik, Pro MikroTik, Pro+ MikroTik, Ultra MikroTik, Max MikroTik, روتر مجازی, سرور هات اسپات, مدیریت شبکه, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/mikrotik",
        title: "خرید سرور مجازی میکروتیک | Flex MikroTik، Solo MikroTik، Pro MikroTik، Pro+ MikroTik، Ultra MikroTik و Max MikroTik | VPSBazaar",
        description: "سرور مجازی MikroTik با لایسنس رسمی، دسترسی کامل و منابع قدرتمند. مناسب برای راه‌اندازی VPN، فایروال، هات‌اسپات و روتینگ حرفه‌ای در پلن‌های Flex، Solo، Pro، Pro+، Ultra و Max.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی MikroTik",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی میکروتیک | Flex MikroTik، Solo MikroTik، Pro MikroTik، Pro+ MikroTik، Ultra MikroTik و Max MikroTik | VPSBazaar",
        description: "VPS MikroTik با لایسنس معتبر و منابع اختصاصی. مناسب برای پروژه‌های شبکه، فایروال و خدمات امن مبتنی بر RouterOS در پلن‌های مختلف.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps/mikrotik",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};



const Mikrotik = () => {
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
                            "name": "سرور مجازی",
                            "item": "https://vpsbazaar.cloud/vps"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "سرور مجازی میکروتیک",
                            "item": "https://vpsbazaar.cloud/vps/mikrotik"
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="mikrotik" />

            <div className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/vps"><span className="m-1 text-blue-600">سرویس ها</span></Link>/<span className="m-1">سرور مجازی میکروتیک</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-justify text-lg md:text-2xl text-gray-800">سرور مجازی میکروتیک (MikroTik VPS) با دسترسی کامل و پایداری بالا</h1>

                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg text-nowrap md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="mt-10">
                                <div className="md:flex gap-5 justify-center mx-auto w-max px-5">
                                    <Services category="mikrotik" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            این سرویس‌ها برای آن دسته از کاربران حرفه‌ای، مدیران شبکه، ارائه‌دهندگان خدمات اینترنتی (ISPها) و علاقه‌مندان به تنظیمات پیشرفته‌ی شبکه در بستر میکروتیک فراهم شده‌اند تا بدون نیاز به سخت‌افزار فیزیکی، بتوانند یک روتربرد کامل در فضای ابری در اختیار داشته باشند.
                        </p>
                        <p className="mt-3">
                            با استفاده از MikroTik VPS شما می‌توانید تمام قابلیت‌های یک روتر واقعی، از جمله مدیریت روتینگ، VPN، فایروال، NAT، Queue، Load Balancing و غیره را در بستر یک سرور مجازی قدرتمند تجربه کنید. تمام سرورها با دسترسی کامل (Full Admin) ارائه می‌شوند و امکان مدیریت کامل از طریق Winbox، WebFig و SSH را دارند، بدون نیاز به سخت‌افزار خاص یا اتصال فیزیکی. این یعنی در هر نقطه‌ای از دنیا که باشید، فقط با چند کلیک به یک شبکه‌ی ابری حرفه‌ای متصل خواهید شد.
                        </p>
                        <p className="mt-3">
                            زیرساخت پرسرعت، پایداری شبکه و منابع اختصاصی باعث شده تا بسیاری از متخصصان شبکه، این سرویس را برای آموزش، شبیه‌سازی، راه‌اندازی سرویس‌های VPN، مدیریت شبکه‌های چندسایته و حتی تنظیم تونل‌های پیشرفته ترجیح دهند. ترافیک آپلود کاملاً رایگان و محاسبه هزینه تنها بر اساس ترافیک دانلود، فضای مانور بیشتری در اختیار کاربران قرار می‌دهد، مخصوصاً برای کسانی که تبادل دیتا یا مانیتورینگ لحظه‌ای انجام می‌دهند.
                        </p>
                    </div>

                    <div className="p-2 md:p-10 mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl vazirfont-bold text-blue-800">
                                    معرفی سرویس ها
                                </h2>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Flex MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر در ابتدای مسیر یادگیری شبکه یا تنظیمات MikroTik هستید، سرویس Flex یک انتخاب اقتصادی و قابل اعتماد برای شماست. این پلن با منابع پایه و قیمت مقرون‌به‌صرفه، امکان اجرای نسخه کامل RouterOS را بدون نیاز به تجهیزات فیزیکی فراهم می‌کند. برای دانشجویان، کارآموزان، یا کسانی که می‌خواهند سناریوهای ساده مانند راه‌اندازی VPN یا تست NAT را تمرین کنند، Flex شروعی عالی و بی‌دردسر است. شما می‌توانید با دسترسی کامل به محیط میکروتیک، با خیال راحت یاد بگیرید، تنظیم کنید و تجربه کسب کنید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/mikrotik/mikrotik_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div> */}

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/mikrotik/mikrotik_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            سرویس Solo برای کاربران حرفه‌ای‌تر یا مدیران شبکه‌ای طراحی شده که نیاز به منابع بیشتر و پایداری بالاتر دارند. اگر قصد اجرای چند سناریوی شبکه‌ای هم‌زمان، راه‌اندازی تونل‌های رمزنگاری‌شده، یا حتی مدیریت چند سایت از راه دور را دارید، این پلن با منابع بالاتر و عملکرد پایدارتر، گزینه‌ای مناسب برای شماست. Solo به شما این امکان را می‌دهد که تنظیمات پیچیده‌تری در محیط MikroTik پیاده‌سازی کنید، بدون نگرانی از کندی یا قطعی در عملکرد سرور.

                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="solo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Pro MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            برای متخصصان شبکه، ISPها یا شرکت‌هایی که به دنبال اجرای سناریوهای سنگین و مدیریت هم‌زمان چند شبکه یا زیرساخت هستند، سرویس Pro بهترین گزینه موجود است. این پلن با منابع قدرتمند و اتصال پایدار، امکان اجرای حرفه‌ای‌ترین تنظیمات را فراهم می‌کند. اگر نیاز به راه‌اندازی مانیتورینگ دائمی شبکه، تنظیمات پیچیده فایروال یا اعمال سیاست‌های دقیق مدیریت پهنای باند دارید، Pro پاسخی مطمئن به نیازهای شما خواهد بود. این سرویس، تجربه‌ای کامل از قدرت MikroTik در فضای ابری است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/mikrotik/mikrotik_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/mikrotik/mikrotik_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Pro+ MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر در حال طراحی و اجرای معماری‌های پیشرفته شبکه هستید یا چندین پروژه عملیاتی و تستی را به‌صورت هم‌زمان مدیریت می‌کنید، سرویس Pro+ MikroTik پاسخگوی نیازهای شماست. این پلن با منابع بیشتر نسبت به نسخه Pro، توانایی اجرای سناریوهای گسترده‌تر مانند پیاده‌سازی BGP، مدیریت VLAN در مقیاس وسیع، و راه‌اندازی زیرساخت‌های چندسایتی را فراهم می‌کند. برای متخصصانی که به ثبات، قدرت و انعطاف‌پذیری بالا نیاز دارند، Pro+ یک انتخاب هوشمندانه و مطمئن است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro-plus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Ultra MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            Ultra MikroTik برای سازمان‌ها، آموزشگاه‌های فنی یا تیم‌های حرفه‌ای طراحی شده که نیاز به منابع بالا، پایداری مطلق و عملکرد بی‌نقص دارند. این پلن امکان اجرای هم‌زمان ده‌ها سناریو، ایجاد زیرساخت‌های امن با تونل‌های رمزنگاری‌شده، کنترل دقیق ترافیک و مانیتورینگ حرفه‌ای را فراهم می‌کند. Ultra محیطی ایده‌آل برای شبیه‌سازی پروژه‌های واقعی، اجرای دوره‌های عملی و پیاده‌سازی سناریوهای پیچیده‌ شبکه است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="ultra" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/mikrotik/mikrotik_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div> */}

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/mikrotik/mikrotik_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Max MikroTik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            سرویس Max MikroTik بدون محدودیت، برای کسانی ساخته شده که نیاز به بیشترین سطح منابع، پایداری و قابلیت انعطاف در مدیریت شبکه دارند. این پلن برای شرکت‌های بزرگ، ارائه‌دهندگان خدمات اینترنت، و تیم‌های تخصصی که چندین توپولوژی شبکه را به‌صورت هم‌زمان اجرا و مدیریت می‌کنند، ایده‌آل است. از راه‌اندازی دیتاسنترهای مجازی، تا کنترل پهنای باند در سطح انبوه، Max به شما آزادی و اطمینانی می‌دهد که در هیچ پلن دیگری پیدا نخواهید کرد.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="max" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </section>
            </div >
        </>
    )
}

export default Mikrotik;