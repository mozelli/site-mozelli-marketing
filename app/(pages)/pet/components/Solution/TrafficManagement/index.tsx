import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PetTrafficManagement from "@/public/images/pet_traffic_management.png";
import Image from "next/image";

const TrafficManagement = () => {
  return (
    <article className="pt-4 lg:max-w-[1200px] lg:mx-auto px-4">
      <header>
        <Image
          src={PetTrafficManagement}
          alt="Imagem com as logos do Google Ads e Meta Ads."
          className="lg:max-w-[1200px] lg:mx-auto"
        />
      </header>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-medium py-4">
        Gestão de Tráfego: anúncios no Google e Redes Sociais
      </h3>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-primary text-lg lg:text-2xl text-center">
            Leve seu pet shop diretamente para quem procura por <br />{" "}
            <span className="text-amber-600">"banho e tosa perto de mim"</span>{" "}
            <br /> ou <br />
            <span className="text-amber-600">"ração para gatos"</span>.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-center">
            Anúncios estratégicos que alcançam clientes na sua região,
            transformando cliques em clientes fiéis.
          </p>
        </CardContent>
      </Card>
    </article>
  );
};

export default TrafficManagement;
