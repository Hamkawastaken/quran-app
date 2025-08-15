type Surah = {
  nomor: number;
  nama: string;
  arti: string;
  namaLatin: string;
  jumlahAyat: number;
};

interface SurahCardProps {
  data: Surah[];
}

export const SurahCard = ({ data }: SurahCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-6 md:mt-12">
      {data?.map((surah) => (
        <div
          className="flex items-center justify-between gap-8 bg-slate-800 p-4 rounded-lg border border-slate-700 cursor-pointer hover:bg-gradient-to-br from-slate-800 to-250% to-cyan-500 transition-all ease-in-out hover:border-cyan-700 group"
          key={surah.nomor}
        >
          <div className="flex flex-row gap-x-4">
            {" "}
            <div className="size-12 rounded-lg bg-slate-700 group-hover:bg-cyan-500 group-hover:text-black flex justify-center items-center font-bold text-center">
              {surah.nomor}
            </div>
            <div className="">
              <h4 className="font-bold text-lg">{surah.namaLatin}</h4>
              <p className="text-slate-400 text-sm">{surah.arti}</p>
            </div>
          </div>

          <div className="text-end">
            <h4 className="text-2xl font-amiri text-cyan-500">{surah.nama}</h4>
            <p className="text-slate-400 text-sm">{surah.jumlahAyat} Ayat</p>
          </div>
        </div>
      ))}
    </div>
  );
};
