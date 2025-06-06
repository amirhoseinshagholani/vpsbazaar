import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="">
        <div className="h-fit  p-10 ">
          <div className="text-white vazirfont-medium text-sm">
            خانه
          </div>
          <div className="grid grid-cols-12 flex items-center">
            <div className="col-span-6">
              <div className="vazirfont-bold text-lg flex gap-1 text-white">
                <span>✔️</span>
                <h1 className="text-[16px]">
                  ارایه سرورهای مجازی با کیفیت بالا و قیمت مناسب
                </h1>
              </div>
              <div className="vazirfont-bold text-lg text-white mt-5 gap-1">
                <span>✔️</span>
                <span>انتخاب سرور مناسب، اولین قدم برای ایده های بزرگ</span>
              </div>
              <div className="vazirfont-bold text-2xl mt-5 text-white">
                <span>✔️</span>
                <span>ما اینجاییم تا رویای دیجیتال شما به واقعیت تبدیل شود</span>
              </div>
              <div className="mt-10 flex">
                <Link className="mx-auto" href="#services">
                  <span className="bg-white hover:bg-gray-200 text-black vazirfont-bold pr-5 pl-5 pt-2 pb-2 rounded-3xl">✔️ مشاهده سرویس ها</span>
                </Link>
              </div>
            </div>
            <div className="col-span-6 flex justify-end">
              <Image src={"/img/vps.webp"} alt="vps" width={500} height={500} />
            </div>
          </div>
        </div>

        <div id="" className="bg-white h-full rounded-3xl p-10 mt-10">
          <section className="">
            <div className="flex justify-center w-full">
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-6 flex items-center">
                <div className="flex justify-center">
                  <div className="mx-auto w-fit">
                    <h2 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                      پشتیبانی لحظه‌ای ۲۴/۷
                    </h2>
                    <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                      تیم پشتیبانی ما به‌صورت شبانه‌روزی آماده کمک به شماست. هر زمان که نیاز به مشاوره یا رفع مشکلی داشتید، می‌توانید روی ما حساب کنید.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <Image src={"/img/support.webp"} alt="support" width={500} height={500} />
              </div>
            </div>

            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-6">
                <Image src={"/img/price.webp"} alt="support" width={500} height={500} />
              </div>
              <div className="col-span-6 flex items-center">
                <div className="flex justify-center">
                  <div className="mx-auto w-fit">
                    <h2 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                      قیمت‌ مناسب
                    </h2>
                    <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                      ما تضمین می‌کنیم که سرویس‌های با کیفیت خود را با مناسب‌ترین قیمت‌ها ارائه دهیم. در VPS Bazaar بهترین راهکارهای میزبانی را بدون نیاز به پرداخت هزینه‌های گزاف خواهید داشت.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-12">
              <div className="col-span-6 flex items-center">
                <div className="flex justify-center">
                  <div className="mx-auto w-fit">
                    <h2 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                      سرورهای پرسرعت و امن
                    </h2>
                    <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                      سرورهای ما از آخرین فناوری‌ها بهره می‌برند تا سرعت، امنیت و پایداری بالایی را برای کسب‌وکار شما فراهم کنند. با ما می‌توانید از آپتایم ۹۹.۹٪ لذت ببرید.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <Image src={"/img/server.webp"} alt="support" width={500} height={500} />
              </div>
            </div>

            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-6">
                <Image src={"/img/update.webp"} alt="support" width={500} height={500} />
              </div>
              <div className="col-span-6 flex items-center">
                <div className="flex justify-center">
                  <div className="mx-auto w-fit">
                    <h2 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                      قابلیت ارتقاء آسان
                    </h2>
                    <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                      کسب‌وکار شما در حال رشد است؟ به‌راحتی می‌توانید منابع خود را با چند کلیک ارتقاء دهید و با خیالی آسوده به مسیر خود ادامه دهید.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-10">
              <div className="col-span-6 flex items-center">
                <div className="flex justify-center">
                  <div className="mx-auto w-fit">
                    <h2 className="vazirfont-bold text-blue-700 text-2xl mx-auto w-2/3">
                      تجربه کاربری آسان
                    </h2>
                    <p className="text-justify vazirfont-regular text-gray-700  mx-auto text-lg w-2/3 mt-3">
                      پنل مدیریتی ساده و کاربرپسند ما به شما این امکان را می‌دهد که به‌راحتی سرور خود را مدیریت کنید.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <Image src={"/img/experience.webp"} alt="support" width={500} height={500} />
              </div>
            </div>

          </section>
        </div>

      </main>
    </>
  );
}
