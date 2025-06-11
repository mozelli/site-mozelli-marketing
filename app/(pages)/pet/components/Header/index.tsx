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
    <header className="flex items-center justify-between h-10 px-4 my-4">
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
            className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
          >
            Página inicial
          </Link>
        </div>
        <Separator orientation="vertical" />
        <Link
          href="#"
          className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition"
        >
          Soluções
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="#"
          className="font-semibold border-b-2 border-b-slate-100 hover:border-b-amber-500 transition hover:text"
        >
          Contato
        </Link>
        <Button className="font-semibold ml-2 hover:cursor-pointer bg-lime-600 hover:bg-lime-700">
          Fale conosco
        </Button>
      </div>

      <div className="sm:hidden">
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
                  <Link href="#" className="w-full">
                    <span className="font-semibold">Página inicial</span>
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#" className="w-full">
                    Soluções
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#" className="w-full">
                    Contato
                  </Link>
                </CommandItem>
                <CommandItem className="py-4">
                  <Link href="#" className="w-full">
                    Fala conosco
                  </Link>
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
