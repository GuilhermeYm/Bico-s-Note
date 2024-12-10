import HeaderComponents from "@/Components/HeaderComponents";
import CreateNoteComponents from "@/Components/createNoteComponents";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {

  return (
    <>
      <HeaderComponents />
      <main className="bg-backgroundMain h-mainHeight w-full flex flex-col justify-center items-center">
        <CreateNoteComponents />
        {/*Divisão para perguntas*/}
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>O que eu devo por na nota ?</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Coloque o conteúdo das anotações das aulas</li>
                  <li>
                    Escreva pontos importantes que você poderá utilizar
                    futuramente
                  </li>
                  <li>Você também inserir</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Como que o sistema vai formar as <b>descrições</b>?
              </AccordionTrigger>
              <AccordionContent>
                O sistema irá cortar o conteúdo em até 76 caracteres, e assim
                formar a descrição.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <span>Se quiser enviar a sua própria pergunta, clique aqui</span>
        </div>
      </main>
    </>
  );
}
