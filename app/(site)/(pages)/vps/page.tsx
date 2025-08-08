import Link from "next/link";
import Image from "next/image";
import Services from "./components/services";
import SelectService from "./components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "./components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی | سرویس‌های Flex، Solo، Pro، Pro+، Ultra و Max | VPSBazaar",
    description: "خرید سرور مجازی با کیفیت و قیمت مناسب از VPSBazaar. انتخاب از میان سرویس‌های Flex، Solo، Pro، Pro+، Ultra و Max متناسب با نیازهای شما در مدیریت سرور.",
    keywords: "خرید سرور مجازی, VPS, سرور مجازی ایران, سرور مجازی لینوکس, سرور مجازی ویندوز, سرویس Flex, سرویس Solo, سرویس Pro, سرویس Pro+, سرویس Ultra, سرویس Max, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps",
        title: "خرید سرور مجازی | سرویس‌های Flex، Solo، Pro، Pro+، Ultra و Max | VPSBazaar",
        description: "با سرویس‌های متنوع Flex، Solo، Pro، Pro+، Ultra و Max از VPSBazaar، سرور مجازی مناسب نیازتان را انتخاب و تهیه کنید.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - خرید سرور مجازی",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی | سرویس‌های Flex، Solo، Pro، Pro+، Ultra و Max | VPSBazaar",
        description: "انتخاب آسان سرور مجازی از بین سرویس‌های Flex، Solo، Pro، Pro+، Ultra و Max با کیفیت بالا و پشتیبانی قوی از VPSBazaar.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};



const Vps = () => {
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
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="" />

            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">سرور مجازی</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">سرور مجازی</h1>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            در VPS Bazaar ما سه نوع سرویس سرور مجازی ارائه می‌کنیم که برای نیازهای متنوع کاربران، از حرفه‌ ای ‌ترین توسعه‌ دهنده ‌ها تا صاحبان کسب‌ و کارهای نوپا، طراحی شده‌اند. هرکدام از این پلن‌ها، قابلیت ارتقا در تمامی بخش‌ های سخت‌ افزاری و نرم ‌افزاری را دارند، بنابراین بدون نگرانی از محدودیت، می‌توانید منابع خود را بر اساس رشد پروژه‌ تان تنظیم کنید.
                        </p>
                        <p className="mt-3">
                            یکی از مزایای منحصر به ‌فرد سرویس‌های ما، نحوه محاسبه ترافیک مصرفی است؛ ترافیک تنها بر اساس دانلود محاسبه می‌شود و آپلود برای شما کاملاً رایگان خواهد بود. این یعنی کنترل بیشتر روی هزینه ‌ها، مخصوصاً برای کسانی که دیتای زیادی آپلود می‌کنند.
                        </p>
                        <p className="mt-3">
                            ما در VPS Bazaar تلاش کرده ‌ایم تجربه ‌ای ساده، سریع و قابل اعتماد از خرید سرور مجازی برای شما فراهم کنیم، با پشتیبانی اختصاصی و سرورهایی پرسرعت که همیشه در دسترس شما هستند.
                        </p>
                    </div>

                    <div className="md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 gap-2">
                                <Services category="" />
                            </div>
                        </div>
                    </div>

                    <div className="p-2 md:p-10 mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-lg text-nowrap md:text-4xl">☁️</span>
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    معرفی سرویس ها
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس Flex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس Flex گزینه‌ای ایده‌آل برای کاربران تازه‌کار، دانشجویان و علاقه‌مندان به یادگیری سرورهای مجازی است. اگر به‌تازگی وارد دنیای VPS شده‌اید و به دنبال راهی مقرون‌به‌صرفه برای آزمون، یادگیری یا اجرای پروژه‌های سبک هستید، این سرویس دقیقاً برای شما طراحی شده. با منابع متعادل و قیمت مناسب، Flex بهترین نقطه‌ی شروع برای تجربه‌ی دنیای سرورهاست.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
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
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس Solo
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس solo مناسب بیزینس‌های سطح متوسط است که به منابع بیشتری نیاز دارند و می‌خواهند از قابلیت‌های کامل‌تر برای مدیریت کسب‌وکار آنلاین خود بهره ببرند. این سرویس برای مشاغلی که در حال رشد و گسترش هستند، انتخابی ایده‌آل محسوب می‌شود.
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
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس Pro
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس pro برای کاربران و کسب‌وکارهایی طراحی شده است که به منابع بیشتری نیاز دارند. این سرویس با منابع بهینه، پاسخگوی نیازهای کاربران حرفه‌ای است که مایلند به مدیریت وب‌سایت‌ها، نرم‌افزارها و اپلیکیشن‌های خود بپردازند، بدون نیاز به زیرساخت‌های پیچیده و سنگین.
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
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس Pro Plus
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس Pro Plus مناسب کاربرانی است که یک پله بالاتر از حرفه‌ای هستند. اگر پروژه‌هایی با بار پردازشی بالا دارید یا نیازمند منابع بیشتر و پایداری بالاتر هستید، Pro+ گزینه‌ای مطمئن برای شماست. این سرویس با ارائه‌ی منابع قدرتمند و عملکردی پایدار، انتخابی مناسب برای توسعه‌دهندگان، استارتاپ‌های در حال رشد و وب‌سایت‌هایی با ترافیک بالا است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="pro-plus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس Ultra
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس Ultra برای کاربرانی طراحی شده که نیاز به نهایت قدرت، سرعت و اطمینان دارند. این سرویس مناسب شرکت‌ها و سازمان‌هایی است که اپلیکیشن‌های حساس، دیتابیس‌های بزرگ یا سامانه‌های حیاتی را مدیریت می‌کنند. Ultra با استفاده از سخت‌افزار به‌روز و زیرساخت حرفه‌ای، حداکثر کارایی را برای شما به ارمغان می‌آورد.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="ultra" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/flex-service.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/pro-service.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto md:w-2/3">
                                            سرویس max
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            سرویس Max گزینه‌ای ممتاز برای کسب‌وکارهایی است که دیگر نمی‌خواهند با هیچ محدودیتی روبه‌رو باشند. اگر به دنبال بالاترین سطح منابع، انعطاف‌پذیری و قابلیت اطمینان هستید، Max پاسخ نهایی شماست. این سرویس برای سازمان‌های بزرگ، پروژه‌های سنگین و نیازهای خاص طراحی شده و نهایت آزادی عمل را برای مدیریت کامل زیرساخت فراهم می‌کند.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="max" />
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

export default Vps;