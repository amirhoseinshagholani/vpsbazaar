import Link from "next/link";
import logo from "@/public/img/logo.webp";
import Image from "next/image";
import MobileHeaderMenu from "./menu/mobileHeaderMenu";
import DesktopHeaderMenu from "./menu/desktopHeaderMenu";

const Header = () => {
    return (
        <>
            <header className="p-5">
                <div className="container mx-auto">
                    <nav className="flex justify-between h-10 ">
                        <DesktopHeaderMenu />
                        <MobileHeaderMenu />
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
                </div>

            </header>
        </>
    )
}

export default Header;