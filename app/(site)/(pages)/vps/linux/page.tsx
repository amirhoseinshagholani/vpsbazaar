import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "../components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی لینوکس | Flex Linux، Solo Linux، Pro Linux، Pro+ Linux، Ultra Linux و Max Linux | VPSBazaar",
    description: "خرید سرور مجازی لینوکس با عملکرد بالا و پایداری فوق‌العاده از VPSBazaar. مناسب برای برنامه‌نویسان، توسعه‌دهندگان و مدیران سرور. انتخاب از میان Flex Linux، Solo Linux، Pro Linux، Pro+ Linux، Ultra Linux و Max Linux.",
    keywords: "سرور مجازی لینوکس, Linux VPS, خرید VPS لینوکس, Flex Linux, Solo Linux, Pro Linux, Pro+ Linux, Ultra Linux, Max Linux, سرور لینوکس ایران, Ubuntu VPS, Debian VPS, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/linux",
        title: "خرید سرور مجازی لینوکس | Flex Linux، Solo Linux، Pro Linux، Pro+ Linux، Ultra Linux و Max Linux | VPSBazaar",
        description: "سرورهای مجازی لینوکس با منابع اختصاصی و دسترسی کامل روت. سازگار با توزیع‌های محبوب مانند Ubuntu، Debian و AlmaLinux. انتخاب مناسب برای متخصصین لینوکس و کاربران حرفه‌ای.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی لینوکس",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی لینوکس | Flex Linux، Solo Linux، Pro Linux، Pro+ Linux، Ultra Linux و Max Linux | VPSBazaar",
        description: "VPS لینوکس حرفه‌ای از VPSBazaar با پشتیبانی از Ubuntu، Debian، AlmaLinux و سایر توزیع‌ها. انتخابی هوشمندانه برای توسعه‌دهندگان، مدیران سیستم و متخصصین لینوکس.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps/linux",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};



const Linux = () => {
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
                            "name": "سرور مجازی لینوکس",
                            "item": "https://vpsbazaar.cloud/vps/linux"
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="linux" />

            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/vps"><span className="m-1 text-blue-600">سرویس ها</span></Link>/<span className="m-1">سرور مجازی لینوکس</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-justify text-lg md:text-2xl text-gray-800">سرور مجازی لینوکس (Linux VPS) با دسترسی کامل، منابع قابل ارتقاء و عملکرد پایدار</h1>
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
                                    <Services category="linux" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            این سرورها با دسترسی کامل و امکان نصب انواع توزیع‌های لینوکس مانند Ubuntu، Debian، CentOS و AlmaLinux، یک محیط حرفه‌ای و کاملاً انعطاف‌پذیر را در اختیار شما قرار می‌دهند. چه برای توسعه نرم‌افزار، میزبانی سایت، اجرای اسکریپت‌های اتوماسیون یا راه‌اندازی سرویس‌های شخصی مانند GitLab، OpenVPN یا Mail Server، به دنبال راهکاری پایدار و سریع باشید، این سرورها پاسخگوی تمام نیازهای شما خواهند بود.
                        </p>
                        <p className="mt-3">
                            ما در طراحی این سرویس‌ها تلاش کرده‌ایم بستری مناسب برای کاربران تکنیکال و برنامه‌نویسان فراهم کنیم. زیرساخت قدرتمند، منابع سخت‌افزاری اختصاصی و قابلیت ارتقاء فوری، باعث می‌شود که با رشد پروژه یا تیم توسعه‌تان، به‌سادگی بتوانید منابع سرور را افزایش دهید، بدون نیاز به مهاجرت یا از دست رفتن داده‌ها. تمامی سرورها با ترافیک نامحدود آپلود و محاسبه‌ی ترافیک فقط بر اساس دانلود ارائه می‌شوند، بنابراین در اجرای وظایف حجیم، مثل دیپلوی پروژه‌ها یا انتقال فایل‌های بک‌آپ، کنترل بیشتری بر هزینه‌ها خواهید داشت.
                        </p>
                        <p className="mt-3">
                            برای کسانی که تازه وارد فضای لینوکس شده‌اند یا پروژه‌های سبک‌تری را مدیریت می‌کنند، پلن Flex گزینه‌ای اقتصادی و مناسب است. اگر نیاز به منابع بیشتر یا اجرای چند سرویس هم‌زمان دارید، پلن Solo انتخابی حرفه‌ای‌تر محسوب می‌شود. و در نهایت، کاربران پیشرفته‌ای که قصد اجرای چند محیط توسعه، اجرای کانتینرها یا مدیریت پروژه‌های حیاتی را دارند، می‌توانند با خیال راحت از پلن Pro استفاده کنند و از عملکرد سریع و پایدار آن لذت ببرند.
                        </p>
                    </div>



                    <div className="p-2 md:p-10 mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl text-nowrap vazirfont-bold text-blue-800">
                                    معرفی سرویس ها
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Flex Linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر تازه وارد دنیای لینوکس شده‌اید یا به دنبال محیطی سبک و اقتصادی برای تمرین و آزمایش اسکریپت‌ها و دستورات هستید، سرویس Flex می‌تواند گزینه‌ای عالی برای شروع باشد. این پلن با منابع متعادل، بستری ساده و کاربردی را فراهم می‌کند تا بتوانید انواع توزیع‌های لینوکسی را نصب و بدون دغدغه تست کنید. برای دانشجویان، علاقه‌مندان به DevOps و کاربرانی که قصد یادگیری مدیریت سرور با لینوکس را دارند، Flex شروعی ایمن، کم‌هزینه و مؤثر است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/linux/linux_forex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/linux/linux_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo Linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            وقتی پروژه‌های شما بزرگ‌تر می‌شوند و نیاز به منابع بیشتری برای اجرای سرویس‌ها، دیتابیس‌ها یا فرآیندهای بک‌اند پیدا می‌کنید، سرویس Solo پاسخگوی نیاز شماست. این سرور برای توسعه‌دهنده‌هایی طراحی شده که با ابزارهای لینوکسی کار می‌کنند، Git را به‌صورت حرفه‌ای استفاده می‌کنند، و قصد دارند محیطی پایدار برای اجرای پروژه‌های واقعی داشته باشند. چه بخواهید Node.js، Python، PHP یا سایر زبان‌های لینوکسی را اجرا کنید، Solo با منابع قدرتمندتر، آزادی بیشتری به شما می‌دهد تا اپلیکیشن‌های خود را مدیریت و توسعه دهید.
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
                                            سرویس Pro Linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر از کاربران حرفه‌ای لینوکس هستید، اسکریپت‌های پیچیده اجرا می‌کنید، چندین سرویس هم‌زمان روی سرورتان دارید یا به دنبال یک محیط مطمئن برای هاستینگ سطح بالا هستید، سرویس Pro برای شما ساخته شده. این پلن با منابع پیشرفته، عملکرد پایدار و سرعت بالا، امکان مدیریت حرفه‌ای پروژه‌های لینوکسی را فراهم می‌کند. از اجرای کانتینرهای Docker گرفته تا مدیریت سرورهای تولیدی برای مشتریان، در سرویس Pro هیچ محدودیتی برای استفاده از قدرت لینوکس نخواهید داشت. محیطی امن، سریع و همیشه در دسترس برای کسانی که به کیفیت اهمیت می‌دهند.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/linux/linux_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                    </div>
                </section>
            </main >
        </>
    )
}

export default Linux;