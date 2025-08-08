import Link from "next/link";

const DesktopHeaderMenu = () => {
    return (
        <>
            <div className="hidden md:block">
                <ul className="flex pt-2">
                    <li>
                        <Link href="/">
                            <div className="text-white flex w-28 text-nowrap justify-center h-full vazirfont-bold  rounded-t-2xl  transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                صفحه اصلی
                            </div>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/vps">
                            <div className="text-white flex w-28 text-nowrap justify-center h-full vazirfont-bold  rounded-t-2xl  transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                سرویس ها
                            </div>
                        </Link>
                        {/* <div className="flex w-28 justify-center h-full vazirfont-bold text-white rounded-t-2xl cursor-pointer transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
                                    سرویس‌ها
                                </div>

                                <ul className="absolute vazirfont-regular text-sm text-gray-700 top-full right-0 w-40 bg-white text-black rounded-b-xl shadow-lg z-50 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top divide-y divide-gray-200">
                                    <li>
                                        <Link href="/vps" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <VpsSvg />
                                                <span>سرور مجازی</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/forex" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <ForexSvg />
                                                <span>فارکس</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/linux" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <LinuxSvg />
                                                <span>لینوکس</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/mikrotik" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <MikrotikSvg />
                                                <span>میکروتیک</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/ssh" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <SshSvg />
                                                <span>SSH</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/windows" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <WindowsSvg />
                                                <span>ویندوز</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vps/wordpress" className="block px-4 py-2 hover:bg-gray-100">
                                            <span className="flex items-center gap-2">
                                                <WordpressSvg />
                                                <span>وردپرس</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul> */}
                    </li>


                    <li>
                        <Link href="/blogs">
                            <div className="flex w-28 text-nowrap justify-center h-full vazirfont-bold text-white rounded-t-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                مقالات
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about_us">
                            <div className="flex w-28 text-nowrap justify-center h-full vazirfont-bold text-white rounded-t-2xl  transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                درباره ما
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact_us">
                            <div className="flex w-28 text-nowrap justify-center h-full vazirfont-bold text-white rounded-t-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                تماس با ما
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DesktopHeaderMenu;