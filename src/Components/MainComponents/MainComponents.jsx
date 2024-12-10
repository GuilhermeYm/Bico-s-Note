import SearchInputMainComponents from "./SearchInputMainComponent";
import DisplayOfNotesComponents from "./DisplayOfNotesComponents";
import ShowMessageComponents from "./ShowMessageComponents";

export default function MainComponents() {
  return (
    <>
      <main className="bg-backgroundMain flex-col gap-48 w-full h-mainHeight py-3">
        {/*Este aside será o campo de pesquisa */}
        <SearchInputMainComponents />
        <article className="h-articleHeight w-full text-colorText">
          {/*Messagem de notas */}
          <ShowMessageComponents />
          {/*Template da exposição das notas */}
          <DisplayOfNotesComponents />
        </article>
      </main>
    </>
  );
}
