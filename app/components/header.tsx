import Link from "next/link";
import logo from "@/public/img/logo.webp";
import Image from "next/image";
import VpsSvg from "@/public/svg/vpsSvg";
import ForexSvg from "@/public/svg/forexSvg";
import LinuxSvg from "@/public/svg/linuxSvg";
import MikrotikSvg from "@/public/svg/mikrotikSvg";
import SshSvg from "@/public/svg/sshSvg";
import WindowsSvg from "@/public/svg/windowsSvg";
import WordpressSvg from "@/public/svg/wordpresSvg";

// import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className="p-5">
                <div className="container mx-auto">
                    <nav className="flex grid grid-cols-12 h-10">
                        <div className="col-span-10">
                            <ul className="flex hidden">
                                <li>
                                    <Link href="/">
                                        <div className="text-white flex w-28 text-nowrap justify-center h-full vazirfont-bold  rounded-t-2xl  transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                            صفحه اصلی
                                        </div>
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <div className="flex w-28 justify-center h-full vazirfont-bold text-white rounded-t-2xl cursor-pointer transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
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
                                    </ul>
                                </li>


                                <li>
                                    <Link href="#">
                                        <div className="flex w-28 text-nowrap justify-center h-full vazirfont-bold text-white rounded-t-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                                            مقالات
                                        </div>
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="#">
                                    <div className="flex w-28 text-nowrap justify-center h-full vazirfont-bold text-white rounded-t-2xl">
                                        سوالات متداول
                                    </div>
                                </Link>
                            </li> */}
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
                        <div className="col-span-2 flex justify-end">
                            <ul className="flex h-fit gap-1 w-fit">
                                <li className="ml-auto">
                                    <Link href="#">
                                        <div className="flex w-20 p-1 text-nowrap justify-center h-full vazirfont-medium text-sm bg-white rounded-2xl text-black">
                                            <span className="pt-1">ورود به پنل</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="ml-auto">
                                    <div className="flex gap-1 w-fit p-2 text-nowrap justify-center h-full vazirfont-medium text-xs bg-white rounded-2xl text-black">
                                        <span className="pt-1">021-66554477</span>
                                        <span>
                                            <Link href="/">
                                                <Image src={logo} alt="logo" width={25} height={25} />
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header;