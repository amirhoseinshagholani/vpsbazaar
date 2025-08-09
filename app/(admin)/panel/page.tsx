'use client';

import axios from "axios";
import { useEffect, useState } from "react";

const Panel = () => {
  const [countUsers, setCountUsers] = useState(0);
  const [countOrders, setCountOrders] = useState(0);
  const [countActiveOrders, setCountActiveOrders] = useState(0);
  const [countPendingOrders, setCountPendingOrders] = useState(0);

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



  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="p-3 h-full bg-slate-200 flex items-center justify-center">
        <div className="flex">
          <div className="vazirfont-medium text-sm shadow-2xl bg-gradient-to-t from-slate-200 to-slate-500 rounded-3xl p-20 w-fit mx-auto">
            <div className="flex justify-between gap-2">
              <label className="flex items-center">تعداد کاربران: </label>
              <input className="bg-slate-100 h-5 p-5 pr-3 w-70 rounded-xl items-center" type="text" value={`${countUsers} نفر`} readOnly />
            </div>
            <div className="mt-2 flex justify-between gap-2">
              <label className="flex items-center">تعداد کل سفارشات: </label>
              <input className="bg-slate-100 h-5 p-5 pr-3 w-70 rounded-xl items-center" type="text" value={`${countOrders}`} readOnly />
            </div>
            <div className="mt-2 flex justify-between gap-2">
              <label className="flex items-center">تعداد سفارشات فعال: </label>
              <input className="bg-slate-100 h-5 p-5 pr-3 w-70 rounded-xl items-center" type="text" value={`${countActiveOrders}`} readOnly />
            </div>
            <div className="mt-2 flex justify-between gap-2">
              <label className="flex items-center">تعداد سفارشات درانتظار: </label>
              <input className="bg-slate-100 h-5 p-5 pr-3 w-70 rounded-xl items-center" type="text" value={`${countPendingOrders}`} readOnly />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
