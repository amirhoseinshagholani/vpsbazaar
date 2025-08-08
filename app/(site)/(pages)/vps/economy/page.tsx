import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";
import Script from "next/script";
import ProductSchema from "../components/productSchema";

export const metadata: Metadata = {
    title: "خرید سرور مجازی اقتصادی | Flex VPS، Solo VPS | VPSBazaar",
    description: "خرید سرور مجازی اقتصادی با قیمت مناسب، پایداری بالا و مناسب برای پروژه‌های سبک و وب‌سایت‌های شخصی از VPSBazaar. سرویس‌های Flex VPS و Solo VPS بهترین انتخاب برای شروع به کار با هزینه کم هستند.",
    keywords: "سرور مجازی اقتصادی, VPS ارزان, خرید VPS اقتصادی, Flex VPS, Solo VPS, سرور مجازی ارزان, VPS قیمت مناسب, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/economy",
        title: "خرید سرور مجازی اقتصادی | Flex VPS، Solo VPS | VPSBazaar",
        description: "خرید VPS اقتصادی با قیمت مناسب و پایداری بالا از VPSBazaar. مناسب برای میزبانی وب‌سایت‌های شخصی، پروژه‌های سبک و اپلیکیشن‌های کوچک با سرویس‌های Flex VPS و Solo VPS.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی اقتصادی",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی اقتصادی | Flex VPS، Solo VPS | VPSBazaar",
        description: "سرور مجازی اقتصادی با قیمت مناسب و پایداری بالا برای وب‌سایت‌ها و پروژه‌های سبک از VPSBazaar با سرویس‌های Flex VPS و Solo VPS.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/vps/economy",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};



