import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const TrafficManagementCarousel = () => {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Mais Visibilidade Instantânea
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                Apareça no topo das buscas e nos feeds do seu público,
                garantindo que sua marca seja vista por quem realmente importa.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Leads e Vendas Qualificadas
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Atraímos pessoas que já estão buscando o que você oferece,
                aumentando exponencialmente as chances de conversão.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Resultados Mensuráveis
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Saiba exatamente para onde seu investimento está indo e qual o
                retorno que ele está gerando. Nossas campanhas são otimizadas
                constantemente para o melhor desempenho.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  Otimização Contínua
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Analisamos dados, testamos novas estratégias e ajustamos suas
                campanhas para garantir que você esteja sempre à frente da
                concorrência, maximizando seu ROI (Retorno Sobre o
                Investimento).
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-primary text-neutral-50" />
      <CarouselNext className="bg-primary text-neutral-50" />
    </Carousel>
  );
};

export default TrafficManagementCarousel;
