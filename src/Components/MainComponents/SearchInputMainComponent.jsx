"use client"

import { CiSearch } from "react-icons/ci";
import { useState  } from "react";

export default function SearchInputMainComponents() {

  return (
    <aside className="flex gap-2 bg-backgroundAside w-72 items-center py-3 px-4 mx-auto rounded-md">
      <CiSearch className="text-colorText text-xl cursor-pointer" />
      <input
        className="text-colorTextAside text-sm w-full bg-transparent focus:border-0 focus:outline-0 "
        placeholder="Digite para procurar alguma nota"
        type="text"
      />
    </aside>
  );
}
