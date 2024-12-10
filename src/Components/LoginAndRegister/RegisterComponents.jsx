"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const caracteresEspeciaisRegex = /[!@#$%^&*(),.?":{}|<>]/;

const createRegisterOfUserSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    password: z
      .string()
      .min(6, "A senha precisa no mínimo 6 caracteres")
      .regex(caracteresEspeciaisRegex, "A senha precisa polo menos ter um dos caraceteres especiais, como @!#...."),
    confirmPassword: z
      .string()
      .min(6, "A confirmação da senha precisa no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Aponta o erro para o campo correto
  });

export default function RegisterComponents() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(createRegisterOfUserSchema),
    mode: "onBlur",
  });

  const handleRegisterNewUser = (data) => {
    console.log(formState.errors);
    console.log(data);
    toast({
      title: "Bem-vindo",
      description: "Estamos muito felizes de ter você aqui 😊",
      action: <ToastAction altText="Fechar mensagem">Fechar</ToastAction>,
    });
  };

  return (
    <>
      <form
        className="bg-backgroundAside w-96 rounded-lg px-6 py-4 flex flex-col justify-end gap-3"
        onSubmit={handleSubmit(handleRegisterNewUser)}
      >
        <div className="w-full">
          <h2 className="text-lg text-center">Formulário de cadastro</h2>
        </div>
        <div className="flex flex-col gap-3 justify-end">
          <Label htmlFor="name" className="text-base">
            Nome:
          </Label>
          <Input
            id="name"
            name="name"
            type="name"
            placeholder="Insira o nome de usuário"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-fontMini text-red-600 italic">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 justify-end">
          <Label htmlFor="password">Senha:</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Digita a sua senha de acesso"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-fontMini text-red-600 italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirmar senha:</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Digite novamente a senha"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-fontMini text-red-600 italic">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-fit"
          disabled={!isValid || isSubmitting}
        >
          Entrar
        </Button>
      </form>
    </>
  );
}
