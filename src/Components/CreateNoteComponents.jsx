"use client";

import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  Badge: z.array(
    z.object({
      title: z
        .string()
        .min(1, "A tag precisa ter um conteúdo, precisa ter mais de caracter.")
        .max(20, "A quantidade máxima de caracter que a tag pode ter, é 20"),
    })
  ),
});

export default function CreateNoteComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver({ newNoteSchema }),
    mode: "onChange",
  });

  // Declarando o filedArray
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Badge",
  });

  // HandleSubmit
  const handleCreateNote = (data) => {
    console.log(data);
  };

  // Função para adicionar nova tag
  const addNewTag = () => {
    append({ title: "" });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleCreateNote)}
        className="w-formWidth bg-backgroundAside text-colorText flex flex-col justify-end gap-2 py-4 px-6 rounded-lg"
      >
        {/* Divisão para o título da anotação*/}
        <div>
          <Label htmlFor="titleNote">Título da nota</Label>
          <Input
            id="titleNote"
            name="titleNote"
            placeholder="Digite o título da sua nota"
            {...register("title")}
          />
        </div>
        {/* Divisão para o conteúdo da anotação*/}
        <div>
          <Label htmlFor="contentNote">Conteúdo da nota</Label>
          <Input
            id="contentNote"
            name="contentNote"
            placeholder="Digite o conteúdo que terá na nota"
            {...register("content")}
          />
        </div>
        {/*Divisão para descrição*/}
        <div>
          <Label htmlFor="descriptionNote">Descrição da nota</Label>
          <Input
            id="descriptionNote"
            name="descriptionNote"
            placeholder="Digite uma descrição para a nota"
            {...register("description")}
          />
        </div>
        {/* Divisão para as tags da anotação*/}
        <div>
          <Label htmlFor="tags" className="text-end flex justify-between">
            Tags <Button onClick={addNewTag}>Adicionar</Button>
          </Label>
          {fields.map((field, index) => {
            return (
              <div>
                <Input
                  type="text"
                  id="tags"
                  name="tags"
                  {...register(`Badge.${index}.title`)}
                  key={field.id}
                />
              </div>
            );
          })}
        </div>
        <Button type="submit">Criar nota</Button>
      </form>
    </>
  );
}
