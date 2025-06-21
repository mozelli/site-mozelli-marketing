"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const WebDevelopmentCards = () => {
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
                Completamente Personalizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              Seu site será único e refletirá a identidade da sua marca, feito
              sob medida para suas necessidades e objetivos.
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
                Responsivo e Otimizado
              </CardTitle>
            </CardHeader>
            <CardContent>
              Funcionam perfeitamente em qualquer dispositivo – computadores,
              tablets ou celulares – e são preparados para serem encontrados
              facilmente pelos seus clientes nos mecanismos de busca, como o
              Google.
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
                Intuitivo e Focado em Conversão
              </CardTitle>
            </CardHeader>
            <CardContent>
              Garantimos uma navegação fácil e clara, direcionando seus
              visitantes a tomar a ação desejada, seja ela preencher um
              formulário, fazer uma compra ou entrar em contato.
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
                Com Tecnologia de Ponta
              </CardTitle>
            </CardHeader>
            <CardContent>
              Utilizamos as melhores ferramentas e práticas do mercado para
              garantir um site seguro, rápido e com excelente desempenho.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopmentCards;
