import { ArrowLeft, Bookmark } from "@/app/components/Icons";

const SurahPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-3xl bg-slate-800 p-4 rounded-lg border border-slate-700 px-4">
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
              Al - Baqarah
            </h2>
            <h1 className="font-amiri text-4xl mt-2 font-bold">البقرة</h1>
            <p className="mt-2 text-slate-500">Sapi</p>
            <div className="flex flex-row gap-x-2 mt-2">
              <div className="bg-slate-700 text-slate-500 rounded-full px-3 py-1">
                286 Ayat
              </div>
              <div className="bg-slate-700 text-slate-500 rounded-full px-3 py-1">
                Madinah
              </div>
            </div>
          </div>
        </div>

        <div className="w-3xl border-slate-500">
          <div className="flex flex-col mt-12 gap-4">
            <div className="size-12 rounded-lg text-cyan-500 bg-slate-800 flex items-center font-bold justify-center">
              1
            </div>
            <div className="font-amiri text-2xl place-self-end ">
              وَاِذَا قِيْلَ لَهُمْ لَا تُفْسِدُوْا فِى الْاَرْضِۙ قَالُوْٓا
              اِنَّمَا نَحْنُ مُصْلِحُوْنَ
            </div>
            <div className="italic text-slate-500">
              Wa iżā qīla lahum lā tufsidū fil-arḍ(i), qālū innamā naḥnu
              muṣliḥūn(a).
            </div>
            <div className="">
              Apabila dikatakan kepada mereka, “Janganlah berbuat kerusakan di
              bumi,” mereka menjawab, “Sesungguhnya kami hanyalah orang-orang
              yang melakukan perbaikan.”
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurahPage;
