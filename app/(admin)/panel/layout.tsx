import { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";
import "@/public/css/font.css";
import "@/public/css/style.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  robots: "noindex, nofollow"
};

export default function PanelLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <html dir="rtl">
        <body className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow grid grid-cols-12">
            <div className="col-span-2 bg-gradient-to-t from-slate-200 to-slate-700">
              <Sidebar />
            </div>
            <div className="col-span-10 ">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </>

  );
}
