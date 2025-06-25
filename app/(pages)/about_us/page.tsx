import Link from "next/link";
import Image from "next/image";

const About_us = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">درباره ما</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-xl md:text-2xl text-gray-800">درباره ما - اهداف ما در VPS Bazaar</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10 grid grid-cols-12">
                        <div className="mt-3 col-span-12 md:col-span-8 mt-10 md:mt-20">
                            <p className="h-fit text-justify">
                                ما در VPSBazaar گردهم آمده‌ایم تا فضایی دوستانه و حرفه‌ای برای کاربران و مشترکین خود ایجاد کنیم. وی پی اس بازار کار خود را از سال 1403 با هدف کمک به مشترکین در جهت تهیه سرورهای مجازی مطمئن و با کیفیت آغاز کرد.
                            </p>
                            <p className="h-fit mt-5 text-justify">
                                هدف ما از روز نخست، کمک به مشترکین در ارائه راه‌حل‌های زیرساختی مطمئن و ایجاد تجربه‌ای متفاوت در زمینه فروش سرورهای مجازی بوده است. ما متعهدیم که خدمات باکیفیت را با قیمت‌های مقرون‌به‌صرفه ارائه دهیم تا همه بتوانند به بهترین زیرساخت‌های مجازی دسترسی داشته باشند. فاز اول فعالیت ما، بر ارائه VPS‌های داخلی متمرکز بوده است؛ اما در فازهای آتی، برنامه داریم تا سرویس‌های بین‌المللی را نیز اضافه کنیم و نیازهای متنوع کاربرانمان را در سطحی گسترده‌تر پوشش دهیم. همچنین، به زودی سرورهای اختصاصی را نیز فراهم خواهیم کرد تا مشترکین بتوانند به منابع اختصاصی خود دسترسی پیدا کنند و از توان و امنیت بیشتر در پروژه‌های خود بهره‌مند شوند. در ادامه، با ارائه خدمات هاستینگ کامل‌تر در کنار شما خواهیم بود تا تمامی نیازهای میزبانی و زیرساختی شما را با کیفیتی ممتاز و پشتیبانی مداوم پاسخ دهیم. پشتیبانی ۲۴ ساعته و تضمین آپتایم ۹۹ درصدی از اولویت‌های اصلی ماست. همکاران ما به صورت شبانه‌روزی آماده خدمت‌رسانی هستند و تمامی تلاش خود را به کار می‌گیرند تا تجربه‌ای رضایت‌بخش و مطمئن را برای شما فراهم آورند. به VPSBazaar بپیوندید و تجربه‌ای حرفه‌ای، کارآمد و مطمئن از خدمات سرور مجازی و میزبانی وب را تجربه کنید
                            </p>
                        </div>
                        <div className="col-span-4 flex h-fit hidden md:block">
                            <Image className="items-center mx-auto" src="/img/about_us.webp" width={500} height={500} alt="About Us" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About_us;