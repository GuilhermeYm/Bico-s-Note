import HeaderComponents from "@/Components/HeaderComponents";

export default function Page() {
  return (
    <>
      <HeaderComponents /> 
      <main className="bg-backgroundMain h-mainHeight text-colorText flex flex-col gap-5 justify-center items-center">
        <span>Olá, seja bem-vindo ao <b>Bico's Note</b>. Tomare que você tenha uma boa experiência.</span>
        <form className="bg-backgroundAside w-96 rounded-lg px-4 py-2">
          <span>Formulário</span>
        </form>
      </main>
    </>
  );
}
