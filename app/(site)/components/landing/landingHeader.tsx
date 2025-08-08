import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => {
    return (
        <>
            <div className="h-fit p-5 md:p-10">
                <div className="container mx-auto">
                    <div className="text-sm vazirfont-regular text-gray-100">
                        خانه
                    </div>
                    <div className="grid grid-cols-12 flex items-center">
                        <div className="col-span-12 md:col-span-6">
                            <div className="vazirfont-bold text-nowrap md:text-lg flex gap-1 text-white">
                                <span>✔️</span>
                                <h1 className="text-[16px] text-nowrap">
                                    ارایه سرورهای مجازی با کیفیت بالا و قیمت مناسب
                                </h1>
                            </div>
                            <div className="vazirfont-bold text-nowrap md:text-lg text-white mt-5 gap-1">
                                <span>✔️</span>
                                <span>انتخاب سرور مناسب، اولین قدم برای ایده های بزرگ</span>
                            </div>
                            <div className="vazirfont-bold text-nowrap md:text-2xl mt-5 text-white">
                                <span>✔️</span>
                                <span>ما اینجاییم تا رویای دیجیتال شما به واقعیت تبدیل شود</span>
                            </div>
                            <div className="mt-10 flex">
                                <Link  className="mx-auto" href="/vps">
                                    <span id="showService" className="bg-white text-black vazirfont-bold pr-5 pl-5 pt-2 pb-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2 hover:bg-gray-200 inline-block">
                                        ✔️ مشاهده سرویس‌ها
                                    </span>
                                </Link>
                            </div>


                        </div>
                        <div className="md:col-span-6 flex justify-end">
                            <Image className="hidden md:block" src={"/img/vps.webp"} alt="vps" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingHeader;