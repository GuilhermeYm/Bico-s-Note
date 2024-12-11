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
      const defaultNote = [];
      localStorage.setItem("notes", JSON.stringify(defaultNote));
      return defaultNote;
    }
  };

  const saveNewNoteAtLocalStorage = (newNote) => {
    const getLocalStorage = localStorage.getItem("notes");
    if (getLocalStorage) {
      const parsedNotes = JSON.parse(getLocalStorage);
      const noteWithId = {
        ...newNote,
        id: Date.now(),
      };
      // Inserir a nova nota no array
      parsedNotes.push(noteWithId);
      localStorage.setItem("notes", JSON.stringify(parsedNotes));
      return true; // Retorna true para indicar sucesso
    } else {
      return false; // Retorna false em caso de falha
    }
  };

  const removeNoteAtLocalStorage = (idNote) => {
    // Remover a nota do array
    const getLocalStorage = localStorage.getItem("notes");
    if (getLocalStorage) {
      const parsedNotes = JSON.parse(getLocalStorage);
      // Remover a nota do array
      const objectNoteWIthoutNote = parsedNotes.filter(
        (note) => note.id !== idNote
      );
      const saveNewObject = localStorage.setItem(
        "notes",
        JSON.stringify(objectNoteWIthoutNote)
      );
      if (saveNewObject) {
        return true;
      } else {
        return false;
      }
    }
  };
  return {
    verifyNotesAtLocalStorage,
    saveNewNoteAtLocalStorage,
  };
}
