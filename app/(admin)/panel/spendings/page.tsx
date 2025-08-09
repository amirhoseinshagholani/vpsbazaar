'use client';

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Swal from "sweetalert2";
import formatNumber from "@/functions/formatNumber";
import unformatNumber from "@/functions/unformatNumber";

dayjs.extend(jalaliday);

const Panel = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const [date, setDate] = useState<any>();
  const [errors, setErrors] = useState({ mobile: "", amount: "" });

  const toEnglishDigits = (str: string) => {
    return str.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const numeric = raw.replace(/\D/g, ""); // حذف تمام حروف غیراعداد
    const numericSep = formatNumber(parseInt(numeric));
    setAmount(numericSep);
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const submit = async () => {
    if (!title || !amount || !date) {
      Swal.fire("خطا", "لطفا همه فیلدها رو پر کنید", "warning");
      return;
    }

    const englishDigitsDate = toEnglishDigits(date); // تبدیل اعداد فارسی
    const gregorianDate = dayjs(englishDigitsDate, { jalali: true }).format("YYYY-MM-DD"); // تبدیل به میلادی

    try {
      const res = await axios.post("https://vpsbazaar.cloud/api/insertSpend", {
        user_id: 1,
        title:title,
        amount:unformatNumber(amount),
        date: gregorianDate
      });

      console.log("Inserted:", res.data);
      Swal.fire("موفق", "هزینه مورد نظر ثبت گردید", "success");
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <>
      <div className="p-3 h-full bg-slate-200 flex items-center justify-center">
        <div className="flex">
          <div className="vazirfont-medium text-sm shadow-2xl bg-gradient-to-t from-slate-200 to-slate-500 rounded-3xl p-20 w-fit mx-auto">

            <div className="flex justify-between gap-2">
              <label className="flex items-center">موضوع : </label>
              <input onChange={(e)=>setTitle(e.target.value)} className="bg-slate-100 h-5 p-5 pr-3 w-72 rounded-xl items-center" type="text" value={title} />
            </div>

            <div className="mt-2 flex justify-between gap-2">
              <label className="flex items-center">مبلغ : </label>
              <input onChange={handleAmountChange} className="bg-slate-100 h-5 p-5 pr-3 w-72 rounded-xl items-center" type="text" value={amount} />
            </div>

            <div className="mt-2 flex justify-between gap-2">
              <label className="flex items-center">تاریخ : </label>
              <div className="bg-slate-100 h-10 p-3 flex items-center pr-3 w-72 rounded-xl">
                <DatePicker
                  onChange={(d) => setDate(d?.format("YYYY/MM/DD"))}
                  calendar={persian}
                  locale={persian_fa}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    width: "150%",
                    height: "150%"
                  }}
                />
              </div>

            </div>

            <div className="mt-10 w-full flex">
              <button onClick={submit} className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 p-2 pl-7 pr-7 rounded-xl mx-auto">ثبت</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
