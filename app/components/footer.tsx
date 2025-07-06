'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.webp";
import { useEffect, useState } from "react";

const Footer = () => {
    const [cookieAccepted, setCookieAccepted] = useState(true);
    useEffect(() => {
        const accepted = localStorage.getItem("cookieAccepted");
        if (!accepted) {
            setCookieAccepted(false);
        }
    }, []);

    const acceptCookieConsent = () => {
        localStorage.setItem("cookieAccepted", "true");
        setCookieAccepted(true);
    };

    return (
        <>
            <footer className="p-10 pb-1">
                <div className="grid grid-cols-12 p-10 flex text-white text-sm">
                    <div className="col-span-6 md:col-span-3 vazirfont-regular">
                        <ul>
                            <Link href="/">
                                <li className="mt-2">
                                    صفحه اصلی
                                </li>
                            </Link>
                            <Link href="/vps">
                                <li className="mt-2">
                                    سرویس ها
                                </li>
                            </Link>
                            <Link href="blogs">
                                <li className="mt-2">
                                    مقالات
                                </li>
                            </Link>
                            <Link href="/sitemap.xml">
                                <li className="mt-2">
                                    نقشه سایت
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 vazirfont-regular flex justify-end md:justify-center">
                        <ul>
                            <Link href="/about_us">
                                <li className="mt-2">
                                    درباره ما
                                </li>
                            </Link>
                            <Link href="/contact_us">
                                <li className="mt-2">
                                    تماس با ما
                                </li>
                            </Link>
                            <Link href="https://my.vpsbazaar.cloud/index.php?rp=/login">
                                <li className="mt-2">
                                    ورود
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 vazirfont-regular flex mt-10 md:mt-0">
                        <ul>
                            <li className="md:mt-2">
                                <Link href="/privacy_policy"><span>سیاست های حفظ حریم خصوصی</span></Link>
                            </li>
                            <li className="mt-2">
                                <span>پشتیبانی: </span>
                                <br className="md:hidden" />
                                <span dir="ltr">021-91095238</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 vazirfont-regular flex justify-end md:justify-center mt-10 md:mt-0">
                        <div>
                            E-namad
                        </div>
                    </div>
                </div>
                <div className="vazirfont-regular mt-1  text-gray-700 flex">
                    <div className="flex mx-auto gap-2 text-white w-fit rounded-2xl pr-2 pl-2 mt-1">
                        <div className="p-2 rounded-full">
                            <Link href="/">
                                <Image src={logo} alt="logo" width={30} height={30} />
                            </Link>
                        </div>
                        <div className="mt-2">تمامی حقوق این سایت متعلق به VPSbazaar می‌باشد</div>
                    </div>
                </div>
                {/* Cookie Consent */}
                {!cookieAccepted && (
                    <div
                        id="cookieConsent"
                        className="fixed bottom-0 right-0 m-4 z-50 text-sm bg-amber-300 vazirfont-medium text-black p-4 rounded-xl shadow-md w-[95%] md:w-[600px]"
                    >
                        <div className="mb-2">
                            این وبسایت از کوکی برای بهبود تجربه کاربری شما استفاده می‌کند. با استفاده از این وب‌سایت، شما با{" "}
                            <Link
                                href="/privacy_policy"
                                target="_blank"
                                className="text-blue-600 underline"
                            >
                                سیاست حفظ حریم خصوصی
                            </Link>{" "}
                            ما موافقت می‌کنید.
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 justify-end">
                            <Link
                                href="/privacy_policy"
                                target="_blank"
                                className="text-white bg-blue-500  px-3 py-1 rounded-md text-sm text-center"
                            >
                                بیشتر بخوانید
                            </Link>
                            <button
                                onClick={acceptCookieConsent}
                                className="bg-[#c92e93] text-white px-4 py-1 rounded-md text-sm"
                            >
                                پذیرش قوانین سایت
                            </button>
                        </div>
                    </div>
                )}
            </footer>
        </>
    )
}

export default Footer;