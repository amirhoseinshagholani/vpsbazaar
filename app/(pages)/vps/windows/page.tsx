import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "خرید سرور مجازی ویندوز | Flex Windows، Solo Windows، و Pro Windows | VPSBazaar",
    description: "خرید سرور مجازی ویندوز با دسترسی Remote Desktop (RDP)، مناسب برای کارهای اداری، نرم‌افزارهای ویندوزی، ترید، و مدیریت سرور. انتخاب از میان پلن‌های Flex Windows، Solo Windows، و Pro Windows.",
    keywords: "سرور مجازی ویندوز, Windows VPS, خرید VPS ویندوز, ریموت دسکتاپ, RDP, Flex Windows, Flex Windows, Solo Windows, Pro Windows, سرور ترید ویندوز, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/windows",
        title: "خرید سرور مجازی ویندوز | Flex Windows، Flex Solo و Flex Pro | VPSBazaar",
        description: "VPS ویندوز با ریموت دسکتاپ سریع، مناسب اجرای نرم‌افزارهای تحت ویندوز و ترید. ویندوز سرور با منابع اختصاصی و پایداری بالا.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/windows/og-windows-vps.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی ویندوز",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی ویندوز | Flex Windows، Solo Windows، و Pro Windows | VPSBazaar",
        description: "VPS ویندوز با دسترسی RDP برای انجام کارهای اداری، اجرای نرم‌افزارها، یا فعالیت در بازارهای مالی. سازگار با Windows Server 2019 و 2022.",
        images: ["https://vpsbazaar.cloud/img/og-windows-vps.webp"],
    },
    alternates: {
        canonical: "/vps/windows",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};


const Windows = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/vps"><span className="m-1 text-blue-600">سرویس ها</span></Link>/<span className="m-1">سرور مجازی ویندوز</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-lg text-justify md:text-2xl text-gray-800">سرور مجازی ویندوز (Windows VPS) با دسترسی ریموت، پایدار و سریع</h1>
                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg text-justify md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 gap-7 md:gap-0">
                                <Services category="windows" />
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            سرور مجازی ویندوز، راه‌حلی قدرتمند برای کسانی است که نیاز به محیطی با سیستم‌عامل Windows دارند اما نمی‌خواهند هزینه‌ی بالای خرید سرور فیزیکی را پرداخت کنند. در VPS Bazaar، ما سرورهای ویندوزی را با آخرین نسخه‌های سیستم‌عامل، منابع اختصاصی، و دسترسی کامل Remote Desktop (RDP) ارائه می‌دهیم تا کاربران بتوانند بدون محدودیت، به‌صورت ۲۴ ساعته و از هرکجای دنیا به محیط دسکتاپ خود متصل شوند.
                        </p>
                        <p className="mt-3">
                            چه بخواهید نرم‌افزارهای مالی و حسابداری ویندوزی را اجرا کنید، چه با مرورگر و ابزارهای خاص تحت ویندوز کار کنید یا حتی پروژه‌های اتوماسیون و مانیتورینگ راه‌اندازی کنید، سرورهای ویندوزی ما پاسخگوی نیاز شما خواهند بود. همه سرورها روی زیرساخت پایدار و پرسرعت ما اجرا می‌شوند و از لحاظ امنیت، پشتیبانی و قابلیت ارتقاء، استانداردهای حرفه‌ای را رعایت می‌کنند.
                        </p>
                        <p className="mt-3">
                            با سرور مجازی ویندوز از VPS Bazaar، دیگر محدود به دستگاه فیزیکی یا لوکال نیستید؛ هر آن‌چه در یک سیستم ویندوزی نیاز دارید، در محیطی امن، در دسترس شماست.
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
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Flex windows
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر به‌دنبال یک سرور ویندوزی مقرون‌به‌صرفه هستید که نیازهای ابتدایی شما را برآورده کند، سرویس Flex می‌تواند شروع مناسبی باشد. این پلن مخصوص کسانی طراحی شده که قصد دارند نرم‌افزارهای سبک ویندوزی، مرورگر یا ابزارهای اتوماسیون ساده را روی محیطی همیشه روشن و در دسترس اجرا کنند. اتصال Remote Desktop سریع، پایداری مناسب و مصرف بهینه منابع باعث شده تا Flex به انتخابی محبوب برای کاربران تازه‌کار، دانشجویان و پروژه‌های آزمایشی تبدیل شود.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/windows/windows_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/windows/windows_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo windows
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            سرویس Solo مخصوص کاربرانی‌ست که به منابع قوی‌تری برای اجرای نرم‌افزارهای حرفه‌ای ویندوزی نیاز دارند. چه بخواهید یک اپلیکیشن مالی همیشه فعال را روی سرور داشته باشید، چه بخواهید چندین ابزار مختلف را به‌صورت هم‌زمان اجرا کنید، Solo به‌خوبی از پس نیازهای شما برمی‌آید. این پلن برای فریلنسرها، مدیران پروژه، و بیزینس‌های در حال رشد که به یک محیط پایدار و امن ویندوزی نیاز دارند، انتخابی دقیق و کاربردی است.
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
                                            سرویس Pro windows
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            اگر به‌دنبال یک سرور ویندوزی حرفه‌ای با منابع قدرتمند، عملکرد سریع و پایداری بی‌وقفه هستید، سرویس Pro دقیقاً برای شما طراحی شده است. این پلن برای اجرای هم‌زمان چند برنامه سنگین، نرم‌افزارهای تحلیلی، ربات‌های اتوماسیون، یا حتی میزبانی فایل و خدمات از راه دور ایده‌آل است. با دسترسی کامل از طریق RDP و امکان ارتقاء منابع بدون نیاز به مهاجرت، Pro بهترین گزینه برای کاربران حرفه‌ای، شرکت‌ها و پروژه‌های حساس محسوب می‌شود.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/windows/windows_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Windows;