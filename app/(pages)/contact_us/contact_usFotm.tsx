'use client';

import { useState } from "react";
import swalMessage from "sweetalert2";

const Contact_usForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submit_form = () => {
        if (!name) {
            swalMessage.fire("خطا", "لطفا نام را وارد کنید", "warning");
            return false;
        }
        if (!lastName) {
            swalMessage.fire("خطا", "لطفا نام خانوادگی را وارد کنید", "warning");
            return false;
        }
        if (!subject) {
            swalMessage.fire("خطا", "لطفا موضوع را وارد کنید", "warning");
            return false;
        }
        if (!message) {
            swalMessage.fire("خطا", "لطفا متن پیام را وارد کنید", "warning");
            return false;
        }

        setName("");
        setLastName("");
        setSubject("");
        setMessage("");
        swalMessage.fire("موفق", "پیام شما با موفقیت ارسال شد", "success");
    }
    return (
        <>
            <form>
                <div className="md:p-10 rounded-xl outline-gray-300 w-full">
                    <div className="flex gap-2 grid grid-cols-12">
                        <label className="text-nowrap col-span-2 hidden md:block" htmlFor="name">نام: </label>
                        <input onChange={(e) => setName(e.target.value)} value={name} id="name" name="name" placeholder="نام خود را وارد کنید" className="outline-1 text-sm p-1 col-span-12 md:col-span-10 outline-gray-400 h-8 w-full rounded-lg" type=" text" />
                    </div>
                    <div className="flex gap-2 mt-4 grid grid-cols-12">
                        <label className="text-nowrap col-span-2 hidden md:block" htmlFor="lastname">نام خانوادگی: </label>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastname" name="lastname" placeholder="نام خانوادگی خود را وارد کنید" className="outline-1 text-sm p-1 col-span-12 md:col-span-10 outline-gray-400 h-8 w-full rounded-lg" type=" text" />
                    </div>
                    <div className="flex gap-2 mt-4 grid grid-cols-12">
                        <label className="text-nowrap col-span-2 hidden md:block" htmlFor="subject">موضوع: </label>
                        <input onChange={(e) => setSubject(e.target.value)} value={subject} id="subject" name="subject" placeholder="موضوع پیام را وارد کنید" className="outline-1 text-sm p-1 col-span-12 md:col-span-10 outline-gray-400 h-8 w-full rounded-lg" type=" text" />
                    </div>
                    <div className="flex gap-2  mt-4 grid grid-cols-12">
                        <label className="text-nowrap col-span-2 hidden md:block" htmlFor="message">پیام: </label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" name="message" placeholder="متن پیام را وارد کنید" className="outline-1 text-sm p-1 col-span-12 md:col-span-10 outline-gray-400 h-20 w-full rounded-lg" />
                    </div>
                    <div className="flex  justify-end mt-3">
                        <button onClick={() => submit_form()} type="button" className="bg-green-600 hover:bg-green-700 text-white  p-2 pr-4 pl-4 text-sm rounded-sm">ارسال پیام</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact_usForm;