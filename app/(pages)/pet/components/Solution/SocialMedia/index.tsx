import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PetSocialMedia from "@/public/images/pet_social_media.png";
import PetSocialMediaLg from "@/public/images/pet_social_media_lg.png";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <article className="pt-4 lg:max-w-[1200px] lg:mx-auto px-4">
      <header>
        <Image
          src={PetSocialMedia}
          alt="Imagem de quatro modelos de postagens para redes sociais."
          className="lg:hidden rounded-2xl"
        />
        <Image
          src={PetSocialMediaLg}
          alt="Imagem de quatro modelos de postagens para redes sociais."
          className="hidden lg:block max-w-[1200px] mx-auto rounded-2xl"
        />
      </header>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-medium py-4">
        Gestão de Redes Sociais
      </h3>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-primary text-xl lg:text-2xl text-center lg:px-20">
            Construa uma comunidade engajada no{" "}
            <strong className="text-amber-600">Instagram</strong> e{" "}
            <strong className="text-amber-600">Facebook</strong>, mostrando o
            dia a dia do seu pet shop, dicas de cuidado e promoções especiais.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-center">
            Conteúdo de alta qualidade que humaniza sua marca e fortalece o
            relacionamento com seus clientes.
          </p>
        </CardContent>
      </Card>
    </article>
  );
};

export default SocialMedia;
