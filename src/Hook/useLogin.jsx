export default function useLogin() {
  // Função para verificar a existência de um localStorage ou não.
  const verifyLogined = () => {
    const getLocalStorage = localStorage.getItem("user");

    if (getLocalStorage) {
      // Parse o dado do localStorage para um objeto
      const dataParsed = JSON.parse(getLocalStorage);

      // Verifique o valor de isLogined
      if (dataParsed.isLogined) {
        return true; // Usuário está logado
      } else {
        return false; // Usuário não está logado
      }
    } else {
      // Se não houver nenhum dado no localStorage, cria um padrão
      const userData = {
        name: false,
        email: false,
        password: false,
        isLogined: false,
      };

      // Armazena o objeto padrão no localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      return false;
    }
  };

  // Função para criar um novo login no localStorage
  const createLogin = (userData) => {
    // Pegando os dados do localStorage
    const getLocalStorage = localStorage.getItem("user");

    //Se existir um localStorage, iremos atualizar os dados
    if (getLocalStorage) {
      const dataParsed = JSON.parse(getLocalStorage);
      const updateData = { ...dataParsed, ...userData, isLogined: true };
      localStorage.setItem("user", JSON.stringify(updateData));
    } else {
      // Se não tiver um localStorage, iremos criar um, já com os dados atualizados
      const newUser = { ...userData, isLogined: true };
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  };

  return { verifyLogined, createLogin };
}
