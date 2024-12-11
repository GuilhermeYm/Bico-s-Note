"use client"
import SearchInputMainComponents from "./SearchInputMainComponent";
import DisplayOfNotesComponents from "./DisplayOfNotesComponents";
import ShowMessageComponents from "./ShowMessageComponents";
import { useState } from "react";

export default function MainComponents() {
  const [filteredNotes, setFilteredNotes] = useState(null); // Se for null, exibirá todas as notas, se não for null, exibirá as notas buscadas pelo user

  return (
    <>
      <main className="bg-backgroundMain flex-col gap-48 w-full h-mainHeight py-3">
        {/*Este aside será o campo de pesquisa */}
        <SearchInputMainComponents setFilteredNotes={setFilteredNotes}/> {/*Nós saberemos se o usuário pesquisou ou não alguma nota, se o estado do filteredNotes mudou ou não, então, isso acontecerá dentro do componente.... */}
        <article className="h-articleHeight w-full text-colorText">
          {/*Messagem de notas */}
          <ShowMessageComponents />
          {/*Template da exposição das notas */}
          <DisplayOfNotesComponents filteredNotes={filteredNotes}/> {/*Como o DisplayOfNotesComponents, exige o filteredNotes, ele receberá as notas buscadas, caso sejam busacadas.  */}
        </article>
      </main>
    </>
  );
}
