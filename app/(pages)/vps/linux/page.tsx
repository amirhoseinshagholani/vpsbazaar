import formatNumber from "@/functions/formatNumber";
import CpuSvg from "@/public/svg/cpuSvg";
import RamSvg from "@/public/svg/ramSvg";
import SsdSvg from "@/public/svg/ssdSvg";
import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";
import Image from "next/image";

const Linux = () => {
    return (
        <>
            <div className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <span className="m-1">خانه</span>/<span className="m-1">سرویس ها</span>/<span className="m-1">سرور مجازی لینوکس</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">سرور مجازی لینوکس (Linux VPS) با دسترسی کامل، منابع قابل ارتقاء و عملکرد پایدار</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10">
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

                    <div className="md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 g-3">

                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2  text-nowrap">
                                            نام سرویس: Flex linux
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
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2  text-nowrap">
                                            نام سرویس: Solo linux
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
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2  text-nowrap">
                                            نام سرویس: Pro linux
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
                                            سرویس Flex linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            اگر تازه وارد دنیای لینوکس شده‌اید یا به دنبال محیطی سبک و اقتصادی برای تمرین و آزمایش اسکریپت‌ها و دستورات هستید، سرویس Flex می‌تواند گزینه‌ای عالی برای شروع باشد. این پلن با منابع متعادل، بستری ساده و کاربردی را فراهم می‌کند تا بتوانید انواع توزیع‌های لینوکسی را نصب و بدون دغدغه تست کنید. برای دانشجویان، علاقه‌مندان به DevOps و کاربرانی که قصد یادگیری مدیریت سرور با لینوکس را دارند، Flex شروعی ایمن، کم‌هزینه و مؤثر است.
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
                                            سرویس Solo linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            وقتی پروژه‌های شما بزرگ‌تر می‌شوند و نیاز به منابع بیشتری برای اجرای سرویس‌ها، دیتابیس‌ها یا فرآیندهای بک‌اند پیدا می‌کنید، سرویس Solo پاسخگوی نیاز شماست. این سرور برای توسعه‌دهنده‌هایی طراحی شده که با ابزارهای لینوکسی کار می‌کنند، Git را به‌صورت حرفه‌ای استفاده می‌کنند، و قصد دارند محیطی پایدار برای اجرای پروژه‌های واقعی داشته باشند. چه بخواهید Node.js، Python، PHP یا سایر زبان‌های لینوکسی را اجرا کنید، Solo با منابع قدرتمندتر، آزادی بیشتری به شما می‌دهد تا اپلیکیشن‌های خود را مدیریت و توسعه دهید.
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
                                            سرویس Pro linux
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            اگر از کاربران حرفه‌ای لینوکس هستید، اسکریپت‌های پیچیده اجرا می‌کنید، چندین سرویس هم‌زمان روی سرورتان دارید یا به دنبال یک محیط مطمئن برای هاستینگ سطح بالا هستید، سرویس Pro برای شما ساخته شده. این پلن با منابع پیشرفته، عملکرد پایدار و سرعت بالا، امکان مدیریت حرفه‌ای پروژه‌های لینوکسی را فراهم می‌کند. از اجرای کانتینرهای Docker گرفته تا مدیریت سرورهای تولیدی برای مشتریان، در سرویس Pro هیچ محدودیتی برای استفاده از قدرت لینوکس نخواهید داشت. محیطی امن، سریع و همیشه در دسترس برای کسانی که به کیفیت اهمیت می‌دهند.
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

export default Linux;