'use client';

const Header = () => {
    const exit = () => {
        alert("hi");
    }
    return (
        <>
            <header className="">
                <div className="flex h-10 w-full bg-[#c92e93] justify-between">
                    <div className="flex items-center vazirfont-medium text-sm text-white pr-5">کاربر گرامی، خوش آمدید</div>
                    <div className="flex items-center vazirfont-medium text-sm text-black pl-10">
                        <button onClick={exit} className="bg-white hover:bg-gray-200 p-1 rounded-lg pr-5 pl-5">خروج</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;



