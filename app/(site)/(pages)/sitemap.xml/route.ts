const siteUrl = "https://vpsbazaar.cloud";

type Blog = {
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

type Blog_tags = {
    id: number;
    title: string;
    slug: string;
    created_at: string;
    updated_at: string;
};

export async function GET() {
    const res_blogs = await fetch(`${process.env.API_URL}/api/blogs`, { cache: 'no-store' });
    const res_blog_tags = await fetch(`${process.env.API_URL}/api/all_Blog_tags`, { cache: 'no-store' });

    const blogs: Blog[] = await res_blogs.json();
    const blog_tags: Blog_tags[] = await res_blog_tags.json();

    const staticUrls = [
        `${siteUrl}/`,
        `${siteUrl}/about_us`,
        `${siteUrl}/contact_us`,
        `${siteUrl}/blogs`,
        `${siteUrl}/tags`,
        `${siteUrl}/vps`,
        `${siteUrl}/vps/forex`,
        `${siteUrl}/vps/linux`,
        `${siteUrl}/vps/mikrotik`,
        `${siteUrl}/vps/ssh`,
        `${siteUrl}/vps/windows`,
        `${siteUrl}/vps/wordpress`

    ];

    const staticXml = staticUrls.map((url) => `
        <url>
            <loc>${url}</loc>
        </url>
    `).join("");

    const dynamicXmlBlogs = blogs.map((blog) => `
        <url>
            <loc>${siteUrl}/blogs/${blog.slug}</loc>
            <lastmod>${new Date(blog.updated_at).toISOString()}</lastmod>
        </url>
    `).join("");

    const dynamicXmlBlogPictures = blogs.map((blog) => `
        <url>
            <loc>${siteUrl}${blog.picture}</loc>
            <lastmod>${new Date(blog.updated_at).toISOString()}</lastmod>
        </url>
    `).join("");

    const dynamicXmlBlogTags = blog_tags.map((tag) => `
        <url>
            <loc>${siteUrl}/tags/${tag.slug}</loc>
            <lastmod>${new Date(tag.updated_at).toISOString()}</lastmod>
        </url>
    `).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${dynamicXmlBlogs}
${dynamicXmlBlogPictures}
${dynamicXmlBlogTags}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}
