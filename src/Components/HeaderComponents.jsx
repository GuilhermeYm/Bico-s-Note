import Link from "next/link";
import LoginComponents from "./LoginHeaderComponents";

export default function HeaderComponents() {
  return (
    <>
      <header className="flex justify-between bg-backgroundHeader h-20 shadow-md text-colorText items-center">
        <h1 className="text-3xl ml-3">
          <Link href="/">Bico's Note</Link>
        </h1>
        <ul className="flex gap-4 mr-3 items-center">
          <li className="transition-colors duration-300 ease-linear hover:border hover:border-backgroundButton hover:bg-backgroundButton py-2 px-4 rounded-md">
            <Link href="/Pages/createNote">Criar nota</Link>
          </li>
          {/*componente que eu criei separadamente para fazer a funcionalidade de verificar se o cara está logado ou não, entre outras coisas */}
          <LoginComponents />
          <li>Contato</li>
        </ul>
      </header>
    </>
  );
}
