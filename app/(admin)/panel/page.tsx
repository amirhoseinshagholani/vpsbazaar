'use client';

import { useEffect, useState } from "react";

const Panel = () => {
  const [countUsers, setCountUsers] = useState(0);

  const count_users = async () => {
    const res_count_users = await fetch(`https://vpsbazaar.cloud/api/countOfUsers`, { cache: 'no-store' });
    console.log(res_count_users);
  }

  useEffect(() => {
    count_users();
  }, []);

  return (
    <>
      <div className="p-3 h-full">
        <div className="bg-slate-300 rounded-xl w-full h-full">
          <div className="h-10 bg-slate-400 rounded-t-xl flex">
            <div className="flex items-center vazirfont-medium pr-3 text-white">
              داشبورد
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
