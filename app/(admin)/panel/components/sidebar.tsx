'use client';

import useGetRoute from '@/functions/getRouter';
import logo from '@/public/img/logo.webp';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    const currentRoute = useGetRoute();

    // useEffect(()=>{alert(currentRoute)},[]);

    return (
        <>
            <div className=''>
                <div className="p-5">
                    <div className='mx-auto bg-white w-fit p-3 rounded-xl'>
                        <Image src={logo} alt="logo" width={70} height={70} />
                    </div>
                    <hr className='mt-5 text-gray-600' />
                </div>
                <ul className='vazirfont-medium text-md text-gray-900'>
                    <Link href="/panel"><li className={`${currentRoute == '/panel' ? 'bg-gradient-to-l from-transparent to-white' : ''} hover:bg-gradient-to-l from-transparent to-white p-3`}>داشبورد</li></Link>
                    <Link href="/panel/spendings"><li className={`${currentRoute == '/panel/spendings' ? 'bg-gradient-to-l from-transparent to-white' : ''} hover:bg-gradient-to-l from-transparent to-white p-3`}>ثبت هزینه</li></Link>
                    <Link href="/panel/spendings"><li className={`${currentRoute == '/panel/spendings' ? 'bg-gradient-to-l from-transparent to-white' : ''} hover:bg-gradient-to-l from-transparent to-white p-3`}>بدهکاری</li></Link>
                    <Link href="/panel/messages"><li className={`${currentRoute == '/panel/messages' ? 'bg-gradient-to-l from-transparent to-white' : ''} hover:bg-gradient-to-l from-transparent to-white p-3`}>پیام ها</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;