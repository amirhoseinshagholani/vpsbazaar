'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const SelectService = ({ category }: { category: string }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (category)
            setUrl(`https://my.vpsbazaar.cloud/index.php?rp=/store/vps/${category}`);
    }, []);

    return (
        <>
            <Link className="bg-[#c92e93] text-white p-1 pl-4 pr-3 rounded-l-4xl" href={url}>سفارش دهید</Link>
        </>
    )
}

export default SelectService;