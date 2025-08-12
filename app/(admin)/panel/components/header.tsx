'use client';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useGetRoute from '@/functions/getRouter';

const Header = () => {
    const router = useRouter();
    const currentRoute = useGetRoute();

    const exit = () => {

        Cookies.remove("admin_id");
        Cookies.remove("user_vpsbazaar_email");
        router.push('/login');
    }

    return (
        <>
            <header className="">
                <div className="flex h-10 w-full bg-blue-800 justify-between">
                    <div className="flex items-center vazirfont-medium text-sm text-white pr-5">کاربر گرامی، خوش آمدید</div>
                    <div className="flex items-center vazirfont-medium text-sm text-black pl-10">
                        <button onClick={exit} className="bg-red-400 hover:bg-red-500 text-white p-1 rounded-lg pr-5 pl-5">خروج</button>
                    </div>
                </div>
                <div className='block md:hidden grid grid-cols-12 bg-slate-500 p-2 vazirfont-medium text-slate-100'>
                    <div className={`col-span-3 text-center ${currentRoute == '/panel' ? 'bg-white text-black rounded-lg' : ''}`}>
                        <Link href="/panel">داشبورد</Link>
                    </div>
                    <div className={`col-span-3 text-center ${currentRoute == '/panel/spendings' ? 'bg-white text-black rounded-lg' : ''}`}>
                        <Link href='/panel/spendings'>ثبت هزینه</Link>
                    </div>
                    <div className={`col-span-3 text-center ${currentRoute == '/panel/depts' ? 'bg-white text-black rounded-lg' : ''}`}>
                        <Link href='/panel/depts'>بدهکاری</Link>
                    </div>
                    <div className={`col-span-3 text-center ${currentRoute == '/panel/messages' ? 'bg-white text-black rounded-lg' : ''}`}>
                        <Link href='/panel/messages'>پیام ها</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;



