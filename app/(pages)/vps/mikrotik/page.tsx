// import formatNumber from "@/functions/formatNumber";
// import CpuSvg from "@/public/svg/cpuSvg";
// import RamSvg from "@/public/svg/ramSvg";
// import SsdSvg from "@/public/svg/ssdSvg";
// import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";

const Mikrotik = () => {
    return (
        <>
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
                            <div className="grid grid-cols-12 mt-10 gap-7 md:gap-0">
                                <Services category="mikrotik" />
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

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Flex mikrotik
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
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/mikrotik/mikrotik_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo mikrotik
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
                                            سرویس Pro mikrotik
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            برای متخصصان شبکه، ISPها یا شرکت‌هایی که به دنبال اجرای سناریوهای سنگین و مدیریت هم‌زمان چند شبکه یا زیرساخت هستند، سرویس Pro بهترین گزینه موجود است. این پلن با منابع قدرتمند و اتصال پایدار، امکان اجرای حرفه‌ای‌ترین تنظیمات را فراهم می‌کند. اگر نیاز به راه‌اندازی چندین تونل VPN، مانیتورینگ دائمی شبکه، تنظیمات پیچیده فایروال یا اعمال سیاست‌های دقیق مدیریت پهنای باند دارید، Pro پاسخی مطمئن به نیازهای شما خواهد بود. این سرویس، تجربه‌ای کامل از قدرت MikroTik در فضای ابری است.

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
                    </div>
                </section>
            </div >
        </>
    )
}

export default Mikrotik;