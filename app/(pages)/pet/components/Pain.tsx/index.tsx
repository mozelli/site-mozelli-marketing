import Image from "next/image";
import HeartIcon from "@/public/svg-icons/heart_icon.svg";
import CrownIcon from "@/public/svg-icons/crown_icon.svg";
import DolarIcon from "@/public/svg-icons/dolar_icon.svg";
import { Card, CardContent } from "@/components/ui/card";

const Pain = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center bg-amber-600 w-full h-[150px] px-4">
        <h2 className="text-xl md:text-2xl font-medium text-center text-background">
          Você Ama Cuidar dos <strong>Pets</strong>,
          <br /> Nós Amamos Cuidar do <strong>Seu Negócio</strong>.
        </h2>
      </div>
      <div className="p-4">
        <p className="text-base md:text-xl text-center mb-2">
          Sabemos que você dedica seu tempo e carinho aos animais e seus
          tutores.
        </p>
        <p className="text-base md:text-xl text-center mb-2">
          <span className="font-bold">
            Mas, e a visibilidade do seu Pet Shop?
          </span>
        </p>
        <p className="text-base md:text-xl text-center">
          Você tem trabalhado para:
        </p>
        <ul className="my-6 lg:flex lg:items-center lg:justify-around lg:gap-4">
          <li className="mb-6 lg:mb-0 lg:max-w-[350px]">
            <Card className="lg:min-h-[130px]">
              <CardContent className="text-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={HeartIcon}
                    alt="Ícone de coração"
                    className="min-w-8 h-8"
                  />
                </div>
                <span className="text-amber-600 font-medium">
                  Atrair novos clientes que realmente se importam com seus
                  bichinhos?
                </span>
              </CardContent>
            </Card>
          </li>
          <li className="mb-6 lg:mb-0 lg:max-w-[350px]">
            <Card className="lg:min-h-[130px]">
              <CardContent className="text-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={CrownIcon}
                    alt="Ícone de coroa"
                    className="min-w-8 h-8"
                  />
                </div>
                <span className="text-amber-600 font-medium">
                  Se destacar da concorrência online?
                </span>
              </CardContent>
            </Card>
          </li>
          <li className="lg:max-w-[350px] lg:min-h-[100px]">
            <Card className="lg:min-h-[130px]">
              <CardContent className="text-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={DolarIcon}
                    alt="Ícone de dinheiro"
                    className="min-w-8 h-8"
                  />
                </div>
                <span className="text-amber-600 font-medium">
                  Manter um fluxo constante de agendamentos e vendas?
                </span>
              </CardContent>
            </Card>
          </li>
        </ul>
        <p className="pt-6 pb-2 text-center md:pt-4 lg:text-xl lg:pt-4">
          Não se preocupe! Muitos pet shops enfrentam esses desafios.
        </p>
        <p className="text-center mb-4 lg:text-xl lg:pt-4">
          A boa notícia é que o{" "}
          <strong className="text-primary">Marketing Digital</strong> é a
          estratégia que faltava para prender a atenção do seu público.
        </p>
      </div>
    </section>
  );
};

export default Pain;
