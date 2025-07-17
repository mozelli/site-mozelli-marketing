import Image from "next/image";
import WebDevelopmentImage from "@/public/images/web_development.png";
import WebDevelopmentCarousel from "./WebDevelopmentCarousel";
import WebDevelopmentCards from "./WebDevelopmentCards";

const WebDevelopment = () => {
  return (
    <div className="py-5 lg:pt-0 md:pb-10" id="web_development_section">
      <div className="md:flex md:justify-between">
        <div className=" md:w-[50%] lg:px-20">
          <h2 className="text-2xl lg:text-3xl text-center pb-5 lg:pt-5 xl:pt-10">
            Seu Negócio Precisa de um <br />
            <span className="text-amber-600 font-bold">Site Profissional</span>
          </h2>
          <p className="md:px-4 md:block hidden">
            Ter um site é muito mais do que apenas uma formalidade; é a espinha
            dorsal da sua presença online.{" "}
          </p>
          <p className="hidden md:block md:px-4 lg:mt-5">
            Na <strong className="text-primary">Mozelli Marketing</strong>,
            entendemos que seu site é a{" "}
            <span className="font-semibold">
              sua vitrine 24 horas por dia, 7 dias por semana
            </span>
            , a sua principal ferramenta para atrair e converter clientes.
          </p>
        </div>
        <div className="md:w-[50%]">
          <Image
            src={WebDevelopmentImage}
            alt="Imagem de exemplos de websites."
          />
        </div>
      </div>

      <div className="px-4 pt-5 md:hidden">
        <p>
          Ter um site é muito mais do que apenas uma formalidade; é a espinha
          dorsal da sua presença online.{" "}
        </p>
        <p className="mt-5">
          Na <strong className="text-primary">Mozelli Marketing</strong>,
          entendemos que seu site é a{" "}
          <span className="font-semibold">
            sua vitrine 24 horas por dia, 7 dias por semana
          </span>
          , a sua principal ferramenta para atrair e converter clientes.
        </p>
      </div>
      <div className="mt-5 mx-15 md:hidden">
        <WebDevelopmentCarousel />
      </div>
      <WebDevelopmentCards />

      <h3 className="mt-10 lg:mt-20 text-2xl px-4 text-center text-amber-600 lg:text-3xl">
        Quer um Site que Converte?
      </h3>
      <p className="px-4 mt-5 text-center">
        Chame agora no WhatsApp e converse com um consultor!
      </p>
      <div className="px-4 my-5 text-center">
        <a
          href="https://wa.link/8f1j92"
          target="_blank"
          className="bg-green-700 hover:bg-green-800 hover:cursor-pointer hover:text-white py-2 px-4 font-medium rounded text-white text-xl"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WebDevelopment;
