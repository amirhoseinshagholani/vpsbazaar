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

type Debt = {
    id: number;
    spending_id: number;
    admin_id: number;
    amount: number;
    status: number;
    creditor_id: number;
    spending_title: string;
    total_amount: string;
    creditor_fullname: string;
}

const Debts = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("0");
    const [date, setDate] = useState<any>();
    const [errors, setErrors] = useState({ mobile: "", amount: "" });
    const [data, setData] = useState<Debt[]>([]);
    const [otherAdmins, setOtherAdmins] = useState([]);
    const [spending_id, setSpending_id] = useState<Number | null>(null);

    const [paidAmout, setPaidAmount] = useState(0);
    const [unPaidAmout, setUnPaidAmount] = useState(0);

    const admin_id = Cookies.get("admin_id");

    if (!admin_id) {
        Swal.fire("خطا", "مشکلی پیش آمده است، لطفا از پنل خارج شده و مجددا وارد شوید", "error");
        return false;
    }

    const getDebts = async () => {
        const res_debts = await axios.get(`https://vpsbazaar.cloud/api/debts/${admin_id}`);
        console.log(res_debts.data);
        setData(res_debts.data);
    }


    const paid = () => {
        let sum = 0;
        data.map(d => {
            if (d.status == 1) {
                sum = sum + d.amount
            }
            setPaidAmount(sum);
        })
    }

    const ubPaid = () => {
        let sum = 0;
        data.map(d => {
            if (d.status == 0) {
                sum = sum + d.amount
            }
            setUnPaidAmount(sum);
        })
    }

    useEffect(() => {
        getDebts();
    }, []);

    useEffect(() => {
        if (data) {
            paid();
            ubPaid();
        }
    }, [data])

    const handleStatus = async (id: number) => {
        try {
            const res = await axios.get(`https://vpsbazaar.cloud/api/updateDebtStatus/${id}`);
            getDebts();

        } catch (error) {
            console.error('Error updating status:', error);
        }
    };


    const columns: MRT_ColumnDef<any>[] = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'شناسه',
                size: 80,
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
                accessorKey: 'spending_title',
                header: 'موضوع بدهی',
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
                accessorKey: 'creditor_fullname',
                header: 'نام طلبکار',
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
                header: 'مبلغ بدهی من',
                Cell: ({ cell }) => {
                    return (
                        <span className={`px-2 py-1 vazirfont-bold text-xs`}>
                            {`${formatNumber(Number(cell.getValue()))} ریال`}
                        </span>
                    )
                },
            },
            {
                accessorKey: 'total_amount',
                header: 'مبلغ کل',
                Cell: ({ cell }) => {
                    return (
                        <span className={`px-2 py-1 vazirfont-bold text-xs`}>
                            {`${formatNumber(Number(cell.getValue()))} ریال`}
                        </span>
                    )
                },
            },
            {
                accessorKey: 'status',
                header: 'وضعیت',
                Cell: ({ cell }) => {
                    const text = cell.getValue<number>();

                    let content;
                    switch (text) {
                        case 0:
                            content = <div className=" text-red-500 px-2 py-1 rounded">در انتظار</div>;
                            break;
                        case 1:
                            content = <div className=" text-green-500 px-2 py-1 rounded">پرداخت شده</div>;
                            break;
                        default:
                            content = <span>{text}</span>;
                    }

                    return (
                        <span className="px-2 py-1 vazirfont-bold text-xs">
                            {content}
                        </span>
                    );
                },
            },
            {
                accessorKey: 'change_status',
                header: '',
                Cell: ({ row }) => {
                    const id = row.original.id;
                    return (
                        <span className={`px-2 py-1 vazirfont-bold text-xs`}>
                            <button onClick={() => handleStatus(id)} className="bg-blue-300 hover:bg-blue-400 p-2 rounded">تغییر وضعیت</button>
                        </span>
                    )
                },
            },

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
                            لیست بدهی ها
                        </div>
                    </div>
                    <div className="p-2 md:p-5 vazirfont-medium text-md">
                        <div className="w-full mx-auto  p-5 md:p-0 rounded-2xl grid grid-cols-12 gap-3">

                            <div className="mt-2 gap-2 col-span-12 md:col-span-6">
                                <label className="flex text-nowrap mt-1">پرداخت شده: </label>
                                <input className="bg-slate-200 h-5 p-5 pr-3 w-full md:w-72 rounded-xl outline-0" readOnly type="text" value={formatNumber(paidAmout)} />
                            </div>

                            <div className="mt-2 gap-2 col-span-12 md:col-span-6">
                                <label className="flex  text-nowrap mt-1">پرداخت نشده: </label>
                                <input className="bg-slate-200 h-5 p-5 pr-3 w-full md:w-72 rounded-xl outline-0" readOnly type="text" value={formatNumber(unPaidAmout)} />
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

export default Debts;
