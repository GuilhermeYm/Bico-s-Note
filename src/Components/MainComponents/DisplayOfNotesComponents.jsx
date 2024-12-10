"use client";

import { useEffect, useState } from "react";
import useLocal from "@/Hook/useLocal";
import { Badge } from "@/Components/ui/badge";

export default function DisplayOfNotesComponents({ filteredNotes }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const { verifyNotesAtLocalStorage } = useLocal();

  useEffect(() => {
    try {
      const notes = verifyNotesAtLocalStorage();
      if (notes) {
        setNotes(notes);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }, []);

  const notesToDisplay = filteredNotes || notes; 

  if (error) {
    return (
      <p>Não foi possível carregar as notas. Tente novamente mais tarde.</p>
    );
  }

  return (
    <>
      {notesToDisplay.map((note) => (
        <section
          key={note.id || note.title}
          className="bg-backgroundAside w-noteExpo rounded-md px-3 py-2 mx-auto my-3 gap-2 cursor-pointer hover:scale-125 hover:my-8 hover:mb-8 transition-transform duration-300 ease-in-out"
        >
          <div className="mb-1">
            <h2 className="font-bold text-base">{note.title}</h2>
          </div>
          <div className="mb-2">
            <p className="text-sm">{note.content}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-xs text-center flex items-center font-bold">
              Tags:
            </span>
            {note.Badge.map((tag, index) => (
              <Badge key={index}>{tag.nameBadge}</Badge>
            ))}
          </div>
          <div>
            <span className="text-fontMini italic">Há 5 dias</span>
          </div>
        </section>
      ))}
    </>
  );
}
