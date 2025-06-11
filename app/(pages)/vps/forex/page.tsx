import formatNumber from "@/functions/formatNumber";
import CpuSvg from "@/public/svg/cpuSvg";
import RamSvg from "@/public/svg/ramSvg";
import SsdSvg from "@/public/svg/ssdSvg";
import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
    return (
        <>
            <div className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600 flex gap-2">
                    <Link className="text-blue-600" href="/"><span>خانه</span></Link>/<Link className="text-blue-600" href="/vps"><span>سرور مجازی</span></Link>/<span>سرور مجازی فارکس (Forex VPS) با پینگ پایین و اتصال پایدار</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">
                        سرور مجازی فارکس (Forex VPS) با پینگ پایین و اتصال پایدار
                    </h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10">
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

                    <div className="md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 g-3">

                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2 text-nowrap">
                                            نام سرویس: Flex Forex
                                        </h3>
                                        <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><CpuSvg /></span>
                                            <span>CPU : 1 core</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><RamSvg /></span>
                                            <span>RAM : 1G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><SsdSvg /></span>
                                            <span>Disk : 25G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><TrafficSvg /></span>
                                            <span>Traffic : 100G</span>
                                        </div>
                                        <div dir="rtl" className="mx-auto vazirfont-bold text-lg text-black mt-5">
                                            <span className="text-gray-700">{formatNumber(225000)}</span><span className="text-gray-700"> تومان </span>
                                        </div>
                                        <div className="mt-4 vazirfont-medium text-gray-500">
                                            <hr />
                                        </div>
                                        <div className="mt-3 gap-2  vazirfont-medium text-gray-500">

                                            <div className="">پشتیبانی رایگان</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2 text-nowrap">
                                            نام سرویس: Solo Forex
                                        </h3>
                                        <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><CpuSvg /></span>
                                            <span>CPU : 1 core</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><RamSvg /></span>
                                            <span>RAM : 2G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><SsdSvg /></span>
                                            <span>Disk : 30G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><TrafficSvg /></span>
                                            <span>Traffic : 100G</span>
                                        </div>
                                        <div dir="rtl" className="mx-auto vazirfont-bold text-lg text-black mt-5">
                                            <span className="text-gray-700">{formatNumber(275000)}</span><span className="text-gray-700"> تومان </span>
                                        </div>
                                        <div className="mt-4 vazirfont-medium text-gray-500">
                                            <hr />
                                        </div>
                                        <div className="mt-3 gap-2  vazirfont-medium text-gray-500">

                                            <div className="">پشتیبانی رایگان</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2 text-nowrap">
                                            نام سرویس: Pro Forex
                                        </h3>
                                        <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><CpuSvg /></span>
                                            <span>CPU : 2 core</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><RamSvg /></span>
                                            <span>RAM : 4G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><SsdSvg /></span>
                                            <span>Disk : 40G</span>
                                        </div>
                                        <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                            <span><TrafficSvg /></span>
                                            <span>Traffic : 100G</span>
                                        </div>
                                        <div dir="rtl" className="mx-auto vazirfont-bold text-lg text-black mt-5">
                                            <span className="text-gray-700">{formatNumber(465000)}</span><span className="text-gray-700"> تومان </span>
                                        </div>
                                        <div className="mt-4 vazirfont-medium text-gray-500">
                                            <hr />
                                        </div>
                                        <div className="mt-3 gap-2  vazirfont-medium text-gray-500">

                                            <div className="">پشتیبانی رایگان</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    معرفی سرویس ها
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                                            سرویس Flex Forex، انتخابی اقتصادی برای شروع مطمئن در ترید فارکس
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            اگر به‌تازگی وارد دنیای فارکس شده‌اید یا در حال آزمایش استراتژی‌های معاملاتی خود هستید، سرویس Flex یک گزینه‌ی هوشمندانه و مقرون‌به‌صرفه برای شماست. این سرویس با منابع متعادل، امکان اجرای نرم‌افزارهای معاملاتی مانند متاتریدر را در محیطی پایدار و بدون قطعی فراهم می‌کند. برای تریدرهایی که هنوز در مراحل اولیه مسیر حرفه‌ای خود قرار دارند یا قصد دارند ربات‌ها و اکسپرت‌های سبک را آزمایش کنند، Flex می‌تواند نقطه‌ی شروعی امن و اقتصادی باشد.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href="#">سفارش دهید</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-6 flex">
                                <Image className="mx-auto" src={"/img/flex-service.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-6">
                                <Image src={"/img/midd-service.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                                            سرویس Solo Forex، انتخابی حرفه‌ای برای تریدرهای در حال رشد
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            برای تریدرهایی که تجربه‌ی اولیه را پشت سر گذاشته‌اند و حالا به‌دنبال منابع بیشتر، عملکرد پایدارتر و فضای کاری گسترده‌تری هستند، سرویس Solo یک انتخاب ایده‌آل است. این پلن برای معامله‌گرانی طراحی شده که در مسیر پیشرفت قرار دارند و می‌خواهند بدون نگرانی از محدودیت‌های سخت‌افزاری، چند حساب معاملاتی، اکسپرت یا نرم‌افزار متاتریدر را به‌صورت هم‌زمان اجرا کنند.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href="#">سفارش دهید</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                                            سرویس Pro Forex، قدرتی بی‌رقیب برای تریدرهای حرفه‌ای و اسکالپرها
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            اگر در دنیای ترید حرفه‌ای فعالیت می‌کنید و کوچک‌ترین تأخیر یا ناپایداری می‌تواند برایتان گران تمام شود، سرویس Pro دقیقاً همان زیرساختی است که به آن نیاز دارید. این پلن با منابع قدرتمند و پایدار، به‌گونه‌ای طراحی شده که پاسخگوی اجرای هم‌زمان چند متاتریدر، ربات‌های معاملاتی پیشرفته، ابزارهای تحلیلی سنگین و استراتژی‌های اسکالپینگ با حساسیت بالا باشد. اگر به دنبال یک سرور مجازی واقعی برای معاملات جدی، مدیریت پیشرفته ریسک و اجرای دقیق استراتژی‌های روز دنیا هستید، سرویس Pro انتخابی حرفه‌ای و بی‌رقیب برای شماست.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href="#">سفارش دهید</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <Image src={"/img/pro-service.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Services;