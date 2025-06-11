import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => {
    return (
        <>
            <div className="h-fit p-10">
                <div className="container mx-auto">
                    <div className="text-white vazirfont-medium text-sm">
                        خانه
                    </div>
                    <div className="grid grid-cols-12 flex items-center">
                        <div className="col-span-6">
                            <div className="vazirfont-bold text-lg flex gap-1 text-white">
                                <span>✔️</span>
                                <h1 className="text-[16px]">
                                    ارایه سرورهای مجازی با کیفیت بالا و قیمت مناسب
                                </h1>
                            </div>
                            <div className="vazirfont-bold text-lg text-white mt-5 gap-1">
                                <span>✔️</span>
                                <span>انتخاب سرور مناسب، اولین قدم برای ایده های بزرگ</span>
                            </div>
                            <div className="vazirfont-bold text-2xl mt-5 text-white">
                                <span>✔️</span>
                                <span>ما اینجاییم تا رویای دیجیتال شما به واقعیت تبدیل شود</span>
                            </div>
                            <div className="mt-10 flex">
                                <Link className="mx-auto" href="/vps">
                                    <span className="bg-white hover:bg-gray-200 text-black vazirfont-bold pr-5 pl-5 pt-2 pb-2 rounded-3xl">✔️ مشاهده سرویس ها</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-6 flex justify-end">
                            <Image src={"/img/vps.webp"} alt="vps" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingHeader;