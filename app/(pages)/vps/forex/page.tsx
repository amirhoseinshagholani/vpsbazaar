// import formatNumber from "@/functions/formatNumber";
// import CpuSvg from "@/public/svg/cpuSvg";
// import RamSvg from "@/public/svg/ramSvg";
// import SsdSvg from "@/public/svg/ssdSvg";
// import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";

const Forex = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600 flex gap-2">
                    <Link className="text-blue-600" href="/"><span>خانه</span></Link>/<Link className="text-blue-600" href="/vps"><span>سرور مجازی</span></Link>/<span>سرور مجازی فارکس</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-xl md:text-2xl text-gray-800">
                        سرور مجازی فارکس (Forex VPS) با پینگ پایین و اتصال پایدار
                    </h1>
                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-lg md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 gap-7 md:gap-0">
                                <Services category="forex" />
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            اگر در بازار فارکس فعالیت می‌کنید، حتماً می‌دانید که هر ثانیه می‌تواند سرنوشت یک معامله را تغییر دهد. به همین دلیل، ما در VPS Bazaar سرورهای مجازی ویژه‌ای برای تریدرها فراهم کرده‌ایم که با کمترین پینگ، بالاترین سرعت و بیشترین پایداری، نیازهای شما را در بازارهای بین‌المللی برآورده می‌کنند. این سرورها به‌طور خاص برای اجرای ۲۴ ساعته نرم‌افزارهایی مانند MetaTrader و سایر ابزارهای معاملاتی بهینه شده‌اند تا بدون قطعی و تأخیر، معاملات خود را با آرامش کامل مدیریت کنید.
                        </p>
                        <p className="mt-3">
                            ر طراحی این سرویس‌ها تلاش کرده‌ایم تجربه‌ای حرفه‌ای و بی‌دردسر برای تریدرها فراهم کنیم. سرورهای فارکس ما به بروکرهای معتبر جهانی دسترسی سریع و پایدار دارند و برای اجرای هم‌زمان چند حساب معاملاتی یا ربات‌های خودکار کاملاً مناسب هستند. از آن‌جا که در این سرورها، ترافیک تنها بر اساس دانلود محاسبه می‌شود و آپلود کاملاً رایگان است، کاربران می‌توانند با خیال راحت داده‌های معاملاتی خود را ارسال کنند، بدون اینکه نگران هزینه‌های اضافی باشند.
                        </p>
                        <p className="mt-3">
                            سرورهای مجازی VPS Bazaar از لحاظ منابع سخت‌افزاری قابل ارتقاء هستند. شما می‌توانید در هر زمان و بدون نیاز به انتقال اطلاعات، پلن خود را ارتقاء دهید و منابع سرور را متناسب با رشد فعالیت‌هایتان افزایش دهید. برای کاربرانی که تازه وارد دنیای معاملات شده‌اند، پلن Flex انتخابی اقتصادی و قابل اعتماد است. کسانی که تجربه بیشتری دارند و به منابع پایدارتر نیاز دارند، می‌توانند از پلن Solo استفاده کنند. برای حرفه‌ای‌هایی که اجرای دقیق و بدون وقفه چندین حساب یا ربات را دنبال می‌کنند، پلن Pro بهترین گزینه است.
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
                                            سرویس Flex Forex، انتخابی اقتصادی برای شروع مطمئن در ترید فارکس
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            اگر به‌تازگی وارد دنیای فارکس شده‌اید یا در حال آزمایش استراتژی‌های معاملاتی خود هستید، سرویس Flex یک گزینه‌ی هوشمندانه و مقرون‌به‌صرفه برای شماست. این سرویس با منابع متعادل، امکان اجرای نرم‌افزارهای معاملاتی مانند متاتریدر را در محیطی پایدار و بدون قطعی فراهم می‌کند. برای تریدرهایی که هنوز در مراحل اولیه مسیر حرفه‌ای خود قرار دارند یا قصد دارند ربات‌ها و اکسپرت‌های سبک را آزمایش کنند، Flex می‌تواند نقطه‌ی شروعی امن و اقتصادی باشد.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            <SelectService category="flex" />
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
                                            سرویس Solo Forex، انتخابی حرفه‌ای برای تریدرهای در حال رشد
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg md:w-2/3 mt-3">
                                            برای تریدرهایی که تجربه‌ی اولیه را پشت سر گذاشته‌اند و حالا به‌دنبال منابع بیشتر، عملکرد پایدارتر و فضای کاری گسترده‌تری هستند، سرویس Solo یک انتخاب ایده‌آل است. این پلن برای معامله‌گرانی طراحی شده که در مسیر پیشرفت قرار دارند و می‌خواهند بدون نگرانی از محدودیت‌های سخت‌افزاری، چند حساب معاملاتی، اکسپرت یا نرم‌افزار متاتریدر را به‌صورت هم‌زمان اجرا کنند.
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
                                            سرویس Pro Forex، قدرتی بی‌رقیب برای تریدرهای حرفه‌ای و اسکالپرها
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
                    </div>
                </section>
            </main >
        </>
    )
}

export default Forex;