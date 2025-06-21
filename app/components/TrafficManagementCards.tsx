"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const TrafficManagementCards = () => {
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
                Mais Visibilidade Instantânea
              </CardTitle>
            </CardHeader>
            <CardContent>
              Apareça no topo das buscas e nos feeds do seu público, garantindo
              que sua marca seja vista por quem realmente importa.
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
                Leads e Vendas Qualificadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              Atraímos pessoas que já estão buscando o que você oferece,
              aumentando exponencialmente as chances de conversão.
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
                Resultados Mensuráveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              Saiba exatamente para onde seu investimento está indo e qual o
              retorno que ele está gerando. Nossas campanhas são otimizadas
              constantemente para o melhor desempenho.
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
                Otimização Contínua
              </CardTitle>
            </CardHeader>
            <CardContent>
              Analisamos dados, testamos novas estratégias e ajustamos suas
              campanhas para garantir que você esteja sempre à frente da
              concorrência, maximizando seu ROI (Retorno Sobre o Investimento).
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TrafficManagementCards;
