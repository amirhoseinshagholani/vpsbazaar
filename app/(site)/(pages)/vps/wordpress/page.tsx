import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "../components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی وردپرس | Flex WordPress، Solo WordPress، Pro WordPress، Pro+ WordPress، Ultra WordPress و Max WordPress | VPSBazaar",
    description: "خرید سرور مجازی مخصوص وردپرس با سرعت بالا، منابع اختصاصی و قابلیت نصب آسان. مناسب برای سایت‌های وردپرسی پرترافیک، فروشگاهی و شرکتی. انتخاب از میان پلن‌های Flex WordPress، Solo WordPress، Pro WordPress، Pro+ WordPress، Ultra WordPress و Max WordPress.",
    keywords: "سرور مجازی وردپرس, WordPress VPS, خرید VPS وردپرس, هاست وردپرس حرفه‌ای, Flex WordPress, Solo WordPress, Pro WordPress, Pro+ WordPress, Ultra WordPress, Max WordPress, نصب وردپرس روی VPS, سایت فروشگاهی وردپرس, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/wordpress",
        title: "خرید سرور مجازی وردپرس | Flex WordPress، Solo WordPress، Pro WordPress، Pro+ WordPress، Ultra WordPress و Max WordPress | VPSBazaar",
        description: "VPS مخصوص وردپرس برای میزبانی سریع، امن و قدرتمند سایت‌های وردپرسی پرترافیک. سازگار با LiteSpeed، NGINX، Apache و نصب آسان وردپرس تنها با یک کلیک.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی وردپرس",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی وردپرس | Flex WordPress، Solo WordPress، Pro WordPress، Pro+ WordPress، Ultra WordPress و Max WordPress | VPSBazaar",
        description: "راه‌اندازی آسان وردپرس روی VPS اختصاصی با منابع متنوع برای سایت‌های فروشگاهی، شرکتی و حرفه‌ای. مناسب برای توسعه‌دهندگان و کسب‌وکارهای آنلاین.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps/wordpress",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};


