"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { SurahCard } from "./components/SurahCard";

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
          <h1 className="font-black text-2xl md:text-5xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mt-12 md:mt-24">
            Al - Quran Digital
          </h1>
          <p className="mt-4 text-xs md:text-lg max-w-md md:max-w-lg text-center text-slate-400">
            Baca, dengarkan, dan pelajari Al-Qur&apos;an secara online kapan
            saja dan di mana saja, disertai dengan terjemahan
          </p>

          <SurahCard data={data ?? []} />
        </div>
      </main>
    </>
  );
}
