import formatNumber from "@/functions/formatNumber";
import CpuSvg from "@/public/svg/cpuSvg";
import RamSvg from "@/public/svg/ramSvg";
import SsdSvg from "@/public/svg/ssdSvg";
import TrafficSvg from "@/public/svg/trafficSvg";
import Link from "next/link";

const Services = ({ category }: { category: string }) => {
    return (
        <>
            {
                category == 'windows' && (
                    <>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="ultra" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Ultra {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 6 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 8G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 100G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(759000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/ultra">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        
                    </>
                )
            }
            {
                category == 'linux' && (
                    <>
                        <div id="flex" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Flex {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 1G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 25G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(199000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/flex">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2  vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == 'forex' && (
                    <>
                        <div id="flex" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Flex {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 1G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 25G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(199000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/flex">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2  vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == 'wordpress' && (
                    <>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == 'mikrotik' && (
                    <>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == 'economy' && (
                    <>
                        <div id="flex" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Flex {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 1G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 25G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(199000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/flex">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2  vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="solo" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == 'professional' && (
                    <>
                        <div id="pro" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro+" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    <span></span><span dir="ltr">Pro+ {category ? category : ""}</span>
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 4 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 6G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 60G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(579000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro-plus">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="ultra" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Ultra {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 6 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 8G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 100G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(759000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/ultra">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="max" dir="ltr" className="min-w-[270px] max-w-sm bg-white rounded-2xl shadow-lg p-5 bg-gradient-to-t from-gray-300 to-white mt-5 outline-1 rounded-2xl outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Max {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 8 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 8G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 200G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(999000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/max">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                category == '' && (
                    <>
                        <div id="flex" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Flex {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 1G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 25G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(199000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/flex">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2  vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="solo" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Solo {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 1 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 2G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 30G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(259000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/solo">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Pro {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 2 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 4G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 40G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(399000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="pro+" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    <span></span><span dir="ltr">Pro+ {category ? category : ""}</span>
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 4 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 6G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 60G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(579000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/pro-plus">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="ultra" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Ultra {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 6 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 8G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 100G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(759000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/ultra">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                        <div id="max" dir="ltr" className="col-span-12 bg-gradient-to-t from-gray-300 to-white mt-5 md:col-span-2 outline-1 rounded-2xl w-full md:w-11/12 outline-blue-600 shadow-lg mx-auto p-5">
                            <div>
                                <h3 dir="rtl" className="vazirfont-bold text-sm mb-2 text-nowrap">
                                    Max {category ? category : ""}
                                </h3>
                                <div className="mt-5 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><CpuSvg /></span>
                                    <span className="text-sm items-center flex">CPU : 8 core</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><RamSvg /></span>
                                    <span className="text-sm items-center flex">RAM : 8G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><SsdSvg /></span>
                                    <span className="text-sm items-center flex">Disk : 200G</span>
                                </div>
                                <div className="mt-3 flex gap-2 vazirfont-medium text-gray-500">
                                    <span><TrafficSvg /></span>
                                    <span className="text-sm items-center flex">Traffic : 100G</span>
                                </div>
                                <div dir="rtl" className="mx-auto vazirfont-bold text-xs text-nowrap text-black mt-5">
                                    <span className="text-gray-700">ماهانه: {formatNumber(999000)}</span><span className="text-gray-700"> تومان </span>
                                </div>
                                <div className="mx-auto vazirfont-bold text-md text-nowrap text-white mt-7 mb-7">
                                    <Link className="googleTag bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl p-2 pr-5 pl-5 rounded-lg" href="https://my.vpsbazaar.cloud/index.php?rp=/store/vps/max">ثبت سفارش</Link>
                                </div>
                                <div className="mt-4 vazirfont-medium text-gray-500">
                                    <hr />
                                </div>
                                <div className="mt-3 gap-2 vazirfont-medium text-gray-600 text-sm">
                                    <div>پشتیبانی رایگان</div>
                                    <div className="mt-2">لوکیشن: ایران</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Services;