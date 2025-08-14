"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

interface SurahProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: TempatTurun;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
}

enum TempatTurun {
  Madinah = "Madinah",
  Mekah = "Mekah",
}

export default function Home() {
  const { data, isLoading, isError } = useQuery<SurahProps[]>({
    queryKey: ["daftar-surah"],
    queryFn: async () => {
      const response = await axios.get("https://equran.id/api/v2/surat");
      return response.data.data;
    },
  });

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>Error 404 Not Found</p>
      </>
    );
  }

  return (
    <>
      <main className="container mx-auto p-4">
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <h1 className="font-black text-5xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mt-24">
            Al - Quran Digital
          </h1>
          <p className="mt-4 max-w-lg text-center text-slate-400">
            Baca, dengarkan, dan pelajari Al-Qur&apos;an secara online kapan
            saja dan di mana saja, disertai dengan terjemahan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-24">
            {data?.map((surah) => (
              <div
                className="flex items-center gap-8 bg-slate-800 p-4 rounded-lg border border-slate-700 cursor-pointer"
                key={surah.nomor}
              >
                <div className="size-12 rounded-lg bg-slate-700 flex justify-center items-center font-bold text-center">
                  {surah.nomor}
                </div>

                <div className="">
                  <h4 className="font-bold text-lg w-48">{surah.namaLatin}</h4>
                  <p className="text-slate-400 text-sm">{surah.arti}</p>
                </div>

                <div className="text-end">
                  <h4 className="text-2xl font-amiri text-cyan-500">
                    {surah.nama}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {surah.jumlahAyat} Ayat
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
