import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {/*<div className="w-1/2">*/}
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Transformamos <span className="text-primary">ideias</span>
        <br /> em
        <span className="text-purple-700"> resultados</span>
      </h2>
      <div className="max-w-[550px]">
        <p className="text-xl sm:text-2xl text-center mb-4">
          Na <strong className="font-bold">Mozelli Marketing</strong>,
          conectamos <span className="text-primary">criatividade</span>,
          <span className="text-primary"> estratégia</span> e{" "}
          <span className="text-primary">tecnologia </span>
          para impulsionar o crescimento do seu negócio.{" "}
        </p>
        <p className="text-center sm:mt-2 text-neutral-700 mb-4 ">
          Atuamos com soluções personalizadas em marketing digital para pequenos
          e médios empreendedores que querem se destacar no ambiente online.
        </p>
      </div>

      <div className="text-center">
        <Button className="bg-amber-500 hover:bg-amber-600 hover:cursor-pointer">
          Solicite uma consultoria gratuita
        </Button>
      </div>
      {/*</div>*/}
    </div>
  );
};

export default Hero;
