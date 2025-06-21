import Image from "next/image";
import PetWebDevelopmentImage from "@/public/images/web_development.png";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WebDevelopment = () => {
  return (
    <article className="pt-4 lg:max-w-[1200px] lg:mx-auto">
      <header>
        <Image
          src={PetWebDevelopmentImage}
          alt="Imagem mostrando exemplos de sites de pet shop"
          className="lg:max-w-[1200px] lg:mx-auto"
        />
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-medium py-4">
          Criação de Sites Profissionais e Atraentes
        </h3>
      </header>
      <Card className="mx-4">
        <CardHeader>
          <CardTitle className="text-primary text-lg lg:text-2xl text-center">
            Um site que é a <span className="text-amber-600">"casa"</span> do
            seu pet shop na internet:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-center">
            Moderno, fácil de usar e otimizado para que os clientes encontrem
            seus serviços de <strong>banho</strong>, <strong>tosa</strong>,{" "}
            <strong>veterinário</strong> ou <strong>produtos</strong>.
          </p>
          <p className="text-center">
            Design responsivo para celular, tablet e computador, garantindo que
            seu site fique lindo em qualquer tela.
          </p>
        </CardContent>
      </Card>
    </article>
  );
};

export default WebDevelopment;
