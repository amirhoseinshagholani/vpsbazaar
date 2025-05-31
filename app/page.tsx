import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main>
        <div className="h-fit rounded-b-2xl rounded-l-2xl p-10">
          <div className="text-white vazirfont-medium text-sm">
            خانه
          </div>
          <div className="grid grid-cols-12 flex items-center">
            <div className="col-span-8">
              <div className="vazirfont-bold text-lg flex gap-1 text-white">
                <span>✔️</span>
                <h1>
                  ارایه سرورهای مجازی با کیفیت بالا و قیمت مناسب
                </h1>
              </div>
              <div className="vazirfont-bold text-xl text-white mt-5 gap-1">
                <span>✔️</span>
                <span>انتخاب سرور مناسب، اولین قدم برای ایده های بزرگ</span>
              </div>
              <div className="vazirfont-bold text-3xl mt-5 text-white">
                {/* <span>✔️</span> */}
                <span>ما اینجاییم تا رویای دیجیتال شما به واقعیت تبدیل شود</span>
              </div>
              <div className="mt-10 flex">
                <Link className="mx-auto" href="#services">
                  <span className="bg-white hover:bg-gray-200 text-black vazirfont-bold pr-5 pl-5 pt-2 pb-2 rounded-3xl">✔️ شروع کنید</span>
                </Link>
              </div>
            </div>
            <div className="col-span-4 flex justify-center">
              <Image src={"/img/vps.webp"} alt="vps" width={300} height={300} />
            </div>
          </div>
        </div>

        <div id="services" className="bg-white h-fit rounded-2xl  p-10 mt-10">
          {/* <div className="flex justify-center text-3xl vazirfont-bold">
            VPS Bazaar
          </div> */}
          <section className="">
            <div className="flex justify-center w-full">
              <h2 className="mx-auto vazirfont-bold text-3xl">
                سرویس ها
              </h2>
            </div>
            <div className="grid grid-cols-12">
              <div className="">
                <div>flex</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
