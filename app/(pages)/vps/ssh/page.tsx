import Link from "next/link";
import Image from "next/image";
import Services from "../components/services";
import SelectService from "../components/selectService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "خرید سرور مجازی با دسترسی SSH | Flex SSH، Flex Solo و Flex Pro | VPSBazaar",
    description: "خرید VPS با دسترسی کامل SSH برای مدیریت حرفه‌ای سرور، اجرای دستورات لینوکسی و خودکارسازی فرآیندها. سرویس‌های Flex SSH، Flex Solo و Flex Pro مناسب توسعه‌دهندگان و مدیران سرور.",
    keywords: "سرور مجازی SSH, خرید VPS با SSH, سرور لینوکس با دسترسی روت, Flex SSH, Solo SSH, Pro SSH, اتصال SSH, ترمینال لینوکس, مدیریت سرور, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/vps/ssh",
        title: "خرید سرور مجازی با دسترسی SSH | Flex SSH، Solo SSH و Pro SSH | VPSBazaar",
        description: "سرور مجازی لینوکس با دسترسی SSH و پشتیبانی کامل از دستورات ترمینال. مناسب برای اسکریپت‌نویسی، مدیریت سرور و توسعه‌ی پروژه‌های تحت CLI.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/ssh/og-ssh-vps.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - سرور مجازی با SSH",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "خرید سرور مجازی با دسترسی SSH | Flex SSH، Solo SSH و Pro SSH | VPSBazaar",
        description: "VPS با دسترسی کامل SSH برای مدیریت، توسعه و اجرای دستورات لینوکس. گزینه‌ای عالی برای حرفه‌ای‌ها.",
        images: ["https://vpsbazaar.cloud/img/og-ssh-vps.webp"],
    },
    alternates: {
        canonical: "/vps/ssh",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};


const Ssh = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/vps"><span className="m-1 text-blue-600">سرویس ها</span></Link>/<span className="m-1">سرور مجازی با دسترسی ssh</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-lg text-justify md:text-2xl text-gray-800">سرور مجازی با دسترسی SSH؛ کنترل کامل، امنیت بالا و آزادی عمل در مدیریت سرور</h1>
                    <div className="mt-10 md:mt-20">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-blue-100 rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="text-nowrap text-lg  md:text-2xl vazirfont-bold text-blue-800">
                                    خدمات ما در VPS Bazaar
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 mt-10 gap-7 md:gap-0">
                                <Services category="ssh" />
                            </div>
                        </div>
                    </div>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            ما سرورهای مجازی با دسترسی کامل SSH ارائه می‌دهیم تا کاربران بتوانند از راه دور و با بیشترین سطح کنترل، تمام تنظیمات و فرایندهای سرور خود را مدیریت کنند. این نوع دسترسی، برای توسعه‌دهندگان، مدیران سیستم و علاقه‌مندان به لینوکس، یک محیط امن و کاربردی برای اجرای دستورات، نصب نرم‌افزار، مدیریت فایل‌ها و مانیتورینگ لحظه‌ای فراهم می‌کند.
                        </p>
                        <p className="mt-3">
                            با استفاده از SSH، دیگر محدود به پنل‌های گرافیکی نیستید و می‌توانید از طریق ترمینال، به صورت مستقیم با سرور خود ارتباط برقرار کنید. این شیوه نه‌تنها سرعت و دقت در اجرای فرامین را افزایش می‌دهد، بلکه امنیت بیشتری نیز در مقایسه با روش‌های مرسوم به همراه دارد. به همین دلیل، سرور مجازی با SSH انتخاب اول برنامه‌نویسان، DevOpsها و کسانی است که به محیط خط فرمان و تنظیمات سطح پایین‌تر علاقه‌مندند.
                        </p>
                        <p className="mt-3">
                            زیرساخت‌های قدرتمند VPS Bazaar به شما این امکان را می‌دهد تا تجربه‌ای سریع، پایدار و بدون محدودیت از کار با SSH داشته باشید. فرقی نمی‌کند که در حال نصب پکیج‌های سفارشی، اجرای اسکریپت‌های خودکار، یا راه‌اندازی سرویس‌های وب باشید؛ با دسترسی SSH، همه چیز در کنترل شماست.
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
                                            سرویس Flex ssh
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            سرویس Flex انتخابی مناسب برای کاربران تازه‌کار، دانشجویان یا برنامه‌نویسانی است که در آغاز مسیر یادگیری کار با SSH و مدیریت سرورهای لینوکسی هستند. این پلن با منابع متعادل، قیمت اقتصادی و دسترسی کامل SSH، محیطی ساده و قابل اطمینان برای نصب ابزارها، اجرای اسکریپت‌ها و انجام تنظیمات پایه فراهم می‌کند. اگر می‌خواهید اولین تجربه‌ی خود را در دنیای مدیریت از طریق ترمینال شروع کنید، Flex گزینه‌ای عالی برای شروع امن و بدون پیچیدگی است.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="flex" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block flex">
                                <Image className="mx-auto" src={"/img/ssh/ssh_flex.webp"} alt="support" width={400} height={400} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-20">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/ssh/ssh_solo.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-full md:w-2/3">
                                            سرویس Solo ssh
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            برای کاربران نیمه‌حرفه‌ای یا مدیران پروژه‌هایی که نیاز به منابع بیشتر و عملکرد باثبات‌تری دارند، سرویس Solo پاسخی دقیق به این نیازهاست. با دسترسی کامل SSH و منابع اختصاصی بیشتر، این پلن امکان اجرای برنامه‌های سمت سرور، راه‌اندازی اپلیکیشن‌های تحت Node.js یا Python و مدیریت بهتر تنظیمات امنیتی را فراهم می‌کند. اگر در حال توسعه یا نگهداری سرویس‌هایی با ترافیک متوسط هستید، Solo آزادی عملی بیشتر همراه با پایداری بالاتر در اختیارتان می‌گذارد.
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
                                            سرویس Pro ssh
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            برای توسعه‌دهندگان حرفه‌ای، تیم‌های DevOps و کسانی که به‌دنبال محیطی قدرتمند برای مدیریت چند سرویس، اتوماسیون وظایف و اجرای پروژه‌های سنگین‌تر هستند، سرویس Pro انتخابی بی‌نقص است. با منابع بالا، عملکرد پایدار و دسترسی کامل از طریق SSH، این پلن امکان استقرار سریع برنامه‌ها، مانیتورینگ دائم، بهینه‌سازی سیستم و اعمال سیاست‌های امنیتی پیشرفته را فراهم می‌کند. اگر به‌دنبال تجربه‌ای حرفه‌ای و بدون محدودیت در محیط لینوکسی هستید، سرویس Pro دقیقاً همان چیزی‌ست که به دنبالش بودید.
                                        </p>
                                        <div className="text-justify justify-end vazirfont-regular text-gray-700  mx-auto text-lg w-full md:w-2/3 mt-3">
                                            <SelectService category="pro" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/ssh/ssh_pro.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Ssh;