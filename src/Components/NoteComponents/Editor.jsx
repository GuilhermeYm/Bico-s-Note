import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import js from "highlight.js/lib/languages/javascript";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import { all } from "lowlight";
import {
  RxChatBubble,
  RxChevronDown,
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
} from "react-icons/rx";

const lowlight = createLowlight(all);

lowlight.register("js", js);

import "highlight.js/styles/tokyo-night-dark.css";
import BubbleButtonComponents from "./BubbleButtonComponents";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    onUpdate(editor) { 
      editor.editor.getJSON
    },
    content: "Digite algo para começar",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none overflow-y-scroll",
      },
    },
    immediatelyRender: false,
  });

  return (
    <>
      <main className="w-full h-full overflow-">
        <EditorContent editor={editor} />
        {editor && (
          <BubbleMenu
            editor={editor}
            className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          >
            <BubbleButtonComponents>
              Text
              <RxChevronDown className="w-4 h-4" />
            </BubbleButtonComponents>
            <BubbleButtonComponents>
              <RxChatBubble className="w-4 h-4" />
              Commentar
            </BubbleButtonComponents>
            <div className="flex items-center">
              {/*Divisão para os fonts styles */}
              <BubbleButtonComponents
                onClick={() => editor.chain().focus().toggleBold().run()}
                data-active={editor.isActive("bold")}
              >
                <RxFontBold className="w-4 h-4" />
              </BubbleButtonComponents>

              <BubbleButtonComponents
                onCLick={() => editor.chain().focus().toggleItalic().run()}
                data-active={editor.isActive("italic")}
              >
                <RxFontItalic className="w-4 h-4" />
              </BubbleButtonComponents>

              <BubbleButtonComponents
                onClick={() => editor.chain().focus().toggleStrike().run()}
                data-active={editor.isActive("strike")}
              >
                <RxStrikethrough className="w-4 h-4" />
              </BubbleButtonComponents>

              <BubbleButtonComponents
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                data-active={editor.isActive("codeBlock")}
              >
                <RxCode className="w-4 h-4" />
              </BubbleButtonComponents>
            </div>
          </BubbleMenu>
        )}
      </main>
    </>
  );
}
