import type { Metadata } from "next";
import Link from "next/link";
import BlogContent from "./blogContent";

type Blogtype = {
    id: number;
    title: string;
    slug: string;
    content1: string;
    content2: string;
    picture: string;
    video: string;
    status: boolean;
    link: string;
    link_title: string;
    study_time: number;
    created_at: string;
    updated_at: string;
};
// ✅ داینامیک metadata برای سئو و شبکه‌های اجتماعی
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const res = await fetch(`${process.env.API_URL}/api/blog/${params.slug}`, {
    cache: "no-store",
  });

  const blog:Blogtype = await res.json();

  return {
    title: `${blog.title} | وبلاگ VPSBazaar`,
    description:
      blog.content1 ||
      "مطالعه مقاله تخصصی درباره سرور مجازی و VPS در وبلاگ VPSBazaar.",
    metadataBase: new URL("https://vpsbazaar.cloud"),
    openGraph: {
      type: "article",
      url: `https://vpsbazaar.cloud/blogs/${params.slug}`,
      title: `${blog.title} | وبلاگ VPSBazaar`,
      description:
        blog.content1 ||
        "مطالعه مقاله تخصصی درباره VPS و کاربردهای سرور مجازی.",
      siteName: "VPSBazaar",
      images: [
        {
          url: blog.picture || "https://vpsbazaar.cloud/img/og-image.webp",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | VPSBazaar`,
      description:
        blog.content1 ||
        "مطالعه مقاله تخصصی درباره سرور مجازی در وبلاگ VPSBazaar.",
      images: [blog.picture || "https://vpsbazaar.cloud/img/og-image.webp"],
    },
  };
}

const Blog = async ({ params }: { params: { slug: string } }) => {
  const res_blog = await fetch(`${process.env.API_URL}/api/blog/${params.slug}`,{ cache: "no-store" });
  const blog = await res_blog.json();


  const res_tags = await fetch(`${process.env.API_URL}/api/blog_tags/${blog.id}`, {cache: "no-store",});
  const tags = await res_tags.json();

  return (
    <main className="bg-white w-full h-full p-10 rounded-3xl">
      <div className="text-sm vazirfont-regular text-gray-600">
        <Link href="/">
          <span className="m-1 text-blue-600">خانه</span>
        </Link>
        /
        <Link href="/blogs">
          <span className="m-1 text-blue-600">مقالات</span>
        </Link>
        /<span className="m-1">{blog.title}</span>
      </div>
      <section className="container mx-auto mt-10">
        <BlogContent blog={blog} blog_tags={tags || []} />
      </section>
    </main>
  );
};

export default Blog;
