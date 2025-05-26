import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      {/* BRAND */}
      <h1 className="text-3xl font-bold text-primary">mozelli.</h1>
      {/* REDES SOCIAIS */}
      <div className="flex items-center gap-2">
        <div className="border-2 rounded-full p-1">
          <Image
            alt="ícone do Facebook"
            src="/svg-icons/facebook_icon.svg"
            width={24}
            height={24}
            className="fill-amber-600"
          />
        </div>
        <div className="border-2 rounded-full p-1">
          <Image
            alt="ícone do Facebook"
            src="/svg-icons/instagram_icon.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
      {/* MENU */}
      <div className="h-5 items-center space-x-4 text-sm hidden sm:flex">
        <div className="flex">
          <Link
            href="#"
            className="border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
          >
            Página inicial
          </Link>
        </div>
        <Separator orientation="vertical" />
        <Link
          href="#"
          className="border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
        >
          Serviços
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="#"
          className="border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
        >
          Contato
        </Link>
        <Button className="ml-2 hover:cursor-pointer bg-amber-500 hover:bg-amber-600">
          Fale conosco
        </Button>
      </div>

      <div className="sm:hidden">
        <Image
          alt="ícone hamburguer para abrir o menu."
          src="/svg-icons/hamburger_icon.svg"
          width={32}
          height={32}
        />
      </div>
    </header>
  );
};

export default Header;
