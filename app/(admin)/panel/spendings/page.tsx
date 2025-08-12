'use client';

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Swal from "sweetalert2";
import formatNumber from "@/functions/formatNumber";
import unformatNumber from "@/functions/unformatNumber";
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import ToEnglishDigits from "@/functions/toEnglishDigits";
import toJalaliDate from "@/functions/jalaliDate";
import Cookies from 'js-cookie';

dayjs.extend(jalaliday);

type Spending = {
  id: number;
  admin_id: number;
  title: string;
  amount: number;
  date: string;
  admin_name: string;
}

// type Admin = {
//   id: number;
// }

const Spendings = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const [date, setDate] = useState<any>();
  const [errors, setErrors] = useState({ mobile: "", amount: "" });
  const [data, setData] = useState<Spending[]>([]);
  const [otherAdmins, setOtherAdmins] = useState([]);
  // const [spending_id, setSpending_id] = useState<Number | null>(null);
  const admin_id = Cookies.get("admin_id");

  if (!admin_id) {
    Swal.fire("خطا", "مشکلی پیش آمده است، لطفا از پنل خارج شده و مجددا وارد شوید", "error");
    return false;
  }

  const getSpending = async () => {
    const res_spending = await axios.get(`https://vpsbazaar.cloud/api/spending`);
    setData(res_spending.data);
  }

  const getOtherAdmins = async () => {
    const res_otherAdmins = await axios.get(`https://vpsbazaar.cloud/api/otherAdmins/${admin_id}`);
    // console.log(res_otherAdmins.data);

    setOtherAdmins(res_otherAdmins.data);
  }

  const insertDebts = async (spending_id:number) => {
    const debt = unformatNumber(amount) / 3;
    console.log(otherAdmins);
    try {
      for (let i = 0; i <= otherAdmins.length-1; i++) {
        await axios.post("https://vpsbazaar.cloud/api/insertDebts", { 
          spending_id: spending_id,
          admin_id: otherAdmins[i]['id'],
          amount: debt
        });
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getSpending();
    getOtherAdmins();
  }, []);

  // useEffect(()=>{
  //   insertDebts();
  // },[otherAdmins])


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

    const englishDigitsDate = ToEnglishDigits(date); // تبدیل اعداد فارسی
    const gregorianDate = dayjs(englishDigitsDate, { jalali: true }).format("YYYY-MM-DD"); // تبدیل به میلادی

    try {
      const res = await axios.post("https://vpsbazaar.cloud/api/insertSpend", {
        admin_id: admin_id,
        title: title,
        amount: unformatNumber(amount),
        date: gregorianDate
      });

      // console.log("Inserted:", res.data.insertId);
      // setSpending_id(res.data.insertId);
      insertDebts(res.data.insertId);
      Swal.fire("موفق", "هزینه مورد نظر ثبت گردید", "success");
      setTitle("");
      setAmount("");
      setDate(null);
      getSpending();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const columns: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: 'admin_name',
        header: 'پرداخت کننده',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>();
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              {text}
            </span>
          );
        },
      },
      {
        accessorKey: 'title',
        header: 'موضوع',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>();
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              {text}
            </span>
          );
        },
      },
      {
        accessorKey: 'amount',
        header: 'مبلغ',
        Cell: ({ cell }) => {
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              {`${formatNumber(Number(cell.getValue()))} ریال`}
            </span>
          )
        },
      },
      {
        accessorKey: 'date',
        header: 'تاریخ',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>();
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              {toJalaliDate(text)}
            </span>
          );
        },
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowNumbers: true,
    enableColumnResizing: true,
    enableStickyHeader: true,
    layoutMode: 'grid', // یا 'semantic' بسته به نیاز
  });

  return (
    <>
      <div className="p-3 h-full">
        <div className="bg-slate-300 rounded-xl w-full h-full">
          <div className="h-10 bg-purple-500 rounded-t-xl flex">
            <div className="flex items-center vazirfont-medium pr-3 text-white">
              ثبت هزینه
            </div>
          </div>
          <div className="p-3 md:p-5 vazirfont-medium text-sm">
            <div className="w-full mx-auto  p-5 md:p-0 rounded-2xl grid grid-cols-12 gap-3">

              <div className="mt-2 gap-2 col-span-12 md:col-span-3">
                <label className="flex text-nowrap mt-1">موضوع : </label>
                <input onChange={(e) => setTitle(e.target.value)} className="bg-slate-100 h-5 p-5 pr-3 w-full  rounded-xl" type="text" value={title} />
              </div>

              <div className="mt-2 gap-2 col-span-12 md:col-span-3">
                <label className="flex  text-nowrap mt-1">مبلغ(ریال) : </label>
                <input onChange={handleAmountChange} className="bg-slate-100 h-5 p-5 pr-3 w-full rounded-xl " type="text" value={amount} />
              </div>

              <div className="mt-2 gap-2 col-span-12 md:col-span-3">
                <label className="flex  text-nowrap mt-1">تاریخ : </label>
                <div className="bg-slate-100 h-10 p-1 text-center pr-3 w-full  rounded-xl">
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

              <div className="w-full flex col-span-3 items-center">
                <button onClick={submit} className="mt-7 bg-gradient-to-r from-green-300 to-green-500 hover:from-green-600 hover:to-green-800 h-10 pl-7 pr-7 rounded-xl mx-auto">ثبت</button>
              </div>
            </div>
            <div className="mt-5">
              <MaterialReactTable table={table} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spendings;
