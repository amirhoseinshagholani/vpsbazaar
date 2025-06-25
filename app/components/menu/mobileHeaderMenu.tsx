'use client';

import { useState, useEffect, useRef } from "react";
import MenuSvg from "@/public/svg/menuSvg";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const MobileHeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname(); 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menuEl = menuRef.current;
            const buttonEl = buttonRef.current;

            if (
                menuEl &&
                buttonEl &&
                !menuEl.contains(event.target as Node) &&
                !buttonEl.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <div className="block md:hidden" ref={buttonRef}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <MenuSvg />
                </button>
            </div>

            <div
                ref={menuRef}
                className={`md:hidden absolute top-12 left-0 w-full bg-gray-300 shadow-lg mt-3 z-50 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <ul className="flex flex-col items-start p-4 divide-y divide-gray-300">
                    <li className="w-full py-2">
                        <Link href="/" className="block w-full">صفحه اصلی</Link>
                    </li>
                    <li className="w-full py-2">
                        <Link href="/vps" className="block w-full">سرویس‌ها</Link>
                    </li>
                    <li className="w-full py-2">
                        <Link href="/articles" className="block w-full">مقالات</Link>
                    </li>
                    <li className="w-full py-2">
                        <Link href="/about_us" className="block w-full">درباره ما</Link>
                    </li>
                    <li className="w-full py-2">
                        <Link href="/contact_us" className="block w-full">تماس با ما</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileHeaderMenu;