const Wordpress = () => {
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
                            "name": "سرور مجازی وردپرس",
                            "item": "https://vpsbazaar.cloud/vps/wordpress"
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="wordpress" />
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/vps"><span className="m-1 text-blue-600">سرویس ها</span></Link>/<span className="m-1">سرور مجازی وردپرس</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-justify text-lg md:text-2xl text-gray-800">سرور مجازی وردپرس (WordPress VPS) برای وب‌سایت‌های سریع، امن و همیشه در دسترس</h1>
                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="mt-10">
                                <div className="md:flex gap-5 justify-center mx-auto w-max px-5">
                                    <Services category="wordpress" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            اگر وب‌سایتی با وردپرس دارید و به‌دنبال سرعت بیشتر، امنیت بالاتر و کنترل کامل‌تری نسبت به هاست اشتراکی هستید، وقت آن رسیده که به سرور مجازی وردپرس مهاجرت کنید. در VPS Bazaar ما سرورهایی اختصاصی برای میزبانی وردپرس فراهم کرده‌ایم که با منابع کاملاً قابل ارتقاء، عملکرد پایدار و پشتیبانی فنی مناسب، وب‌سایت شما را در بالاترین سطح نگه می‌دارند.
                        </p>
                        <p className="mt-3">
                            با استفاده از سرور مجازی وردپرس، دیگر دغدغه محدودیت‌های هاست اشتراکی را نخواهید داشت. می‌توانید افزونه‌های سنگین نصب کنید، کش پیشرفته فعال کنید و سایت خود را برای سئو و تجربه کاربری بهتر بهینه‌سازی کنید. این سرورها به‌طور کامل با وردپرس سازگارند و امکان راه‌اندازی سریع، پشتیبان‌گیری منظم، و بهینه‌سازی منابع را در اختیار شما می‌گذارند.
                        </p>
                        <p className="mt-3">
                            چه تازه سایت خود را راه‌اندازی کرده باشید، چه یک فروشگاه بزرگ ووکامرسی را مدیریت کنید، سرورهای وردپرس VPS Bazaar برای رشد و مقیاس‌پذیری آماده‌اند.
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
                                            سرویس Flex wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            سرویس Flex برای کسانی طراحی شده که به‌تازگی وارد دنیای وردپرس شده‌اند یا وب‌سایت‌های سبک، شخصی یا آموزشی راه‌اندازی کرده‌اند. این پلن منابع مناسبی برای میزبانی یک سایت وردپرسی با ترافیک کم تا متوسط فراهم می‌کند و در عین حال امکان ارتقاء آسان را نیز در اختیار شما قرار می‌دهد. اگر به‌دنبال یک نقطه شروع اقتصادی با امکانات پایه و عملکرد پایدار هستید، Flex انتخابی منطقی و مطمئن است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/wordpress/wordpress_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div> */}

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/wordpress/wordpress_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر سایت وردپرسی شما ترافیک بیشتری دارد، از افزونه‌های پیشرفته استفاده می‌کند یا فروشگاه اینترنتی ووکامرس روی آن فعال است، سرویس Solo برای شما طراحی شده. این پلن با منابع بیشتر و عملکرد قدرتمندتر، می‌تواند چندین افزونه بهینه‌ساز، سیستم کش حرفه‌ای و حتی سامانه‌های ایمیل یا گزارش‌گیری را بدون افت کیفیت اجرا کند. Solo انتخاب مناسبی برای سایت‌های در حال رشد و کسب‌وکارهایی است که به سرعت و پایداری اهمیت می‌دهند.
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
                                            سرویس Pro wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            برای وب‌سایت‌های پرترافیک، فروشگاه‌های بزرگ، یا کسب‌وکارهایی که امنیت، سرعت بارگذاری و انعطاف‌پذیری بالا برایشان حیاتی‌ست، سرویس Pro طراحی شده است. این پلن با منابع اختصاصی قوی، اجرای بی‌وقفه، و سازگاری کامل با بهینه‌سازهای وردپرس، پاسخگوی نیاز کاربران حرفه‌ای است. با Pro می‌توانید وب‌سایتی با سرعت فوق‌العاده، امنیت سطح بالا و زیرساخت قابل توسعه داشته باشید که همیشه آماده پاسخ‌گویی به کاربران شماست.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/wordpress/wordpress_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/wordpress/wordpress_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Pro+ WordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر وب‌سایت وردپرسی شما دارای چندین افزونه، صفحات پویا، فروشگاه فعال و ترافیک بالا است، سرویس Pro+ WordPress همان چیزی‌ست که نیاز دارید. این پلن با منابع بیشتر نسبت به Pro، پشتیبانی بهتر از عملیات بک‌آپ‌گیری، ارسال ایمیل انبوه، کش پیشرفته و امنیت بالاتر، بستری قدرتمند برای رشد بیشتر سایت شما فراهم می‌کند. Pro+ برای آژانس‌های دیجیتال، فروشگاه‌های در حال گسترش و وب‌سایت‌هایی که کیفیت تجربه‌ی کاربری را در اولویت قرار می‌دهند، انتخابی هوشمندانه است.
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
                                            سرویس Ultra WordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            Ultra WordPress مناسب برندهایی‌ست که وب‌سایت، ستون اصلی ارتباط آن‌ها با مشتریان است. با منابع اختصاصی، سازگاری کامل با CDN و قابلیت اجرای بی‌نقص سیستم‌های گزارش‌گیری، آنالیتیکس، اتوماسیون بازاریابی و پردازش هم‌زمان درخواست‌های زیاد، Ultra امکان می‌دهد سایتتان همیشه سریع، امن و در دسترس باشد. این پلن برای سازمان‌ها، فروشگاه‌های پرترافیک و پروژه‌هایی که هیچ جایی برای ریسک ندارند طراحی شده است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="ultra" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/wordpress/wordpress_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div> */}

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/wordpress/wordpress_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Max WordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            Max WordPress نقطه‌ی اوج برای هر کسی‌ست که وردپرس را به‌عنوان قلب کسب‌وکار خود می‌بیند. این پلن برای میزبانی چندین سایت وردپرسی، اجرای شبکه‌های چندسایته (Multisite)، پردازش سنگین داده، و اتصال به سامانه‌های بیرونی طراحی شده است. Max با بالاترین سطح منابع، امنیت چندلایه، امکان سفارشی‌سازی گسترده و مقیاس‌پذیری بی‌نظیر، انتخابی بی‌رقیب برای برندهای بزرگ، خبرگزاری‌ها، استارتاپ‌های SaaS و فروشگاه‌های پررونق است.
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
            </main >
        </>
    )
}

export default Wordpress;