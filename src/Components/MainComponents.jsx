"use client";

import useLocal from "@/Hook/useLocal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { Badge } from "@/Components/ui/badge";

export default function MainComponents() {
  const [showMessage, setShowMessage] = useState(false);
  const { verifyNotesAtLocalStorage } = useLocal();

  useEffect(() => {
    const notes = verifyNotesAtLocalStorage();
    if (Object.keys(notes).length === 0) {
      setShowMessage(false);
      console.log(Object.keys(notes).length);
    } else {
      console.log(Object.keys(notes).length);
      setShowMessage(true);
    }
  }, []);

  return (
    <>
      <main className="bg-backgroundMain flex-col gap-48 w-full h-mainHeight py-3">
        {/*Este aside será o campo de pesquisa */}
        <aside className="flex gap-2 bg-backgroundAside w-72 items-center py-3 px-4 mx-auto rounded-md">
          <CiSearch className="text-colorText text-xl cursor-pointer" />
          <div className="text-colorTextAside text-sm">
            Digite para procurar alguma nota
          </div>
        </aside>
        <article className="h-articleHeight w-full text-colorText">
          {showMessage && (
            <section className="mx-auto text-colorText flex items-center my-64 justify-center">
              <p className="text-3xl transition-all duration-300 ease-linear hover:text-2xl">
                Você ainda não criou nenhuma anotação, por que não tenta criar
                um?{" "}
                <Link
                  href={"/"}
                  className=" transition-all duration-300 ease-linear hover:text-colorLink hover:font-bold"
                >
                  Clique aqui
                </Link>
                😊
              </p>
            </section>
          )}
          {/*Template da exposição das notas */}
          <section className="bg-backgroundAside w-noteExpo rounded-md px-3 py-2 mx-auto my-3 gap-2">
            <div className="mb-1">
              <h2 className="font-bold text-base">Título da Nota é foda para caralho</h2>
            </div>
            <div className="mb-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis laborum
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-xs text-center flex items-center font-bold">
                Tags:
              </span>
              <Badge>Livros</Badge>
            </div>
            <div>
              <span className="text-fontMini italic">Há 5 dias</span>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
