import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center pt-10 px-4 h-screen bg-contain lg:bg-size-[600px] bg-bottom bg-no-repeat bg-[url(/images/pet_hero.png)]"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <h2 className="text-2xl lg:text-5xl text-foreground font-medium text-center">
        Seu <strong className="text-amber-600">Pet Shop</strong> Merece Brilhar
        Online.
      </h2>
      <p className="lg:text-2xl text-center text-foreground font-medium mt-4">
        Conquiste mais clientes com o{" "}
        <strong className="text-primary">Marketing Digital</strong> certo.
      </p>
      <p className="text-center text-sm lg:text-base text-foreground mt-4 md:max-w-[600px]">
        Transformamos a paixão pelos animais em resultados para o seu negócio.
        Deixe a <strong>Mozelli Marketing</strong> levar seu pet shop ao próximo
        nível digital.
      </p>
    </div>
  );
};

export default Hero;

/**
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-center">
        Seu <span className="text-primary">PetShop</span>
        <br /> Brilhando no
        <span className="text-purple-700"> Digital</span>
      </h2>
      <div className="max-w-[550px] lg:max-w-[600px] mb-6">
        <p className="text-xl md:text-2xl lg:text-3xl text-center mb-4 lg:mb-8">
          Atraia mais clientes e aumente suas vendas com{" "}
          <strong className="text-amber-600">Marketing Estratégico</strong>.
        </p>
        <p className="text-sm md:text-xl text-center text-neutral-700 mb-6 lg:mb-8 ">
          Transformamos a paixão pelos animais em resultados para seu negócio.
          Deixe a <strong>Mozelli Marketing</strong> levar seu{" "}
          <strong>PetShop</strong> ao próximo nível digital.
        </p>
      </div>

      <div className="text-center">
        <Button className="bg-primary font-medium text-base hover:cursor-pointer">
          Solicite uma consultoria gratuita
        </Button>
      </div>
 */
