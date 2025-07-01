"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center h-screen justify-center"
      id="home_section"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center lg:text-6xl">
          Transformamos <span className="text-primary">ideias</span>
          <br /> em
          <span className="text-purple-700"> resultados</span>
        </h2>
      </motion.div>

      <div className="max-w-[550px]">
        <p className="text-center mb-4 lg:text-2xl">
          Na <strong className="font-bold">Mozelli Marketing</strong>,
          conectamos{" "}
          <span className="text-primary font-semibold">criatividade</span>,
          <span className="text-primary font-semibold"> estratégia</span> e{" "}
          <span className="text-primary font-semibold">tecnologia </span>
          para impulsionar o crescimento do seu negócio.{" "}
        </p>
        <p className="text-sm text-center text-neutral-700 mb-4 lg:text-base">
          Soluções personalizadas em marketing digital para pequenos e médios
          empreendedores que querem se destacar no ambiente online.
        </p>
      </div>

      <div className="text-center">
        <a href="https://wa.me/5531998555602" target="_blank">
          <Button className="bg-amber-500 hover:bg-amber-600 hover:cursor-pointer font-semibold py-6">
            Converse com um consultor
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
