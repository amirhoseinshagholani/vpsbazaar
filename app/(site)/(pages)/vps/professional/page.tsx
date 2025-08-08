import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "../components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی حرفه‌ای | Pro VPS، Pro+ VPS، Ultra VPS، Max VPS | VPSBazaar",
    description: "خرید سرور مجازی حرفه‌ای با منابع قدرتمند، سرعت بالا و پایداری ویژه برای اجرای پروژه‌های سنگین، سامانه‌های مالی و اپلیکیشن‌های حساس از VPSBazaar. پلن‌های Pro VPS، Pro+ VPS، Ultra VPS و Max VPS مناسب برای حرفه‌ای‌ها.",
    keywords: "سرور مجازی حرفه‌ای, VPS قدرتمند, خرید VPS حرفه‌ای, Pro VPS, Pro+ VPS, Ultra VPS, Max VPS, سرور پرقدرت, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/professional",
        title: "خرید سرور مجازی حرفه‌ای | Pro VPS، Pro+ VPS، Ultra VPS، Max VPS | VPSBazaar",
        description: "سرور مجازی حرفه‌ای با منابع قدرتمند و پایدار از VPSBazaar. مناسب برای پروژه‌های سنگین، سامانه‌های مالی و اپلیکیشن‌های حساس با پلن‌های Pro VPS، Pro+ VPS، Ultra VPS و Max VPS.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی حرفه‌ای",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی حرفه‌ای | Pro VPS، Pro+ VPS، Ultra VPS، Max VPS | VPSBazaar",
        description: "سرور مجازی حرفه‌ای با سرعت و پایداری بالا برای اجرای پروژه‌های حساس، سامانه‌های مالی و کسب‌وکارهای حرفه‌ای از VPSBazaar با پلن‌های Pro، Pro+، Ultra و Max.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps/professional",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};



const Forex = () => {
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
                            "name": "سرور مجازی حرفه ای",
                            "item": "https://vpsbazaar.cloud/vps/professional"
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="professional" />

            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600 flex gap-2">
                    <Link className="text-blue-600" href="/"><span>خانه</span></Link>/<Link className="text-blue-600" href="/vps"><span>سرور مجازی</span></Link>/<span>سرور مجازی حرفه ای</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-xl md:text-2xl text-gray-800">
                        سرور مجازی حرفه‌ای (Professional VPS) با منابع قدرتمند و اتصال پایدار
                    </h1>
                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما
                                </h2>
                            </div>
                            <div className="mt-10">
                                <div className="md:flex gap-5 justify-center mx-auto w-max px-5">
                                    <Services category="professional" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            اگر پروژه‌ها و کسب‌وکار شما در سطح حرفه‌ای فعالیت می‌کند، حتماً می‌دانید که پایداری و قدرت پردازش سرور، نقشی کلیدی در موفقیت شما دارد. به همین دلیل، ما در VPS Bazaar سرورهای مجازی حرفه‌ای را با منابع اختصاصی، سرعت بالا و بیشترین پایداری برای شما فراهم کرده‌ایم تا بتوانید پروژه‌های سنگین، سامانه‌های مالی، وب‌سایت‌های پرترافیک و نرم‌افزارهای پیچیده خود را بدون محدودیت و دغدغه مدیریت کنید.
                        </p>
                        <p className="mt-3">
                            در طراحی این سرویس‌ها تلاش کرده‌ایم تجربه‌ای حرفه‌ای و بی‌دردسر برای کسب‌وکارها و توسعه‌دهندگان فراهم کنیم. سرورهای حرفه‌ای ما از دیتاسنترهای معتبر با پینگ مناسب به ایران و شبکه پایدار ارائه می‌شوند و مناسب اجرای سامانه‌های سازمانی، ربات‌های سنگین، نرم‌افزارهای تحلیلی، هاست فروشگاهی و اپلیکیشن‌های پردازشی هستند. از آن‌جا که در این سرورها ترافیک تنها بر اساس دانلود محاسبه می‌شود و آپلود رایگان است، می‌توانید با خیال راحت داده‌های خود را منتقل و مدیریت کنید.
                        </p>
                        <p className="mt-3">
                            سرورهای مجازی VPS Bazaar از لحاظ منابع سخت‌افزاری کاملاً قابل ارتقاء هستند. در هر زمان و بدون نیاز به انتقال اطلاعات یا قطعی سرویس، می‌توانید پلن خود را ارتقاء دهید و منابع بیشتری برای توسعه و رشد کسب‌وکارتان فراهم کنید. برای کاربرانی که به‌دنبال اجرای حرفه‌ای پروژه‌های خود هستند، پلن Pro انتخابی اقتصادی و قدرتمند است. کسانی که به منابع بیشتر و عملکرد پایدارتر نیاز دارند، می‌توانند از پلن Pro+ استفاده کنند. برای شرکت‌ها و پروژه‌های سازمانی بزرگ، پلن Ultra و Max، نهایت قدرت، سرعت و پایداری را ارائه می‌کنند.
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

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Pro Professional
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر به‌دنبال اجرای پروژه‌های حرفه‌ای با منابع پایدار و اتصال قابل اعتماد هستید، سرویس Pro یک انتخاب اقتصادی و در عین حال قدرتمند برای شماست. این سرویس مناسب میزبانی فروشگاه‌های اینترنتی، اجرای نرم‌افزارهای مدیریت پروژه، ربات‌های تحلیل داده و اپلیکیشن‌های سازمانی سبک و متوسط است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 flex hidden md:block">
                                <Image className="mx-auto" src={"/img/flex-service.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/midd-service.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Pro+ Professional
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            برای کاربرانی که نیاز به منابع قدرتمندتر و عملکرد پایدارتر دارند، سرویس Pro+ Professional طراحی شده است. این پلن امکان اجرای چندین سرویس هم‌زمان، مدیریت ترافیک بالا و اجرای نرم‌افزارهای تحلیلی پیشرفته را با سرعت و پایداری بالا فراهم می‌کند و انتخابی مناسب برای توسعه‌دهندگان و کسب‌وکارهای در حال رشد است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
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
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Ultra Professional
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            Ultra Professional برای کسب‌وکارها و تیم‌هایی طراحی شده است که پایداری و سرعت برایشان حیاتی است. این سرویس با منابع اختصاصی، پردازنده‌های قدرتمند و پهنای باند بالا، مناسب اجرای نرم‌افزارهای پردازشی سنگین، سیستم‌های مالی، داشبوردهای لحظه‌ای و اپلیکیشن‌های حساس است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/pro-service.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/midd-service.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Max Professional
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر به دنبال بیشترین منابع، امنیت و انعطاف‌پذیری هستید، سرویس Max Professional پاسخگوی نیازهای شما خواهد بود. این سرویس امکان اجرای هم‌زمان ده‌ها نرم‌افزار، سامانه‌های گزارش‌گیری و پروژه‌های سنگین با مصرف منابع بالا را فراهم می‌کند. با Max، دیگر نگران افت سرعت یا قطعی سرویس نخواهید بود و می‌توانید تمام تمرکز خود را روی توسعه و مدیریت پروژه‌های مهمتان بگذارید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="pro-plus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main >
        </>
    )
}

export default Forex;