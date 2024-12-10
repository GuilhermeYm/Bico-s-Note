"use client";

import { useEffect, useState } from "react";
import useLocal from "@/Hook/useLocal";
import Link from "next/link";

export default function ShowMessageComponents() {
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
      {showMessage && (
        <section className="mx-auto text-colorText flex items-center my-64 justify-center">
          <p className="text-3xl transition-all duration-300 ease-linear hover:text-2xl">
            Você ainda não criou nenhuma anotação, por que não tenta criar um?{" "}
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
    </>
  );
}
