import Image from "next/image";
import Contact_usForm from "./contact_usFotm";
import Link from "next/link";

const Contact_us = () => {

    return (
        <>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<span className="m-1">تماس با ما</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">تماس با ما</h1>
                    <h2 className="vazirfont-medium text-lg text-gray-800 mt-5">ما آماده و منتظر سوالات شما هستیم</h2>
                    <div className="vazirfont-medium text-lg pt-3 md:text-justify text-gray-700 mb-10 grid grid-cols-12">
                        <div className="mt-3 col-span-12 md:col-span-8 md:mt-20">
                            <p className="h-fit">
                                تلفن: 91095238-021
                            </p>
                            <p className="h-fit mt-5">
                                ایمیل: info@vpsbazaar.cloud
                            </p>
                            <p className="h-fit mt-5 text-justify">
                                آدرس: تهران - خیابان شهید حسین نیازمند - کوچه شهید رحیم نریمانی دوم - پلاک : 9.0 - طبقه : 2
                            </p>
                            <div className="mt-10">
                                <Contact_usForm />
                            </div>
                        </div>
                        <div className="md:col-span-4 flex h-fit hidden md:block">
                            <Image className="items-center mx-auto" src="/img/contact_us.webp" width={500} height={500} alt="About Us" />
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Contact_us;