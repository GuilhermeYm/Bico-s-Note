"use client";

import HeaderComponents from "@/Components/HeaderComponents";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import useLocal from "@/Hook/useLocal";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  // States
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [badge, setBadge] = useState("");
  const { saveNewNoteAtLocalStorage } = useLocal();

  // HandleSubmit
  const handleSubmit = () => {
    e.preventDefault();

    // Criar descrição
    const description = content.slice(0, 76) + "...";

    const templteNote = {
      title: title,
      content: content,
      tags: dasçkjaslçkjdsa,
      description: description,
    };
    const createNewNote = saveNewNoteAtLocalStorage();
  };

  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight">
        <form onSubmit={(e) => handleSubmit()}>
          {/* Divisão para o título da anotação*/}
          <div>
            <Label htmlFor="titleNote">Título da nota</Label>
            <Input
              id="titleNote"
              name="titleNote"
              placeholder="Digite o título da sua nota"
              onChange={(e) => setTitle(e.value)}
              value={title}
            />
          </div>
          {/* Divisão para o conteúdo da anotação*/}
          <div>
            <Label htmlFor="contentNote">Conteúdo da nota</Label>
            <Input
              id="contentNote"
              name="contentNote"
              placeholder="Digite o conteúdo que terá na nota"
              onChange={(e) => setContent(e.value)}
            />
          </div>
          {/* Divisão para as tags da anotação*/}
          <div></div>
        </form>
        {/*Divisão para perguntas*/}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              O que eu devo por na nota ?
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Coloque o conteúdo das anotações das aulas</li>
                <li>Escreva pontos importantes que você poderá utilizar futuramente</li>
                <li>Você também inserir</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como que o sistema vai formar as <b>descrições</b>?
            </AccordionTrigger>
            <AccordionContent>
              O sistema irá cortar o conteúdo em até 76 caracteres, e assim formar a descrição.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger></AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
