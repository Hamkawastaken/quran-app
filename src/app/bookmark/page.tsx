"use client";

import Link from "next/link";
import { ArrowLeft } from "../components/Icons";
import { Ayat } from "../components/SurahDetailPage";
import { useEffect, useState } from "react";

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState<Ayat[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookmarks");
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-y-6 p-4">
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
              <h1 className="text-2xl md:text-3xl font-bold text-teal-400">
                Ayat Tersimpan
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                {bookmarks.length} ayat ditandai
              </p>
            </div>
          </div>
          {/* Empty State Card */}
          {bookmarks.length === 0 ? (
            <div className="mx-auto bg-slate-800/40 rounded-2xl p-12 text-center border border-slate-700">
              <h1>Halo</h1>
            </div>
          ) : (
            <>
              {bookmarks.map((ayat) => {
                return (
                  <div
                    key={ayat.teksArab}
                    className="mx-auto text-right mb-4 flex gap-x-4 items-center justify-between bg-slate-800/40 rounded-2xl px-4 py-8 md:p-12 border border-slate-700"
                  >
                    <div className="bg-slate-800 px-4 py-2 rounded-lg text-cyan-500 font-semibold">
                      {ayat.nomorAyat}
                    </div>
                    <div className="text-xl">{ayat.teksArab}</div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkPage;
