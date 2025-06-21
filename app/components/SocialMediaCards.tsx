"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const SocialMediaCards = () => {
  return (
    <div className="hidden md:grid md:grid-cols-2 mt-5">
      <div className="">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="mx-4 mt-5">
            <CardHeader>
              <CardTitle className="text-primary">
                Presença Marcante e Relevante
              </CardTitle>
            </CardHeader>
            <CardContent>
              Não basta estar nas redes sociais, é preciso se destacar! Criamos
              conteúdo que ressoa com seu público, mantendo sua marca ativa e
              sempre lembrada.
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="row-span-2">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="mx-4 mt-5">
            <CardHeader>
              <CardTitle className="text-primary">
                Engajamento que Converte
              </CardTitle>
            </CardHeader>
            <CardContent>
              Vamos além das curtidas. Nosso objetivo é gerar interação real,
              construindo um relacionamento sólido com seus seguidores que se
              traduz em confiança e, consequentemente, em vendas.
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="row-span-2">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="mx-4 mt-5">
            <CardHeader>
              <CardTitle className="text-primary">
                Construção de Autoridade
              </CardTitle>
            </CardHeader>
            <CardContent>
              Posicionamos seu negócio como referência no seu segmento,
              compartilhando informações valiosas e demonstrando seu expertise.
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="mx-4 mt-5">
            <CardHeader>
              <CardTitle className="text-primary">
                Crescimento Sustentável
              </CardTitle>
            </CardHeader>
            <CardContent>
              Através de estratégias orgânicas e pagas, expandimos seu alcance e
              atraímos novos seguidores que realmente se importam com o que você
              oferece.
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="row-span-2">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Card className="mx-4 mt-5">
            <CardHeader>
              <CardTitle className="text-primary">
                Economia de Tempo e Recursos
              </CardTitle>
            </CardHeader>
            <CardContent>
              Gerenciar redes sociais exige tempo, conhecimento e dedicação.
              Deixe essa tarefa com especialistas e foque no que você faz de
              melhor: gerenciar seu negócio.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaCards;
