"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginOfUserSchema = z.object({
  name: z.string().min(1, 'É obrigatório ter algo neste campo'),
  password: z.string()
})

export default function LoginComponents() {
  const { toast } = useToast();
  const { handleSubmit, register, formState: isValid, errors, isSubmitting } = useForm({
    resolver: zodResolver(LoginOfUserSchema),
    mode: "onBlur"
  });

  const handleLoginUser = (data) => {
    console.log(errors)
    console.log(data)
    toast({
      title: "Bem-vindo de volta ",
      description: "Estamos muito felizes de ter você aqui novamente 😊",
      action: <ToastAction altText="Fechar mensagem">Fechar</ToastAction>,
    });
  };

  return (
    <>
      <form
        className="bg-backgroundAside w-96 rounded-lg px-6 py-4 flex flex-col justify-end gap-3"
        onSubmit={handleSubmit(handleLoginUser)}
      >
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
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-3 justify-end">
          <Label htmlFor="passworwd">Senha:</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Digita a sua senha de acesso"
            {...register("password")}
          />
        </div>
        <div>
          <p className="italic text-fontMini">
            Se você não tiver nenhum login você pode fazer{" "}
            <Link
              href="/Pages/register"
              className=" transition-colors duration-500 ease-linear hover:text-colorLink"
            >
              clicando aqui
            </Link>
          </p>
        </div>
        <Button className="w-fit">Entrar</Button>
      </form>
    </>
  );
}
