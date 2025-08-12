'use client';

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import formatNumber from "@/functions/formatNumber";
import toJalaliDate from "@/functions/jalaliDate";
import Swal from "sweetalert2";

type Message = {
  id: number;
  title: string;
  content: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
}

const Messages = () => {
  const [data, setData] = useState<Message[]>([]);

  const getMessages = async () => {
    const res_messages = await axios.get(`https://vpsbazaar.cloud/api/messages`);
    // console.log(res_messages.data);

    setData(res_messages.data);
  }

  useEffect(() => {
    getMessages();
  }, []);

  const showMessage = (text: string) => {
    Swal.fire("متن پیام", text, "info");
    return;
  }

  const columns: MRT_ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: 'first_name',
        header: 'نام',
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
        accessorKey: 'last_name',
        header: 'نام خانوادگی',
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
        accessorKey: 'content',
        header: 'متن پیام',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>() || '';
          let words = text.split(/\s+/); // جدا کردن بر اساس فاصله
          let shortText = words.length > 5
            ? words.slice(0, 5).join(' ') + '...'
            : text;

          return (
            <span className="px-2 py-1 vazirfont-bold text-xs">
              {shortText}
            </span>
          );
        },
      },
      {
        accessorKey: 'created_at',
        header: 'تاریخ',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>();
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              {toJalaliDate(text)}
            </span>
          );
        },
      }, {
        accessorKey: 'content',
        header: '',
        Cell: ({ cell }) => {
          let text = cell.getValue<string>();
          return (
            <span className={`px-2 py-1 vazirfont-bold text-xs`}>
              <button className="bg-green-400 hover:bg-green-500 p-2 rounded-lg" onClick={() => showMessage(text)}>مشاهده متن پیام</button>
            </span>
          );
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
              پیام ها
            </div>
          </div>
          <div className="mt-5 p-2">
            <MaterialReactTable table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
