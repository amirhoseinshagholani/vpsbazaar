import Link from "next/link";
import Image from "next/image";

const About_us = () => {
    return (
        <>
            <div className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <span className="m-1">خانه</span>/<span className="m-1">حریم خصوصی کاربران</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-3xl text-gray-800">حریم خصوصی کاربران</h1>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10 grid grid-cols-12">
                        <div className="mt-3 col-span-8 mt-20">
                            <p className="h-fit text-gray-500">
                                در vpsbazaar، حفظ حریم خصوصی شما برای ما اهمیت بالایی دارد. در این صفحه توضیح می‌دهیم که چه اطلاعاتی از شما جمع‌آوری می‌شود، چگونه از آن‌ها استفاده می‌کنیم و چه حقوقی دارید.
                            </p>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">اطلاعاتی که جمع‌آوری می‌کنیم:</h2>
                            <ul className="text-gray-500">
                                <li>نام، ایمیل، شماره تماس، و سایر اطلاعات ثبت‌نامی</li>
                                <li>آدرس IP، نوع مرورگر و فعالیت‌های انجام‌شده در سایت</li>
                                <li>اطلاعات مربوط به سفارشات، پرداخت‌ها و استفاده از سرویس‌ها</li>
                            </ul>
                            <h2 className="mt-5 mb-5 vazirfont-bold  text-xl">هدف از جمع‌آوری اطلاعات:</h2>
                            <ul className="text-gray-500">
                                <li>پردازش و مدیریت سفارش‌های شما</li>
                                <li>بهبود کیفیت خدمات و پشتیبانی فنی</li>
                                <li>ارسال اطلاعیه‌ها و فاکتورها</li>
                                <li>رعایت قوانین و مقررات</li>
                            </ul>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">ذخیره‌سازی و امنیت:</h2>
                            <p className="h-fit text-gray-500">
                                اطلاعات شما در سرورهای امن نگهداری شده و ما از روش‌های فنی برای محافظت در برابر دسترسی‌های غیرمجاز استفاده می‌کنیم.
                            </p>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">اشتراک‌گذاری اطلاعات:</h2>
                            <p className="h-fit text-gray-500">
                                اطلاعات شخصی شما تحت هیچ شرایطی به فروش نمی‌رسد. فقط در صورت لزوم و طبق قانون، ممکن است با مراجع ذی‌صلاح به اشتراک گذاشته شود.
                            </p>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">کوکی‌ها (Cookies):</h2>
                            <p className="h-fit text-gray-500">
                                سایت ما از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کند. با استفاده از سایت، با استفاده از کوکی‌ها موافقت می‌کنید.
                            </p>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">حقوق شما:</h2>
                            <p className="h-fit text-gray-500">
                                شما حق دارید درخواست مشاهده، ویرایش یا حذف اطلاعات شخصی خود را داشته باشید. برای این کار کافیست با پشتیبانی ما تماس بگیرید.
                            </p>
                            <h2 className="mt-5 mb-5 vazirfont-bold text-xl">تماس با ما:</h2>
                            <p className="h-fit text-gray-500">
                                در صورت داشتن هرگونه سوال یا درخواست در خصوص حریم خصوصی، از طریق <Link className="text-blue-500" href="/contact_us">فرم تماس</Link> با ما در ارتباط باشید.
                            </p>
                        </div>
                        <div className="col-span-4 flex h-fit">
                            <Image className="items-center mx-auto" src="/img/privacy.webp" width={500} height={500} alt="About Us" />
                        </div>
                    </div>
                    {/* 
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
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2">
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

                                            <div className="">پشتیبانی رایگان</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2">
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

                                            <div className="">پشتیبانی رایگان</div>
                                        </div>
                                    </Link>
                                </div>
                                <div dir="ltr" className="col-span-4 outline-1 rounded-2xl w-1/2 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                                    <Link href="#">
                                        <h3 dir="rtl" className="vazirfont-bold text-xl mb-2">
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
                    </div> */}
                </section>
            </div >
        </>
    )
}

export default About_us;