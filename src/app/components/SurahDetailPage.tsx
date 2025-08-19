import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Bookmark } from "./Icons";
import axios from "axios";
import Spinner from "./Spinner";

export interface AyatProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
  ayat: Ayat[];
  suratSelanjutnya: SuratSenya;
  suratSebelumnya: SuratSenya;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: { [key: string]: string };
}

export interface SuratSenya {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

type SurahDetailPageProps = {
  params: {
    nomor: string;
  };
};

export const SurahDetailPage = ({ params }: SurahDetailPageProps) => {
  const { nomor } = params;

  const { data, isLoading, isError } = useQuery<AyatProps>({
    queryKey: ["surah", nomor],
    queryFn: async () => {
      const response = await axios.get(
        `https://equran.id/api/v2/surat/${nomor}`
      );
      return response.data.data;
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <main className="min-h-screen grid place-items-center">
        <Spinner size={48} border={5} />
        {/* atau kecil: <Spinner size={24} border={3} /> */}
      </main>
    );
  }

  if (isError) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <p className="font-black text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Error 404 Not Found
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-3xl bg-slate-800 p-4 rounded-lg border border-slate-700 px-4 mt-12">
          <div className="flex justify-between font-medium">
            <div className="flex justify-between gap-x-2 items-center">
              <ArrowLeft />
              <div>Daftar Surah</div>
            </div>
            <div className="flex justify-between gap-x-2 items-center">
              <Bookmark />
              <div>Bookmark</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {data?.namaLatin}
            </h2>
            <h1 className="font-amiri text-4xl mt-2 font-bold">{data?.nama}</h1>
            <p className="mt-2 text-slate-500">{data?.arti}</p>
            <div className="flex flex-row gap-x-2 mt-2">
              <div className="bg-slate-700 text-slate-500 rounded-full px-3 py-1">
                {data?.jumlahAyat} Ayat
              </div>
              <div className="bg-slate-700 text-slate-500 rounded-full px-3 py-1">
                {data?.tempatTurun}
              </div>
            </div>
          </div>
        </div>

        <div className="w-3xl border-slate-500">
          {data?.ayat.map((surah) => {
            return (
              <div className="flex flex-col mt-12 gap-4" key={surah.nomorAyat}>
                <div className="size-12 rounded-lg text-cyan-500 bg-slate-800 flex items-center font-bold justify-center">
                  {surah.nomorAyat}
                </div>
                <div className="font-amiri text-2xl place-self-end text-end ">
                  {surah.teksArab}
                </div>
                <div className="italic text-slate-500">{surah.teksLatin}</div>
                <div className="">{surah.teksIndonesia}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
