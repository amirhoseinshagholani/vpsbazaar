
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const decodedSlug = decodeURIComponent(params.slug);

    const tagSlug = decodedSlug;

    return {
        title: `مقالات مرتبط با ${tagSlug} | VPSBazaar`,
        description: `لیست مقالات مرتبط با ${tagSlug} در VPSBazaar شامل آموزش‌ها، بررسی‌ها و راهنمایی‌های تخصصی برای علاقه‌مندان به VPS و سرور مجازی.`,
        keywords: `${tagSlug}, مقالات ${tagSlug}, آموزش ${tagSlug}, VPSBazaar, سرور مجازی`,
        metadataBase: new URL("https://vpsbazaar.cloud"),
        robots: "index, follow",
        openGraph: {
            type: "website",
            url: `https://vpsbazaar.cloud/tags/${tagSlug}`,
            title: `مقالات مرتبط با ${tagSlug} | VPSBazaar`,
            description: `مطالعه مقالات مرتبط با ${tagSlug} در VPSBazaar برای یادگیری و توسعه مهارت‌های مدیریت سرور مجازی و VPS.`,
            siteName: "VPSBazaar",
            images: [
                {
                    url: "https://vpsbazaar.cloud/img/og-image.webp",
                    width: 1200,
                    height: 630,
                    alt: `مقالات مرتبط با ${tagSlug}`,
                },
            ],
            locale: "fa_IR",
        },
        twitter: {
            card: "summary_large_image",
            title: `مقالات مرتبط با ${tagSlug} | VPSBazaar`,
            description: `مطالعه مقالات مرتبط با ${tagSlug} در VPSBazaar برای یادگیری و توسعه مهارت‌های مدیریت VPS و سرور مجازی.`,
            images: ["https://vpsbazaar.cloud/img/og-image.webp"],
        },
        alternates: {
            canonical: `/tags/${tagSlug}`,
        },
        viewport: {
            width: "device-width",
            initialScale: 1,
        },
    };
}


const Tags = async ({ params }: { params: { slug: string } }) => {
    const res_blogs = await fetch(`${process.env.API_URL}/api/related_blogs/${params.slug}`, { cache: 'no-store' });
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
                            "name": "تگ ها",
                            "item": "https://vpsbazaar.cloud/tags"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": `${decodeURIComponent(params.slug)}`,
                            "item": `https://vpsbazaar.cloud/tags/${decodeURIComponent(params.slug)}`
                        }
                    ]
                })}
            </Script>
            <main className="bg-white w-full h-full p-10 rounded-3xl">
                <div className="text-sm vazirfont-regular text-gray-600">
                    <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/<Link href="/tags"><span className="m-1 text-blue-600">تگ ها</span></Link>/<span className="m-1">{decodeURIComponent(params.slug)}</span>
                </div>
                <section className="container mx-auto mt-10">
                    <h1 className="vazirfont-bold text-2xl text-gray-800">موضوعات مرتبط با <span className="text-blue-600">#{decodeURIComponent(params.slug)}</span></h1>
                    <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                        <div className="mt-10 grid grid-cols-12">
                            {
                                blogs.map((blog) => (
                                    <div key={blog.id} className="col-span-12 md:col-span-3 mx-auto mt-5 flex w-9/12 hover:opacity-90">
                                        <Link href={`/blogs/${blog.slug}`}>
                                            <div className="">
                                                <Image className="rounded-lg" src={blog.picture} width={300} height={200} alt={blog.title} />
                                                <div className="">
                                                    <div className="text-sm vazirfont-bold">
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

export default Tags;