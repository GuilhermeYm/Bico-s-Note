"use client";

import { CiSearch } from "react-icons/ci";
import useLocal from "@/Hook/useLocal";

export default function SearchInputMainComponents({ setFilteredNotes }) {
  const { verifyNotesAtLocalStorage } = useLocal();
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Irei pegar o dado do resultado do input
    const allNotes = verifyNotesAtLocalStorage()
    if( !query) { 
      setFilteredNotes(null)
    } else { 
      const results = allNotes.filter((note) => 
        note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query)
      )
      setFilteredNotes(results)
    }
  };

  return (
    <aside className="flex gap-2 bg-backgroundAside w-72 items-center py-3 px-4 mx-auto rounded-md">
      <CiSearch className="text-colorText text-xl cursor-pointer" />
      <input
        className="text-colorTextAside text-sm w-full bg-transparent focus:border-0 focus:outline-0 "
        placeholder="Digite para procurar alguma nota"
        type="text"
        onChange={(e) => handleSearch(e)}
      />
    </aside>
  );
}
