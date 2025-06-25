import formatNumber from "@/functions/formatNumber";
import CpuSvg from "@/public/svg/cpuSvg";
import RamSvg from "@/public/svg/ramSvg";
import SsdSvg from "@/public/svg/ssdSvg";
import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";

const Services = ({category}:{category:string}) => {
    return (
        <>
            <div dir="ltr" className="col-span-12 md:col-span-4 outline-1 rounded-2xl w-full md:w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                <Link href="#">
                    <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                        نام سرویس: Flex {category ? category : ""}
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
            <div dir="ltr" className="col-span-12 md:col-span-4 outline-1 rounded-2xl w-full md:w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                <Link href="#">
                    <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                        نام سرویس: Solo {category ? category : ""}
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
            <div dir="ltr" className="col-span-12 md:col-span-4 outline-1 rounded-2xl w-full md:w-3/4 outline-blue-600 shadow-lg hover:shadow-2xl hover:bg-gray-100 mx-auto p-5">
                <Link href="#">
                    <h3 dir="rtl" className="vazirfont-bold text-md mb-2 text-nowrap">
                        نام سرویس: Pro {category ? category : ""}
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
        </>
    )
}

export default Services;