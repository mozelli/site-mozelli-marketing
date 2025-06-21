import Image from "next/image";
import ImageSectionSolution from "@/public/images/pet_solution.png";
import WebDevelopment from "./WebDevelopment";
import TrafficManagement from "./TrafficManagement";
import SocialMedia from "./SocialMedia";

const Solution = () => {
  return (
    <section>
      <div className="flex flex-wrap lg:justify-around lg:max-w-[1200px] lg:mx-auto">
        <div className="max-w-[425px] lg:max-w-[50%]">
          <Image
            src={ImageSectionSolution}
            alt="Imagem mostrando pessoas interagindo com canais da internet"
            className="md:px-4 lg:w-full"
          />
        </div>

        <div className="flex flex-col lg:justify-center md:max-w-[343px] lg:max-w-[50%] pr-4">
          <h2 className="text-2xl lg:text-3xl font-medium text-center mt-4 px-4">
            Nossos serviços
          </h2>
          <p className="text-center px-4 my-4">
            Aumente Seu Alcance e Suas Vendas com Nossas{" "}
            <strong className="text-amber-600">Soluções Sob Medida</strong>
          </p>
          <p className="text-center px-4">
            Na <strong className="text-primary">Mozelli Marketing</strong>{" "}
            entendemos o universo pet. Por isso, oferecemos um conjunto completo
            de serviços para fazer seu pet shop ser encontrado, amado e
            escolhido pelos clientes.
          </p>
        </div>
      </div>

      <WebDevelopment />
      <TrafficManagement />
      <SocialMedia />
    </section>
  );
};

export default Solution;
