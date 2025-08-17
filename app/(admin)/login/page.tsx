'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Swal from "sweetalert2";
import Cookies from 'js-cookie';
import "./globals.css";
import "@/public/css/font.css";
import "@/public/css/style.css";
import logo from "@/public/img/logo.webp";
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = async () => {
        if (username == "") {
            Swal.fire("خطا", "نام کاربری را وارد نمایید", "warning");
            return;
        }
        if (password == "") {
            Swal.fire("خطا", "رمزعبور را وارد نمایید", "warning");
            return;
        }

        try {
            const res = await axios.post("https://vpsbazaar.cloud/api/login", {
                username: username,
                password: password
            });

            if (res.data.success) {
                Cookies.set("admin_id", res.data.admin_id, { expires: 2 });
                Cookies.set("user_vpsbazaar_email", username, { expires: 2 });
                router.push('/panel');
            } else {
                Swal.fire("خطا", "نام کاربری یا رمزعبور اشتباه است", "error");
                return false;
            }
        } catch (err) {
            console.error("Error:", err);
        }
    }

    return (
        <>
            <div className="bg-white h-screen text-black flex items-center justify-center p-5 md:p-0">
                <div className="bg-slate-300 shadow-lg w-[400px] h-fit rounded-2xl">
                    <div className="mx-auto bg-slate-300  w-96 h-fit p-5 rounded-2xl">
                        <div className="flex mt-5" id="logo">
                            <Image className="mx-auto rounded-lg" src={logo} alt="logo" width={100} height={100} />
                        </div>
                        <div className="mt-10 flex">
                            <div className="mx-auto vazirfont-medium">ایمیل و رمز عبور خود را وارد کنید</div>
                        </div>
                        <div className="p-5">
                            <input dir="ltr" onChange={(e) => setUsername(e.target.value)} id="username" value={username} className="bg-white p-1 h-10 rounded-lg shadow-sm w-full focus:outline-none vazirfont-medium mt-2" type="text" placeholder="ایمیل خود را وارد کنید" />
                            <input dir="ltr" onChange={(e) => setPassword(e.target.value)} id="password" value={password} className="bg-white p-1 h-10 rounded-lg shadow-sm w-full focus:outline-none vazirfont-medium mt-2" type="password" placeholder="رمزعبور خود را وارد کنید" />
                        </div>
                        <div className="mt-7 flex">
                            <button onClick={() => login()} className="vazirfont-medium mx-auto bg-[#18bb0d] hover:bg-green-600 text-white rounded-lg p-2 pr-10 pl-10 shadow-md">ورود</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;