"use client";

import Editor from "@/Components/Editor";
import HeaderComponents from "@/Components/HeaderComponents";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const idNote = pathName.split("/").pop();

  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight">
        <Editor />
      </main>
    </>
  );
}
