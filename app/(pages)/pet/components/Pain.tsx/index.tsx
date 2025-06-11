import Image from "next/image";

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
          Você tem lutado para:
        </p>
        <ul className="my-10 lg:flex lg:items-center lg:justify-center lg:gap-4">
          <li className="flex items-center gap-2 mb-6 lg:mb-0">
            <div className="">
              <Image
                src="/svg-icons/heart_icon.svg"
                width="24"
                height="24"
                alt="Ícone de coração"
              />
            </div>
            <span className="text-amber-600 font-medium">
              Atrair novos clientes que realmente se importam com seus
              bichinhos?
            </span>
          </li>
          <li className="flex items-center gap-2 mb-6 lg:mb-0">
            <div className="">
              <Image
                src="/svg-icons/crown_icon.svg"
                width={24}
                height={24}
                alt="Ícone de coroa"
              />
            </div>
            <span className="text-amber-600 font-medium">
              Se destacar da concorrência online?
            </span>
          </li>
          <li className="flex items-center gap-2">
            <div className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#943AF4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8"
                  stroke="#943AF4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18V6"
                  stroke="#943AF4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-amber-600 font-medium">
              Manter um fluxo constante de agendamentos e vendas?
            </span>
          </li>
        </ul>
        <p>
          Não se preocupe! Muitos pet shops enfrentam esses desafios. A boa
          notícia é que o{" "}
          <strong className="text-primary">Marketing Digital</strong> é a
          ferramenta que faltava para prender a atenção do seu público.
        </p>
      </div>
    </section>
  );
};

export default Pain;
