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
                <div className="text-sm vazirfont-regular text-gray-600">
                    <span className="m-1">خانه</span>/<span className="m-1">سرور مجازی</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">سرور مجازی</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10">
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
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 g-3">

                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2">
                                            نام سرویس: Flex
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
                                            <div>پشتیبانی رایگان</div>
                                            <div className="mt-2">لوکیشن: ایران</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2">
                                            نام سرویس: Solo
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
                                            <div>پشتیبانی رایگان</div>
                                            <div className="mt-2">لوکیشن: ایران</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2">
                                            نام سرویس: Pro
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
                                            <div>پشتیبانی رایگان</div>
                                            <div className="mt-2">لوکیشن: ایران</div>
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
                                            سرویس Flex
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            سرویس Flex گزینه‌ای ایده‌آل برای کاربران تازه‌کار، دانشجویان و علاقه‌مندان به یادگیری سرورهای مجازی است. اگر به‌تازگی وارد دنیای VPS شده‌اید و به دنبال راهی مقرون‌به‌صرفه برای آزمون، یادگیری یا اجرای پروژه‌های سبک هستید، این سرویس دقیقاً برای شما طراحی شده. با منابع متعادل و قیمت مناسب، Flex بهترین نقطه‌ی شروع برای تجربه‌ی دنیای سرورهاست.
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
                                            سرویس Solo
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            سرویس solo مناسب بیزینس‌های سطح متوسط است که به منابع بیشتری نیاز دارند و می‌خواهند از قابلیت‌های کامل‌تر برای مدیریت کسب‌وکار آنلاین خود بهره ببرند. این سرویس برای مشاغلی که در حال رشد و گسترش هستند، انتخابی ایده‌آل محسوب می‌شود.
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
                                            سرویس Pro
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            سرویس pro برای کاربران و کسب‌وکارهایی طراحی شده است که به منابع بیشتری نیاز دارند. این سرویس با منابع بهینه، پاسخگوی نیازهای کاربران حرفه‌ای است که مایلند به مدیریت وب‌سایت‌ها، نرم‌افزارها و اپلیکیشن‌های خود بپردازند، بدون نیاز به زیرساخت‌های پیچیده و سنگین.
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