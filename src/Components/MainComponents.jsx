"use client";

import useLocal from "@/Hook/useLocal";
import { useEffect, useState } from "react";

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
      <main className="bg-backgroundMain flex-col gap-48 w-full h-mainHeight">
        <aside>Asided</aside>
        <article>
            article
            <section></section>
        </article>
      </main>
    </>
  );
}
