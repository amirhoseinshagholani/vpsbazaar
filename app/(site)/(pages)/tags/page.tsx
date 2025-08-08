
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

type Blog_tags = {
    id: number
    title: string
    slug: string
}

export const metadata: Metadata = {
    title: "لیست تگ‌های مقالات | VPSBazaar",
    description: "لیست کامل تگ‌های مقالات VPSBazaar برای دسترسی سریع به مقالات تخصصی درباره VPS، سرور مجازی و مدیریت سرور.",
    keywords: "تگ مقالات, لیست تگ ها, VPS, سرور مجازی, آموزش VPS, VPSBazaar",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://vpsbazaar.cloud/tags",
        title: "لیست تگ‌های مقالات | VPSBazaar",
        description: "مشاهده لیست کامل تگ‌های مقالات VPSBazaar برای دسترسی آسان به آموزش‌ها و مقالات تخصصی VPS و سرور مجازی.",
        siteName: "VPSBazaar",
        images: [
            {
                url: "https://vpsbazaar.cloud/img/og-image.webp",
                width: 1200,
                height: 630,
                alt: "VPSBazaar - لیست تگ های مقالات",
            },
        ],
        locale: "fa_IR",
    },
    twitter: {
        card: "summary_large_image",
        title: "لیست تگ‌های مقالات | VPSBazaar",
        description: "مشاهده لیست کامل تگ‌های مقالات VPSBazaar و دسترسی آسان به آموزش‌ها و مقالات VPS.",
        images: ["https://vpsbazaar.cloud/img/og-image.webp"],
    },
    alternates: {
        canonical: "/tags",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};


const Tags = async () => {
    const res_blog_tags = await fetch(`${process.env.API_URL}/api/all_Blog_tags`, { cache: 'no-store' });
    const tags: Blog_tags[] = await res_blog_tags.json();

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
                            "name": "تگ ها",
                            "item": "https://vpsbazaar.cloud/tags"
                        }
                    ]
                })}
            </Script>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="#"><span className="m-1">تگ ها</span></Link>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">لیست تگ ها</h1>
                    <h2 className="vazirfont-medium text-lg text-gray-700 mt-3">به کمک لیست زیر، می توانید به موضوعات و مطالب دلخواه دسترسی داشته باشید</h2>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <div className="mt-10 grid grid-cols-12">
                            {
                                tags.map((tag) => (
                                    <div key={tag.id} className="col-span-6 text-blue-600 md:col-span-3 mx-auto mt-5 flex w-9/12 hover:opacity-90">
                                        <Link href={`/tags/${tag.slug}`}>#{tag.slug}</Link>
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

export default Tags;