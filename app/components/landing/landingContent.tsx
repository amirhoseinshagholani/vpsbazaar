import Image from "next/image";
import Link from "next/link";

const LandingContent = () => {
    return (
        <>
            <div id="" className="bg-[#D7BDE2] h-full mr-10 rounded-r-3xl mt-10">
                <section className="container mx-auto">
                    <div className="p-10 grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 mt-10">
                            <h2 className="text-xl md:text-2xl vazirfont-bold mb-7 text-gray-800">سرور مجازی(VPS) چیست؟</h2>
                            <p className="text-lg vazirfont-regular mb-1 text-justify md:text-right text-gray-600">
                                سرور مجازی یا VPS یک انتخاب هوشمندانه برای کسانی است که به سرعت، امنیت و آزادی عمل در مدیریت وب‌سایت یا اپلیکیشن خود نیاز دارند.
                            </p>
                            <p className="text-lg vazirfont-regular mb-1 text-justify md:text-right text-gray-600">
                                در این نوع میزبانی، یک سرور قدرتمند فیزیکی به چند بخش مستقل تقسیم می‌شود و هر بخش مانند یک سرور اختصاصی برای شما عمل می‌کند. یعنی:
                            </p>
                            <ul className="text-sm md:text-lg  vazirfont-bold mb-3 mt-3 text-gray-700">
                                <li className="mt-1">✅منابع اختصاصی مثل CPU، RAM و فضای ذخیره‌سازی دارید</li>
                                <li className="mt-1">✅دسترسی کامل به سیستم‌عامل و نصب نرم‌افزار دلخواه</li>
                                <li className="mt-1">✅بدون وابستگی به دیگر کاربران سرور</li>
                            </ul>
                            <p className="text-lg text-justify md:text-right vazirfont-regular mb-1 text-gray-600">
                                اگر به دنبال عملکرد پایدارتر و قدرتمندتر از هاست اشتراکی هستید، VPS بهترین انتخاب برای شماست.
                            </p>
                            <div className="text-justify justify-end vazirfont-regular text-gray-700  text-lg w-2/3 mt-3">
                                <Link className=" bg-blue-500  hover:bg-blue-600 text-white p-1 pl-4 pr-3 rounded-l-4xl" href="/vps">شروع کنید</Link>
                            </div>
                        </div>
                        <div className="md:col-span-6 hidden md:block mx-auto">
                            <Image src={"/img/myVps.webp"} alt="myVps" width={500} height={500} />
                        </div>
                    </div>

                    <div className="md:p-10">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center md:gap-2 px-6 py-4 bg-[#2E86C1] rounded-full shadow-lg fluffy-animation">
                                <span className="text-4xl">☁️</span>
                                <h2 className="md:text-2xl vazirfont-bold text-blue-100">
                                    مزایای خرید سرور مجازی از VPS Bazaar
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto p-10 pb-2 md:p-0 md:w-2/3">
                                            پشتیبانی لحظه‌ای ۲۴/۷
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg p-10 pt-0 md:p-0 md:w-2/3 md:mt-3">
                                            تیم پشتیبانی ما به‌صورت شبانه‌روزی آماده کمک به شماست. هر زمان که نیاز به مشاوره یا رفع مشکلی داشتید، می‌توانید روی ما حساب کنید.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/support.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 md:mt-10">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/price.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto p-10 pb-2 md:p-0 md:w-2/3">
                                            قیمت‌ مناسب
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700 p-10 pt-0 md:p-0 mx-auto text-lg md:w-2/3 md:mt-3">
                                            ما تضمین می‌کنیم که سرویس‌های با کیفیت خود را با مناسب‌ترین قیمت‌ها ارائه دهیم. در VPS Bazaar بهترین راهکارهای میزبانی را بدون نیاز به پرداخت هزینه‌های گزاف خواهید داشت.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 md:mt-10">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto p-10 pb-2 md:p-0 md:w-2/3">
                                            سرورهای پرسرعت و امن
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700 p-10 pt-0 md:p-0 mx-auto text-lg md:w-2/3 md:mt-3">
                                            سرورهای ما از آخرین فناوری‌ها بهره می‌برند تا سرعت، امنیت و پایداری بالایی را برای کسب‌وکار شما فراهم کنند. با ما می‌توانید از آپتایم ۹۹.۹٪ لذت ببرید.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/server.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 md:mt-10">
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/update.webp"} alt="support" width={500} height={500} />
                            </div>
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto p-10 pb-2 md:p-0 md:w-2/3">
                                            قابلیت ارتقاء آسان
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700 p-10 pt-0 md:p-0 mx-auto text-lg md:w-2/3 md:mt-3">
                                            کسب‌وکار شما در حال رشد است؟ به‌راحتی می‌توانید منابع خود را با چند کلیک ارتقاء دهید و با خیالی آسوده به مسیر خود ادامه دهید.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 md:mt-10">
                            <div className="col-span-12 md:col-span-6 flex items-center">
                                <div className="flex justify-center">
                                    <div className="mx-auto w-fit">
                                        <h3 className="vazirfont-bold text-blue-700 text-lg md:text-2xl mx-auto p-10 pb-2 md:p-0 md:w-2/3">
                                            تجربه کاربری آسان
                                        </h3>
                                        <p className="text-justify vazirfont-regular text-gray-700 p-10 pt-0 md:p-0 mx-auto text-lg md:w-2/3 md:mt-3">
                                            پنل مدیریتی ساده و کاربرپسند ما به شما این امکان را می‌دهد که به‌راحتی سرور خود را مدیریت کنید.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 hidden md:block">
                                <Image src={"/img/experience.webp"} alt="support" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingContent;