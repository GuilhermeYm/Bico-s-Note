export default function useLocal() {
  const verifyNotesAtLocalStorage = () => {
    const getLocalStorage = localStorage.getItem("notes");
    if (getLocalStorage) {
      // Se tivermos um localStorage, irei retonar os dados já em objeto
      const parsedNotes = JSON.parse(getLocalStorage);
      console.log(parsedNotes);
      return parsedNotes;
    } else {
      // Se não tiver nenhum localStorage, tentarei criar um, e ficará vazio.:)
      const defaultNote = {};
      localStorage.setItem("notes", JSON.stringify(defaultNote));
      return defaultNote;
    }
  };

  const saveNewNoteAtLocalStorage = (newNote) => {
    const getLocalStorage = localStorage.getItem("notes");
    if (getLocalStorage) {
      // Se realmente, temos um localStorage, iremos agora adicionar a nova nota, que por enquanto teremos somente o título e as informações, por enquanto, só isso.
      const idNote = Object.keys(getLocalStorage).length + 1;
      const newObject = (getLocalStorage[idNote] = newNote);
      localStorage.setItem("notes", JSON.stringify(newObject));
    }
  };
  return {
    verifyNotesAtLocalStorage,
  };
}
