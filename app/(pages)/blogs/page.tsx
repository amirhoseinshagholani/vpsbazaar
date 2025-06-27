import Link from "next/link";
import Bloglists from "./bloglists";

const Blogs = () => {
    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">مقالات</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">مقالات</h1>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <p className="mt-3">
                            در بخش مقالات VPSBazaar می‌توانید به جدیدترین آموزش‌ها، تحلیل‌ها و نکات کاربردی در زمینه سرور مجازی، زیرساخت ابری، امنیت سرورها و مدیریت منابع دسترسی داشته باشید. این مطالب به شما کمک می‌کنند تا انتخابی هوشمندانه داشته باشید و از سرور مجازی‌تان بیشترین بهره را ببرید. اگر به دنبال راهنمایی دقیق برای خرید، راه‌اندازی یا بهینه‌سازی VPS هستید، جای درستی آمده‌اید!
                        </p>
                        <Bloglists />
                    </div>
                </section>
            </main >
        </>
    )
}

export default Blogs;