import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="bg-primary py-5 h-screen ">
      <div className="flex items-center h-full max-w-[1200px] mx-auto px-4">
        <div className="w-1/2 pr-10">
          <h2 className="text-4xl font-bold text-secondary">Nossas soluções</h2>
          <div className="h-1 bg-amber-300 w-[200px] my-2 rounded"></div>
          <p className="font-medium text-secondary mb-2">
            Bem vindo(a) à{" "}
            <strong className="text-amber-300">Mozelli Marketing</strong>!
          </p>
          <p className="font-medium text-secondary mb-2">
            Oferecemos um conjunto de serviços pensados para alavancar sua
            presença digital, gerar autoridade e aumentar suas vendas.
          </p>
          <p className="font-medium text-secondary">
            Da criação de sites profissionais até o gerenciamento de redes
            sociais e campanhas pagas; tudo com uma abordagem estratégica,
            criativa e orientada a resultados.
          </p>
        </div>
        <div className="w-1/2">
          <Card className="border-4 border-amber-300 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-4xl text-primary">
                O que fazemos por você
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <p className="font-medium text-stone-600">
                Acreditamos que cada marca tem uma essência única e é exatamente
                isso que guia nossas estratégias. Mais do que prestar serviços
                isolados,{" "}
                <span className="font-bold text-amber-600">
                  nosso compromisso é entender o seu negócio, seu público e seus
                  objetivos
                </span>{" "}
                para entregar soluções completas e personalizadas. Seja para
                atrair novos clientes, fortalecer sua imagem ou vender mais,
                estamos aqui para construir resultados com você.
              </p>
              <div className="mt-10 flex">
                <ul className="w-1/2">
                  <li className="py-3 flex gap-4 items-center">
                    <CircleCheckBig className="text-lime-600" />
                    <span className="font-medium">Criação de Sites</span>
                  </li>
                  <li className="py-3 flex gap-4 items-center">
                    <CircleCheckBig className="text-lime-600" />
                    <span className="font-medium">Gestão de Redes Sociais</span>
                  </li>
                  <li className="py-3 flex gap-4 items-center">
                    <CircleCheckBig className="text-lime-600" />
                    <span className="font-medium">Gestão de Tráfego</span>
                  </li>
                  <li className="py-3 flex gap-4 items-center">
                    <CircleCheckBig className="text-lime-600" />
                    <span className="font-medium">Marketing de Conteúdo</span>
                  </li>
                </ul>
                <div className="flex flex-col w-1/2">
                  <Button className="mt-auto ml-auto bg-lime-700 hover:bg-lime-800 hover:cursor-pointer">
                    <span className="font-semibold pr-2">Fale conosco</span>
                    <Image
                      src="./svg-icons/whatsapp_icon.svg"
                      width={24}
                      height={24}
                      alt="Botão para WhatsApp"
                      className="fill-secondary"
                    />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
