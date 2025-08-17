'use client';

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import formatNumber from "@/functions/formatNumber";
import toJalaliDate from "@/functions/jalaliDate";

type Order = {
  id: number;
  ordernum: string;
  userid: number;
  contactid: number;
  requestor_id: number;
  admin_requestor_id: number;
  date: string;
  amount: number;
  invoiceid: number;
  status: string;
  customer_name: string;
}

const Panel = () => {
  const [countUsers, setCountUsers] = useState(0);
  const [countOrders, setCountOrders] = useState(0);
  const [countActiveOrders, setCountActiveOrders] = useState(0);
  const [countPendingOrders, setCountPendingOrders] = useState(0);
  const [data, setData] = useState<Order[]>([]);

  const getInfo = async () => {
    const res_count_users = await axios.get(`https://vpsbazaar.cloud/api/countOfUsers`);
    const res_count_orders = await axios.get(`https://vpsbazaar.cloud/api/countOfOrders`);
    const res_count_active_orders = await axios.get(`https://vpsbazaar.cloud/api/countOfActiveOrders`);
    const res_count_pending_orders = await axios.get(`https://vpsbazaar.cloud/api/countOfPendingOrders`);
    setCountUsers(res_count_users.data[0].count);
    setCountOrders(res_count_orders.data[0].count);
    setCountActiveOrders(res_count_active_orders.data[0].count);
    setCountPendingOrders(res_count_pending_orders.data[0].count);
  }

  const getOrders = async () => {
    const res_orders = await axios.get(`https://vpsbazaar.cloud/api/orders`);
    // console.log(res_orders.data);

    setData(res_orders.data);
  }

  useEffect(() => {
    getInfo();
    getOrders();
  }, []);

  const columns: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: 'ordernum',
        header: 'شماره سفارش',
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
        accessorKey: 'customer_name',
        header: 'نام مشتری',
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
              داشبورد - لیست سفارشات
            </div>
          </div>
          <div className="p-2 md:p-10 vazirfont-medium text-sm">
            <div className="grid grid-cols-12 gap-3 w-full mx-auto  p-3 md:p-0 rounded-2xl grid grid-cols-12 gap-3">
              
              <div className="col-span-12 md:col-span-6">

                <div className="justify-between gap-2 col-span-12 md:col-span-3">
                  <label className="flex items-center text-nowrap">تعداد کاربران: </label>
                  <input className="bg-slate-100 h-5 p-5 pr-3 w-full md:w-70 rounded-xl items-center" type="text" value={`${countUsers} نفر`} readOnly />
                </div>
                <div className="col-span-6 justify-between gap-2 col-span-12 md:col-span-3 mt-3">
                  <label className="flex items-center text-nowrap">تعداد کل سفارشات: </label>
                  <input className="bg-slate-100 h-5 p-5 pr-3 w-full md:w-70 rounded-xl items-center" type="text" value={`${countOrders}`} readOnly />
                </div>

              </div>
              <div className="col-span-12  md:col-span-6">

                <div className="col-span-6 justify-between gap-2 col-span-12 md:col-span-3">
                  <label className="flex items-center text-nowrap">تعداد سفارشات فعال: </label>
                  <input className="bg-slate-100 h-5 p-5 pr-3 w-full md:w-70 rounded-xl items-center" type="text" value={`${countActiveOrders}`} readOnly />
                </div>
                <div className="col-span-6 justify-between gap-2 col-span-12 md:col-span-3 mt-3">
                  <label className="flex items-center text-nowrap">تعداد سفارشات درانتظار: </label>
                  <input className="bg-slate-100 h-5 p-5 pr-3 w-full md:w-70 rounded-xl items-center" type="text" value={`${countPendingOrders}`} readOnly />
                </div>

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

export default Panel;
