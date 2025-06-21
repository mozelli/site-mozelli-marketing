"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const WebDevelopmentCarousel = () => {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Completamente Personalizados
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                Seu site será único e refletirá a identidade da sua marca, feito
                sob medida para suas necessidades e objetivos.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Responsivo e Otimizado
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Funcionam perfeitamente em qualquer dispositivo: computadores,
                tablets ou celulares. São preparados para serem encontrados
                facilmente pelos seus clientes nos mecanismos de busca, como o
                Google.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Intuitivo e Focado em Conversão
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Garantimos uma navegação fácil e clara, direcionando seus
                visitantes a tomar a ação desejada, seja ela preencher um
                formulário, fazer uma compra ou entrar em contato.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Com Tecnologia de Ponta
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Utilizamos as melhores ferramentas e práticas do mercado para
                garantir um site seguro, rápido e com excelente desempenho.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-amber-600 text-neutral-50" />
      <CarouselNext className="bg-amber-600 text-neutral-50" />
    </Carousel>
  );
};

export default WebDevelopmentCarousel;
