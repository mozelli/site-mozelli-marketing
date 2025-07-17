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
        <a
          href="https://wa.link/f814bd"
          target="_blank"
          className="bg-green-700 hover:bg-green-800 hover:cursor-pointer hover:text-white py-2 px-4 font-medium rounded text-white text-xl"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TrafficManagement;
