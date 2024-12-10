"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import useLocal from "@/Hook/useLocal";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { TiDelete } from "react-icons/ti";

const newNoteSchema = z.object({
  title: z
    .string()
    .min(1, "O título da nota precisa ter polo menos 1 caracter")
    .max(34, "O título só pode ter 34 caracteres"),
  content: z
    .string()
    .min(1, "O conteúdo precisa ter no mínimo 1 caracter")
    .max(7000, "O conteúdo só pode ter 7.000 caracteres"),
  description: z
    .string()
    .min(1, "A descrição precisa ter polo menos 1 caracter")
    .max(74, "A descrição precisa ter polo menos 74 caracteres"),
  Badge: z.array(
    z.object({
      nameBadge: z
        .string()
        .min(1, "A tag precisa ter um conteúdo, precisa ter mais de caracter.")
        .max(20, "A quantidade máxima de caracter que a tag pode ter, é 20"),
    })
  ),
});

export default function CreateNoteComponents() {
  const { saveNewNoteAtLocalStorage } = useLocal();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: zodResolver(newNoteSchema),
    mode: "onBlur",
  });

  // Declarando o filedArray
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Badge",
  });

  // HandleSubmit
  const handleCreateNote = (data) => {
    console.log(data);
    const savedNote = saveNewNoteAtLocalStorage(data);
    if (savedNote) {
      toast({
        title: "Bem-vindo",
        description: "Estamos muito felizes de ter você aqui 😊",
        action: <ToastAction altText="Fechar mensagem">Fechar</ToastAction>,
      });
    } else {
      toast({
        title: "Erro",
        description: "De algum erro, tente novamente ou contate o suporte",
        action: <ToastAction altText="Fechar mensagem">Fechar</ToastAction>,
      });
    }
  };

  // Função para adicionar nova tag
  const addNewTag = () => {
    append({ nameBadge: "" });
  };

  // Função para remover tag
  const removeTag = (index) => {
    remove(index);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleCreateNote)}
        className="w-formWidth bg-backgroundAside text-colorText flex flex-col justify-end gap-2 py-4 px-6 rounded-lg"
      >
        {/* Divisão para o título da anotação*/}
        <div className="flex flex-col gap-3 text-base">
          <Label htmlFor="titleNote">Título da nota</Label>
          <Input
            id="titleNote"
            name="titleNote"
            placeholder="Digite o título da sua nota"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-fontMini text-red-600 italic">
              {errors.title.message}
            </span>
          )}
        </div>
        {/* Divisão para o conteúdo da anotação*/}
        <div className="flex flex-col gap-3 text-base">
          <Label htmlFor="contentNote">Conteúdo da nota</Label>
          <Input
            id="contentNote"
            name="contentNote"
            placeholder="Digite o conteúdo que terá na nota"
            {...register("content")}
          />
          {errors.content && (
            <span className="text-fontMini text-red-600 italic">
              {errors.content.message}
            </span>
          )}
        </div>
        {/*Divisão para descrição*/}
        <div className="flex flex-col gap-3 text-base">
          <Label htmlFor="descriptionNote">Descrição da nota</Label>
          <Input
            id="descriptionNote"
            name="descriptionNote"
            placeholder="Digite uma descrição para a nota"
            {...register("description")}
          />
          {errors.description && (
            <span className="text-fontMini text-red-600 italic">
              {errors.description.message}
            </span>
          )}
        </div>
        {/* Divisão para as tags da anotação*/}
        <div className="flex flex-col gap-3 text-base">
          <div className="mb-2">
            <Label
              htmlFor="tags"
              className="text-end flex justify-between items-center text-sm"
            >
              Tags
              <Button onClick={addNewTag} type="button">
                Adicionar
              </Button>
            </Label>
          </div>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <div className="flex justify-between">
                  <Input
                    type="text"
                    id="tags"
                    name="tags"
                    {...register(`Badge.${index}.nameBadge`)}
                    placeholder="Digite a tag da nota"
                  />
                  <Button onClick={removeTag(index)}>
                    <TiDelete />
                  </Button>
                </div>
                {errors.Badge?.[index]?.nameBadge && (
                  <span className="text-fontMini text-red-600 italic">
                    {errors.Badge?.[index].message}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        {/*Divisão para a inserção de imagens */}
        <div></div>
        <Button type="submit" disabled={!isValid || isSubmitting}>
          Criar nota
        </Button>
      </form>
    </>
  );
}
