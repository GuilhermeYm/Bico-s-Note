"use client";

import HeaderComponents from "@/Components/HeaderComponents";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import Link from "next/link";

export default function Page() {
  const { toast } = useToast();
  
  const handleSubmit = (e) => { 
    e.preventDefault()
  }
  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight text-colorText flex flex-col gap-5 justify-center items-center">
        <form className="bg-backgroundAside w-96 rounded-lg px-6 py-4 flex flex-col justify-end gap-3" onSubmit={(e) => handleSubmit()}>
          <div className="w-full">
            <h2 className="text-lg text-center">Formulário de login</h2>
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <Label htmlFor="name" className="text-base">
              Nome:
            </Label>
            <Input
              id="name"
              type="name"
              name="name"
              placeholder="Insira o nome de usuário"
            />
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <Label htmlFor="passworwd">Senha:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Digita a sua senha de acesso"
            />
          </div>
          <div>
            <p className="italic text-fontMini">Se você não tiver nenhum login você pode fazer <Link href="/Pages/register" className="hover:text-colorLink transition-colors duration-500 ease-linear">clicando aqui</Link></p>
          </div>
          <Button
            className="w-fit"
            onClick={(e) => {
              toast({
                title: "Bem-vindo de volta ",
                description:
                  "Estamos muito felizes de ter você aqui novamente 😊",
                action: (
                  <ToastAction altText="Fechar mensagem">Fechar</ToastAction>
                ),
              });
              e.preventDefault();
            }}
          >
            Entrar
          </Button>
        </form>
      </main>
    </>
  );
}
