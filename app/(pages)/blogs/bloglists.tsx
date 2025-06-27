

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from 'react'

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
const Bloglists = async () => {

    const res_blogs = await fetch(`${process.env.API_URL}/api/blogs`, { cache: 'no-store' });
    const blogs: Blog[] = await res_blogs.json();


    // useEffect(() => {
    //     console.log(posts);
    // }, [posts]);

    return (
        <>
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
        </>
    )
}

export default Bloglists;