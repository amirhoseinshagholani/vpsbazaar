import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "مقالات تخصصی سرور مجازی و VPS | وبلاگ VPSBazaar",
  description:
    "مطالب تخصصی و آموزشی درباره سرور مجازی، وی پی اس، لینوکس، ویندوز، ترید، گیم سرور، ربات تلگرام و کاربردهای متنوع VPS. یادگیری، مقایسه و راهنمای خرید VPS در وبلاگ VPSBazaar.",
  keywords:
    "مقالات VPS, آموزش سرور مجازی, وی پی اس برای ترید, سرور مجازی لینوکس, مقایسه VPS, وبلاگ VPSBazaar, آموزش ریموت دسکتاپ, کاربردهای VPS",
  metadataBase: new URL("https://vpsbazaar.cloud"),
  robots: "index, follow",
  openGraph: {
    type: "article",
    url: "https://vpsbazaar.cloud/blogs",
    title: "مقالات تخصصی VPS و سرور مجازی | وبلاگ VPSBazaar",
    description:
      "در وبلاگ VPSBazaar بخوانید: آموزش‌ها، راهنماها و بررسی‌های تخصصی درباره VPS و سرور مجازی برای ترید، برنامه‌نویسی، ربات تلگرام و مدیریت سرورها.",
    siteName: "VPSBazaar",
    images: [
      {
        url: "https://vpsbazaar.cloud/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "وبلاگ VPSBazaar - مقالات تخصصی سرور مجازی",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "وبلاگ VPSBazaar | مقالات تخصصی VPS و آموزش سرور مجازی",
    description:
      "مطالب و مقالات آموزشی درباره VPS، ریموت دسکتاپ، انتخاب سرور، کاربردها و راهنمای خرید سرور مجازی در وبلاگ VPSBazaar.",
    images: ["https://vpsbazaar.cloud/img/og-image.webp"],
  },
  alternates: {
    canonical: "/blogs",
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", sizes: "any" },
      { url: "/img/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/img/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: "/img/apple-touch-icon.webp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

type Blog = {
  id: number
  title: string
  slug: string
  content1: string
  content2: string
  picture: string
  video: string
  status: boolean
  link: string
  link_title: string
  study_time: number
  created_at: string
  updated_at: string

}

const Blogs = async () => {
  const res_blogs = await fetch(`https://vpsbazaar.cloud/api/blogs`, { cache: 'no-store' });
  const blogs: Blog[] = await res_blogs.json();
  return (
    <>
      <Script id="breadcrumb-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "خانه",
              "item": "https://vpsbazaar.cloud"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "مقالات",
              "item": "https://vpsbazaar.cloud/blogs"
            }
          ]
        })}
      </Script>
      <Script id="blog-list-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "مقالات VPSBazaar",
          "itemListElement": blogs.map((blog, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://vpsbazaar.cloud/blogs/${blog.slug}`
          }))
        })}
      </Script>

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
            <div className="mt-10 grid grid-cols-12">

              {
                blogs.map((blog) => (
                  <div key={blog.id} className="col-span-12 md:col-span-3 mx-auto mt-5 flex w-9/12 hover:opacity-90">
                    <Link href={`/blogs/${blog.slug}`}>
                      <div className="">
                        <Image className="rounded-lg" src={blog.picture} width={300} height={200} alt={blog.title} />
                        <div className="">
                          <div className="text-sm mt-1 vazirfont-bold">
                            موضوع: {blog.title}
                          </div>
                          <div className="text-sm vazirfont-bold mt-2">
                            زمان مطالعه: {blog.study_time} دقیقه
                          </div>
                          <div className="line-clamp-2 mt-2 text-sm vazirfont-regular text-gray-600">
                            {blog.content1}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }

            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default Blogs;