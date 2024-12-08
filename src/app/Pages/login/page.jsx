"use client";

import HeaderComponents from "@/Components/HeaderComponents";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export default function Page() {
  const { toast } = useToast();
  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight text-colorText flex flex-col gap-5 justify-center items-center">
        <span>
          Olá, seja bem-vindo ao <b>Bico's Note</b>. Tomare que você tenha uma
          boa experiência.
        </span>
        <form className="bg-backgroundAside w-96 rounded-lg px-4 py-2">
          <span>Formulário</span>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
            }}
          >
            Add to calendar
          </Button>
        </form>
      </main>
    </>
  );
}
