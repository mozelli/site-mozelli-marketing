import Image from "next/image";
import TrafficManagementImage from "@/public/images/traffic_management.jpg";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/public/svg-icons/whatsapp_icon.svg";
import TrafficManagementCarousel from "./TrafficManagementCarousel";
import TrafficManagementCards from "./TrafficManagementCards";

const TrafficManagement = () => {
  return (
    <div className="py-5 bg-neutral-50" id="traffic_management_section">
      <div className="md:flex md:justify-between">
        <div className=" md:w-[50%] lg:px-20">
          <h2 className="text-2xl lg:text-3xl text-center pb-5 lg:pt-5 xl:pt-10">
            Multiplique seus Resultados com{" "}
            <span className="text-amber-600">
              Gestão de Tráfego Inteligente
            </span>
          </h2>
          <p className="hidden md:block md:px-4">
            Você tem um site incrível e um produto/serviço fantástico, mas sente
            que ele não está alcançando as pessoas certas?
          </p>
          <p className="mt-5 hidden md:block md:px-4">
            Na <strong className="text-primary">Mozelli Marketing</strong>,
            transformamos cliques em clientes com a Gestão de Tráfego Pago.{" "}
            <br />
          </p>
          <p className="font-bold text-center md:text-left mt-5 hidden md:block md:px-4">
            Não basta estar online; é preciso ser encontrado!
          </p>
        </div>
        <div className="md:max-w-[50%]">
          <Image
            src={TrafficManagementImage}
            alt="Imagem de exemplos de websites."
            className="xl:max-h-[480px]"
          />
        </div>
      </div>

      <div className="px-4 pt-5 md:hidden">
        <p>
          Você tem um site incrível e um produto/serviço fantástico, mas sente
          que ele não está alcançando as pessoas certas?
        </p>
        <p className="mt-5">
          Na <strong className="text-primary">Mozelli Marketing</strong>,
          transformamos cliques em clientes com a Gestão de Tráfego Pago. <br />
        </p>
        <p className="font-bold text-center mt-5">
          Não basta estar online; é preciso ser encontrado!
        </p>
      </div>
      <div className="mt-5 mx-15 md:hidden">
        <TrafficManagementCarousel />
      </div>
      <TrafficManagementCards />

      <h3 className="mt-10 lg:mt-20 text-2xl px-4 text-center text-primary">
        Pronto para Acelerar o Crescimento do seu Negócio?
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

export default TrafficManagement;

/**
 <div className="mt-5 mx-15">
        <TrafficManagementCarousel />
      </div>
      <h3 className="mt-10 text-2xl px-4 text-center text-primary">
        Pronto para Acelerar o Crescimento do seu Negócio?
      </h3>
      <p className="px-4 mt-5 text-center">
        Chame agora no WhatsApp e converse com um consultor!
      </p>
      <div className="px-4 my-5">
        <Button
          variant="outline"
          className="bg-green-700 w-full py-5 text-neutral-50 text-xl"
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
 */

/**
 <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-amber-600">
            Mais Visibilidade Instantânea
          </CardTitle>
        </CardHeader>
        <CardContent>
          Apareça no topo das buscas e nos feeds do seu público, garantindo que
          sua marca seja vista por quem realmente importa.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-amber-600">
            Leads e Vendas Qualificadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          Atraímos pessoas que já estão buscando o que você oferece, aumentando
          exponencialmente as chances de conversão.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-amber-600">
            Resultados Mensuráveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          Saiba exatamente para onde seu investimento está indo e qual o retorno
          que ele está gerando. Nossas campanhas são otimizadas constantemente
          para o melhor desempenho.
        </CardContent>
      </Card>
      <Card className="mx-4 mt-5">
        <CardHeader>
          <CardTitle className="text-amber-600">Otimização Contínua</CardTitle>
        </CardHeader>
        <CardContent>
          Analisamos dados, testamos novas estratégias e ajustamos suas
          campanhas para garantir que você esteja sempre à frente da
          concorrência, maximizando seu ROI (Retorno Sobre o Investimento).
        </CardContent>
      </Card>
 */
