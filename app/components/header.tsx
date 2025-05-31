import Link from "next/link";
import logo from "@/public/img/logo.webp";
import Image from "next/image";
// import Image from "next/image";

const Header = () => {
    return (
        <>
            <header>
                <nav className="flex justify-between h-10">
                    <ul className="flex pt-2">
                        {/* <li className="">
                            <div className="bg-white flex w-28 justify-center h-full rounded-t-2xl">
                                logo
                            </div>
                        </li> */}
                        <li>
                            <Link href="#">
                                <div className="bg-white flex w-28 text-nowrap justify-center h-full vazirfont-regular text-black rounded-t-2xl">
                                    صفحه اصلی
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="flex w-28 text-nowrap justify-center h-full vazirfont-regular text-white rounded-t-2xl">
                                    سرویس ها
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="flex w-28 text-nowrap justify-center h-full vazirfont-regular text-white rounded-t-2xl">
                                    مقالات
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="flex w-28 text-nowrap justify-center h-full vazirfont-regular text-white rounded-t-2xl">
                                    درباره ما
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="flex w-28 text-nowrap justify-center h-full vazirfont-regular text-white rounded-t-2xl">
                                    تماس با ما
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex h-fit gap-2">
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
                </nav>
            </header>
        </>
    )
}

export default Header;