"use client";

import Link from "next/link";
import { ArrowLeft, Bookmark } from "../components/Icons";

const BookmarkPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-64 mx-auto md:w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Link
              href={"/"}
              className="flex items-center gap-2 md:mb-8 mb-4 group"
            >
              <ArrowLeft className="size-4 group-hover:text-cyan-500 transition-all" />
              <button
                onClick={() => history.back()}
                className="hidden md:flex text-sm md:text-lg cursor-pointer group-hover:text-cyan-500 transition-all"
              >
                Kembali
              </button>
            </Link>

            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold text-teal-400">
                Ayat Tersimpan
              </h1>
              <p className="text-gray-400 text-sm">0 ayat ditandai</p>
            </div>
          </div>
          {/* Empty State Card */}
          <div className="mx-auto bg-slate-800/40 rounded-2xl p-12 text-center border border-slate-700">
            <div className="flex justify-center mb-6">
              <Bookmark className="size-12" />
            </div>
            <h2 className="text-base md:text-lg font-semibold mb-2">
              Belum Ada Ayat Tersimpan
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mb-8">
              Tandai ayat favorit Anda di halaman detail surah untuk
              menyimpannya di sini.
            </p>
            <Link
              href="/"
              className="px-4 md:px-6 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white text-sm md:text-base font-medium"
            >
              Mulai Membaca
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookmarkPage;
