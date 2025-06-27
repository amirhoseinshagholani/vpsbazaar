import Link from "next/link";
import BlogContent from "./blogContent";

const Blog = async ({ params }: { params: { slug: string } }) => {

    const res_blog = await fetch(`${process.env.API_URL}/api/blog/${params.slug}`, { cache: 'no-store' });
    const blog = await res_blog.json();

    const res_tags = await fetch(`${process.env.API_URL}/api/blog_tags/2`, { cache: 'no-store' });
    const tags = await res_tags.json();

    return (
        <main className="bg-white w-full h-full p-10 rounded-3xl">
            <div className="text-sm vazirfont-regular text-gray-600">
                <Link href="/"><span className="m-1 text-blue-600">خانه</span></Link>/
                <Link href="/blogs"><span className="m-1 text-blue-600">مقالات</span></Link>/
                <span className="m-1">{blog.title}</span>
            </div>
            <section className="container mx-auto mt-10">
                <BlogContent blog={blog} blog_tags={tags} />
            </section>
        </main>
    )
}

export default Blog;
