import HeaderComponents from "@/Components/HeaderComponents";
import LoginComponents from "@/Components/LoginAndRegister/LoginComponents";

export default function Page() {
  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight text-colorText flex flex-col gap-5 justify-center items-center">
        <LoginComponents />
      </main>
    </>
  );
}
