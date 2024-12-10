"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useLogin from "@/Hook/useLogin";
import Link from "next/link";

export default function LoginComponents() {
  const [isLogin, setIsLogin] = useState(false);
  const { verifyLogined } = useLogin();

  useEffect(() => {
    const verify = verifyLogined();
    if (verify) {
      setIsLogin(true);
    }
  }, []);

  return isLogin ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="transition-colors bg-transparent duration-300 ease-linear hover:border hover:border-backgroundButton hover:bg-backgroundButton py-2 px-4 rounded-md">
          Perfil
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-backgroundAside text-colorText rounded-md shadow-lg py-2 w-48">
        <DropdownMenuLabel className="mx-4 my-2 text-sm font-semibold text-gray-500">
          Guilherme
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-t border-gray-200" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
            <Settings size={16} />
            <Button onClick={() => alert("Configurações")}>
              Configurações
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-600 cursor-pointer">
            <LogOut size={16} />
            <Button onClick={() => console.log("Sair")}>Sair</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button><Link href="/Pages/login">Login</Link></Button>
  );
}
