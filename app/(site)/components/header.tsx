import Link from "next/link";
import logo from "@/public/img/logo.webp";
import Image from "next/image";
import MobileHeaderMenu from "./menu/mobileHeaderMenu";
import DesktopHeaderMenu from "./menu/desktopHeaderMenu";
import CartSvg from "@/public/svg/cartSvg";

const Header = () => {
    return (
        <>
            <header className="p-5">
                <div className="container mx-auto">
                    <nav className="flex justify-between h-10 ">
                        <DesktopHeaderMenu />
                        <MobileHeaderMenu />
                        <ul className="flex h-fit gap-2">
                            <li className="ml-auto h-fit">
                                <Link href="https://my.vpsbazaar.cloud/index.php?rp=/login">
                                    <div className="flex w-20 p-1 text-nowrap justify-center h-full vazirfont-medium text-sm bg-white hover:bg-gray-200 rounded-2xl text-black">
                                        <span className="pt-1">ورود به پنل</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="ml-auto">
                                <div className="flex gap-1 w-fit p-2 text-nowrap justify-center h-full vazirfont-medium text-xs bg-white rounded-2xl text-black">
                                    <div className="text-[10px]">
                                        <div className="pt-1">021-91095238</div>
                                        <div className="pt-1">09394223183</div>
                                    </div>
                                    <span className="flex items-center">
                                        <Link href="/">
                                            <Image src={logo} alt="logo" width={35} height={35} />
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className="ml-auto h-fit">
                                <Link href="https://my.vpsbazaar.cloud/cart.php?a=view">
                                    <div className="flex gap-1 w-fit p-2 text-nowrap justify-center h-full vazirfont-medium text-xs bg-white rounded-2xl text-black">
                                        <CartSvg />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header;