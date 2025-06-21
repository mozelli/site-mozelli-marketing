import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const SocialMediaCarousel = () => {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-amber-600">
                  Presença Marcante e Relevante
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                Não basta estar nas redes sociais, é preciso se destacar!
                Criamos conteúdo que ressoa com seu público, mantendo sua marca
                ativa e sempre lembrada.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-amber-600">
                  Engajamento que Converte
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Vamos além das curtidas. Nosso objetivo é gerar interação real,
                construindo um relacionamento sólido com seus seguidores que se
                traduz em confiança e, consequentemente, em vendas.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-amber-600">
                  Construção de Autoridade
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Posicionamos seu negócio como referência no seu segmento,
                compartilhando informações valiosas e demonstrando seu
                expertise.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-amber-600">
                  Crescimento Sustentável
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Através de estratégias orgânicas e pagas, expandimos seu alcance
                e atraímos novos seguidores que realmente se importam com o que
                você oferece.
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <Card className="min-h-[296px]">
              <CardHeader>
                <CardTitle className="text-amber-600">
                  Economia de Tempo e Recursos
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                Gerenciar redes sociais exige tempo, conhecimento e dedicação.
                Deixe essa tarefa com especialistas e foque no que você faz de
                melhor: gerenciar seu negócio.
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

export default SocialMediaCarousel;
