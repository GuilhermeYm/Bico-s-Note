"use client";

import useLocal from "@/Hook/useLocal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function MainComponents() {
  const [showMessage, setShowMessage] = useState(false);
  const { verifyNotesAtLocalStorage } = useLocal();

  useEffect(() => {
    const notes = verifyNotesAtLocalStorage();
    if (Object.keys(notes).length === 0) {
      setShowMessage(true);
      console.log(Object.keys(notes).length);
    } else {
      console.log(Object.keys(notes).length);
      setShowMessage(false);
    }
  }, []);

  return (
    <>
      <main className="bg-backgroundMain flex-col gap-48 w-full h-mainHeight py-3">
        {/*Este aside será o campo de pesquisa */}
        <aside className="flex gap-2 bg-backgroundAside w-72 items-center py-3 px-4 mx-auto rounded-md">
          <CiSearch />
          <div className="text-colorTextAside text-sm">
            Digite para procurar alguma nota
          </div>
        </aside>
        <article className="h-articleHeight w-full text-colorText">
          {showMessage ? (
            <section className="mx-auto text-colorText flex items-center justify-center">
              <p>
                Você ainda não criou nenhuma anotação, por que não tenta criar
                um? <Link href={"/"}>Clique aqui</Link>
              </p>
            </section>
          ) : (
            <section>
              <p>Com notas</p>
            </section>
          )}
          {/*Template da exposição das notas */}
          <section className="">
            <div>dsadsada</div>
            <div>dasdas</div>
          </section>
        </article>
      </main>
    </>
  );
}
