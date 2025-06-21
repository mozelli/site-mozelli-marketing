import Image from "next/image";
import SocalMediaImage from "@/public/images/social_media.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/public/svg-icons/whatsapp_icon.svg";
import SocialMediaCarousel from "./SocialMediaCarousel";
import TrafficManagementCards from "./TrafficManagementCards";

const SocialMedia = () => {
  return (
    <div className="py-5" id="social_media_section">
      <div className="md:flex md:justify-between">
        <div className=" md:w-[50%] lg:px-20">
          <h2 className="text-2xl lg:text-3xl text-center pb-5 xl:pt-10">
            Sua Marca em Destaque nas{" "}
            <span className="text-amber-600">Redes Sociais</span>
          </h2>
          <p className="font-bold text-center pb-5 hidden md:block">
            Sua marca está realmente aproveitando o poder das redes sociais?
          </p>
          <p className="hidden md:block">
            Hoje, <strong>Facebook</strong>, <strong>Instagram</strong>,{" "}
            <strong>YouTube</strong> e outras plataformas são muito mais do que
            apenas canais de comunicação; são ambientes ricos para construir
            comunidades, gerar vendas e fortalecer sua marca.
          </p>
          <p className="mt-5 hidden md:block">
            Na <strong className="text-primary">Mozelli Marketing</strong>,
            transformamos sua presença social em uma máquina de resultados.
          </p>
        </div>
        <div className="md:max-w-[50%]">
          <Image
            src={SocalMediaImage}
            alt="Imagem de duas pessoas trabalhando na gestão de redes sociais com vários desenhos de logos de redes sociais sobre uma mesa."
          />
        </div>
      </div>

      <div className="px-4 pt-5 md:hidden">
        <p className="font-bold text-center pb-5">
          Sua marca está realmente aproveitando o poder das redes sociais?
        </p>
        <p>
          Hoje, <strong>Facebook</strong>, <strong>Instagram</strong>,{" "}
          <strong>YouTube</strong> e outras plataformas são muito mais do que
          apenas canais de comunicação; são ambientes ricos para construir
          comunidades, gerar vendas e fortalecer sua marca.
        </p>
        <p className="mt-5">
          Na <strong className="text-primary">Mozelli Marketing</strong>,
          transformamos sua presença social em uma máquina de resultados.
        </p>
      </div>
      <div className="mt-5 mx-15 md:hidden">
        <SocialMediaCarousel />
      </div>
      <TrafficManagementCards />

      <h3 className="mt-10 lg:mt-20 text-2xl px-4 text-center text-amber-600">
        Pronto para Transformar seus Seguidores em Clientes Fiéis?
      </h3>
      <p className="px-4 mt-5 text-center">
        Chame agora no WhatsApp e converse com um consultor!
      </p>
      <div className="px-4 my-5 text-center">
        <Button
          variant="outline"
          size="lg"
          className="bg-green-700 hover:bg-green-800 hover:cursor-pointer hover:text-white py-6 text-white text-xl"
        >
          WhatsApp
          <Image
            src={WhatsAppIcon}
            alt="Ícone do WhatsApp"
            width={24}
            height={24}
            className="ml-4"
          />
        </Button>
      </div>
    </div>
  );
};

export default SocialMedia;

/**
 <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-primary">
            Presença Marcante e Relevante
          </CardTitle>
        </CardHeader>
        <CardContent>
          Não basta estar nas redes sociais, é preciso se destacar! Criamos
          conteúdo que ressoa com seu público, mantendo sua marca ativa e sempre
          lembrada.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-primary">
            Engajamento que Converte
          </CardTitle>
        </CardHeader>
        <CardContent>
          Vamos além das curtidas. Nosso objetivo é gerar interação real,
          construindo um relacionamento sólido com seus seguidores que se traduz
          em confiança e, consequentemente, em vendas.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-primary">
            Construção de Autoridade
          </CardTitle>
        </CardHeader>
        <CardContent>
          Posicionamos seu negócio como referência no seu segmento,
          compartilhando informações valiosas e demonstrando seu expertise.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-primary">
            Crescimento Sustentável
          </CardTitle>
        </CardHeader>
        <CardContent>
          Através de estratégias orgânicas e pagas, expandimos seu alcance e
          atraímos novos seguidores que realmente se importam com o que você
          oferece.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-primary">
            Economia de Tempo e Recursos
          </CardTitle>
        </CardHeader>
        <CardContent>
          Gerenciar redes sociais exige tempo, conhecimento e dedicação. Deixe
          essa tarefa com especialistas e foque no que você faz de melhor:
          gerenciar seu negócio.
        </CardContent>
      </Card>
 */