const Economy = () => {
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
                            "name": "سرور مجازی اقتصادی",
                            "item": "https://vpsbazaar.cloud/vps/economy"
                        }
                    ]
                })}
            </Script>
            <ProductSchema category="economy" />

            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600 flex gap-2">
                    <Link className="text-blue-600" href="/"><span>خانه</span></Link>/<Link className="text-blue-600" href="/vps"><span>سرور مجازی</span></Link>/<span>سرور مجازی اقتصادی</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-xl md:text-2xl text-gray-800">
                        سرور مجازی اقتصادی با قیمت مناسب و عملکرد پایدار
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
                                    <Services category="economy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            اگر به‌دنبال یک سرور مجازی مقرون‌به‌صرفه برای پروژه‌های خود هستید، VPS Bazaar سرورهای اقتصادی را با بهترین قیمت و کیفیت در اختیار شما قرار می‌دهد. این سرورها با هدف ارائه منابع پایدار و اتصال مطمئن، مناسب پروژه‌های کوچک و متوسط، وب‌سایت‌های شخصی، هاست دانلود و اجرای برنامه‌های سبک هستند. با تهیه این سرویس، بدون نیاز به پرداخت هزینه‌های بالا، می‌توانید از یک سرور مجازی با آی‌پی ثابت، پهنای باند مناسب و منابع اختصاصی بهره‌مند شوید.
                        </p>
                        <p className="mt-3">
                            این سرورها برای کسانی طراحی شده‌اند که به‌دنبال شروع کسب‌وکار آنلاین، میزبانی پروژه‌های شخصی، اجرای اسکریپت‌ها یا مدیریت ربات‌های سبک هستند و در عین حال دوام و پایداری اتصال برایشان اهمیت دارد. سرورهای اقتصادی VPS Bazaar از دیتاسنترهای معتبر با پینگ مناسب به ایران ارائه می‌شوند و مدیریت آن‌ها از طریق پنل کاربری ساده و قابل‌دسترسی است.
                        </p>
                        <p className="mt-3">
                            سرویس‌های اقتصادی ما از لحاظ منابع قابل ارتقاء هستند. هر زمان نیاز به منابع بیشتر داشتید، بدون دردسر می‌توانید پلن خود را ارتقاء دهید و از انتقال اطلاعات یا قطعی سرویس جلوگیری کنید. اگر به‌دنبال تجربه‌ای کم‌هزینه، اما با کیفیت و پایداری بالا هستید، پلن‌های اقتصادی VPS Bazaar انتخابی هوشمندانه خواهند بود.
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
                                            سرویس Flex Economy
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر به‌تازگی وارد دنیای سرورهای مجازی شده‌اید یا قصد دارید پروژه‌های شخصی و سبک خود را مدیریت کنید، سرویس Flex Economy بهترین گزینه‌ی اقتصادی و کاربردی است. با منابع متعادل و اتصال پایدار، این سرویس امکان میزبانی وب‌سایت‌ها، اجرای برنامه‌های سبک و مدیریت پروژه‌های دانشجویی یا شخصی را فراهم می‌کند، بدون اینکه نیاز به پرداخت هزینه‌های بالا داشته باشید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="economy" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 flex hidden md:block">
                                <Image className="mx-auto" src={"/img/midd-service.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/pro-service.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Solo Economy
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            برای کاربرانی که تجربه بیشتری در استفاده از سرور مجازی دارند و به منابع بالاتر، عملکرد پایدارتر و فضای کاری گسترده‌تر نیاز دارند، سرویس Solo Economy انتخابی مناسب است. این پلن امکان اجرای هم‌زمان چند پروژه، میزبانی سایت‌های پر بازدیدتر یا اجرای اسکریپت‌های متوسط و ربات‌های مختلف را با سرعت و پایداری بیشتر فراهم می‌کند و مناسب کسانی است که در مسیر توسعه پروژه‌های خود قرار دارند.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="solo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Pro Forex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر در دنیای ترید حرفه‌ای فعالیت می‌کنید و کوچک‌ترین تأخیر یا ناپایداری می‌تواند برایتان گران تمام شود، سرویس Pro دقیقاً همان زیرساختی است که به آن نیاز دارید. این پلن با منابع قدرتمند و پایدار، به‌گونه‌ای طراحی شده که پاسخگوی اجرای هم‌زمان چند متاتریدر، ربات‌های معاملاتی پیشرفته، ابزارهای تحلیلی سنگین و استراتژی‌های اسکالپینگ با حساسیت بالا باشد. اگر به دنبال یک سرور مجازی واقعی برای معاملات جدی، مدیریت پیشرفته ریسک و اجرای دقیق استراتژی‌های روز دنیا هستید، سرویس Pro انتخابی حرفه‌ای و بی‌رقیب برای شماست.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/forex/pro_forex.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/forex/solo_forex.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Pro+ Forex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر معاملات شما وارد سطحی از پیچیدگی، تنوع و حجم بالا شده‌اند، سرویس Pro+ Forex پاسخ مناسبی به نیازهای روزافزون شما خواهد بود. این سرویس برای تریدرهای حرفه‌ای، اسکالپرهای دقیق و کسانی طراحی شده که هم‌زمان چندین متاتریدر، اکسپرت‌های پیشرفته، ابزارهای تحلیل تکنیکال و سامانه‌های مدیریت سرمایه را اجرا می‌کنند. با منابع قدرتمندتر نسبت به پلن Pro و زیرساختی پایدار، Pro+ Forex تضمین می‌کند که در لحظات حساس بازار، هیچ چیز مانع اجرای سریع و دقیق استراتژی‌های شما نشود.
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
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Ultra Forex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            Ultra Forex برای تریدرهایی ساخته شده که به‌هیچ‌وجه اهل ریسک روی پایداری، سرعت و کیفیت اتصال نیستند. این سرویس با بهره‌گیری از منابع اختصاصی، سخت‌افزار حرفه‌ای و پینگ بسیار پایین، تجربه‌ای بی‌نقص برای معاملات سنگین، الگوریتمی و با فرکانس بالا فراهم می‌کند. اگر در مجموعه‌ای مالی یا شرکت سرمایه‌گذاری فعالیت می‌کنید و اجرای بدون نقص استراتژی‌ها برایتان حیاتی‌ست، Ultra Forex همان چیزی‌ست که به آن نیاز دارید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="ultra" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 flex hidden md:block">
                                <Image className="mx-auto" src={"/img/forex/flex_forex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/forex/solo_forex.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto md:w-2/3">
                                            سرویس Max Forex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            برای آن‌هایی که هیچ محدودیتی را نمی‌پذیرند و به بیشترین سطح منابع، امنیت و انعطاف‌پذیری نیاز دارند، سرویس Max Forex طراحی شده است. این سرویس پاسخگوی نیاز معامله‌گرانی‌ست که ده‌ها حساب معاملاتی، اکسپرت‌های سنگین، داشبوردهای مدیریتی و سامانه‌های گزارش‌گیری لحظه‌ای را به‌صورت هم‌زمان اجرا می‌کنند. با Max، دیگر نگران افت سرعت، قطعی یا کمبود منابع نخواهید بود؛ فقط بر روی معاملاتتان تمرکز کنید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
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

export default Economy;