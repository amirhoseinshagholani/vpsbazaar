import formatNumber from "@/functions/formatNumber";
import CpuSvg from "@/public/svg/cpuSvg";
import RamSvg from "@/public/svg/ramSvg";
import SsdSvg from "@/public/svg/ssdSvg";
import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";
import Image from "next/image";

const Windows = () => {
    return (
        <>
            <div className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <span className="m-1">خانه</span>/<span className="m-1">سرویس ها</span>/<span className="m-1">سرور مجازی وردپرس</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">سرور مجازی وردپرس (WordPress VPS) برای وب‌سایت‌های سریع، امن و همیشه در دسترس</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10">
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

                    <div className="md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 g-3">

                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                                            نام سرویس: Flex wordPress
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
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                                            نام سرویس: Solo wordPress
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
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                                            نام سرویس: Pro wordPress
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
                                            سرویس Flex wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            سرویس Flex برای کسانی طراحی شده که به‌تازگی وارد دنیای وردپرس شده‌اند یا وب‌سایت‌های سبک، شخصی یا آموزشی راه‌اندازی کرده‌اند. این پلن منابع مناسبی برای میزبانی یک سایت وردپرسی با ترافیک کم تا متوسط فراهم می‌کند و در عین حال امکان ارتقاء آسان را نیز در اختیار شما قرار می‌دهد. اگر به‌دنبال یک نقطه شروع اقتصادی با امکانات پایه و عملکرد پایدار هستید، Flex انتخابی منطقی و مطمئن است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href="#">سفارش دهید</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-6 flex">
                                <Image className="mx-auto" src={"/img/wordpress/wordpress_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="col-span-6">
                                <Image src={"/img/wordpress/wordpress_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                                            سرویس Solo wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            اگر سایت وردپرسی شما ترافیک بیشتری دارد، از افزونه‌های پیشرفته استفاده می‌کند یا فروشگاه اینترنتی ووکامرس روی آن فعال است، سرویس Solo برای شما طراحی شده. این پلن با منابع بیشتر و عملکرد قدرتمندتر، می‌تواند چندین افزونه بهینه‌ساز، سیستم کش حرفه‌ای و حتی سامانه‌های ایمیل یا گزارش‌گیری را بدون افت کیفیت اجرا کند. Solo انتخاب مناسبی برای سایت‌های در حال رشد و کسب‌وکارهایی است که به سرعت و پایداری اهمیت می‌دهند.
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
                                            سرویس Pro wordPress
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            برای وب‌سایت‌های پرترافیک، فروشگاه‌های بزرگ، یا کسب‌وکارهایی که امنیت، سرعت بارگذاری و انعطاف‌پذیری بالا برایشان حیاتی‌ست، سرویس Pro طراحی شده است. این پلن با منابع اختصاصی قوی، اجرای بی‌وقفه، و سازگاری کامل با بهینه‌سازهای وردپرس، پاسخگوی نیاز کاربران حرفه‌ای است. با Pro می‌توانید وب‌سایتی با سرعت فوق‌العاده، امنیت سطح بالا و زیرساخت قابل توسعه داشته باشید که همیشه آماده پاسخ‌گویی به کاربران شماست.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                                            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href="#">سفارش دهید</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <Image src={"/img/wordpress/wordpress_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Windows;