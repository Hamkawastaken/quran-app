import Link from "next/link";
import { Bookmark, SearchIcon } from "./Icons";

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) => {
  return (
    <>
      <div className="mt-8">
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 flex justify-center items-center px-3 md:px-5">
            <SearchIcon className="size-3 md:size-5 text-slate-500" />
          </span>
          <Link
            href={"/bookmark"}
            className="absolute inset-y-3 rounded-full right-3 flex justify-center items-center border border-cyan-600 px-3 bg-cyan-950 cursor-pointer"
          >
            <Bookmark className="size-3 md:size-5 mr-2 text-cyan-500" />
            <p className="text-sm font-semibold text-cyan-500">Bookmarks</p>
          </Link>
          <input
            type="text"
            placeholder="Cari Nama Surah Disini..."
            className="bg-slate-800 border text-xs text-slate-400 md:text-base border-slate-700 rounded-full w-64 md:w-[524px] px-8 md:px-12 py-2 md:py-4 outline-none focus:outline-none focus:outline-0"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
