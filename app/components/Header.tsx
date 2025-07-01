import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Command, CommandList, CommandItem } from "@/components/ui/command";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-10">
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
      <div className="h-5 items-center space-x-4 text-sm hidden lg:flex">
        <div className="flex">
          <Link
            href="/"
            className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
          >
            Página inicial
          </Link>
        </div>
        <Separator orientation="vertical" />
        <Link
          href="#web_development_section"
          className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
        >
          Construção de Sites
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="#traffic_management_section"
          className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition hover:text"
        >
          Gestão de Tráfego
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="#social_media_section"
          className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition hover:text"
        >
          Gestão de Redes Sociais
        </Link>
        <a
          href="https://wa.me/5531998855602"
          target="_blank"
          className="font-semibold ml-2 hover:cursor-pointer bg-lime-600 hover:bg-lime-700 p-2 rounded text-white"
        >
          Fale conosco
        </a>
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              alt="ícone hamburguer para abrir o menu."
              src="/svg-icons/hamburger_icon.svg"
              width={32}
              height={32}
            />
          </SheetTrigger>
          <SheetContent className="p-2">
            <SheetHeader>
              <SheetTitle className="text-primary">Menu</SheetTitle>
            </SheetHeader>
            <Command className="">
              <CommandList>
                <CommandItem className="py-4">
                  <Link href="/" className="w-full">
                    <span className="font-semibold">Página inicial</span>
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#webdevelopment" className="w-full">
                    Formulário
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#traffic_management" className="w-full">
                    Gestão de Tráfego
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#socialmedia" className="w-full">
                    Gestão de Redes Sociais
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <a
                    href="https://wa.me/5531985597586"
                    target="_blank"
                    className="w-full"
                  >
                    Fale conosco
                  </a>
                </CommandItem>
              </CommandList>
            </Command>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
