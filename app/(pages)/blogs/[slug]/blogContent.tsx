import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
// import { useEffect } from 'react'

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
type Blog_tags = {
    id: number
    title: string
    slug:string
}

type Props = {
    blog: Blog
    blog_tags: Blog_tags[]
}

const BlogContent = ({ blog, blog_tags }: Props) => {
    return (
        <>
            <h1 className="vazirfont-bold text-2xl text-gray-800">{blog.title}</h1>
            <div className="vazirfont-regular text-xs mt-4 flex gap-1">
                <span>موضوعات مرتبط: </span>
                {
                    blog_tags.map((tag) => (
                        <Link key={tag.id} href={`/tags/${tag.slug}`}><span  className="text-blue-600">#{tag.title}</span></Link>
                    ))
                }
            </div>
            <div className="vazirfont-medium text-lg pt-3 text-justify text-gray-700 mb-10">
                <div className="mt-5">
                    <div className="mt-5">
                        {
                            blog?.content1 && blog.content1.length > 0 && (
                                <div className="p-2 p-md-10 pt-5 pb-10">
                                    <div className="vazirfont-medium text-lg text-gray-700">
                                        {blog?.content1.split('\n').map((line, i) => {
                                            if (line.startsWith("##")) {
                                                return <h2 key={i} className="vazirfont-bold text-xl pb-2 mt-5 md:mt-20 text-slate-800">{line.replace("##", "").trim()}</h2>;
                                            }
                                            if (line.startsWith("@@")) {
                                                return <h3 key={i} className="vazirfont-medium text-lg pb-1 mt-5 md:mt-10 text-blue-800">{line.replace("@@", "").trim()}</h3>;
                                            }
                                            return <p key={i} className="text-slate-700 text-[15px]" style={{ whiteSpace: "pre-wrap" }}>{line}</p>;
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex">
                        <Image className="mx-auto rounded-lg" src={blog.picture} width={500} height={400} alt={blog.title} />
                    </div>
                    <div className="mt-2">
                        {
                            blog?.content2 && blog.content2.length > 0 && (
                                <div className="p-2 p-md-10 pt-5 pb-10">
                                    <div className="vazirfont-medium text-lg text-gray-700">
                                        {blog?.content2.split('\n').map((line, i) => {
                                            if (line.startsWith("##")) {
                                                return <h2 key={i} className="vazirfont-bold text-xl pb-2 mt-5 md:mt-20 text-slate-800">{line.replace("##", "").trim()}</h2>;
                                            }
                                            if (line.startsWith("@@")) {
                                                return <h3 key={i} className="vazirfont-medium text-lg pb-1 mt-5 md:mt-10 text-blue-800">{line.replace("@@", "").trim()}</h3>;
                                            }
                                            return <p key={i} className="text-slate-700 text-[15px]" style={{ whiteSpace: "pre-wrap" }}>{line}</p>;
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-5">
                        <div className="mt-10 flex">
                            <Link className="mx-auto p-3 pr-7 pl-7 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-800 shadow-2xl" href={blog.link}>{blog.link_title}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogContent;