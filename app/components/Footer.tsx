const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-50 py-5 px-4 w-full  min-h-[500px]">
      <div className="md:max-w-[1200px]">
        <h2 className="text-xl font-bold">mozelli</h2>
        <span>Marketing</span>
        <address className="mt-5 md:flex md:items-center md:justify-center not-italic">
          <div className="md:border-r md:border-r-neutral-500 md:px-8 pb-4">
            <h2 className="font-bold text-base">Endereço:</h2>
            <p className="text-neutral-400">Rua Joaquim Teixeira Dias, 710</p>
            <p className="text-neutral-400">Belo Horizonte, MG.</p>
          </div>
          <div className="md:border-r md:border-r-neutral-500 md:px-8 pb-4">
            <h2 className="font-bold">Contatos:</h2>
            <p className="text-neutral-400">(31) 9 9885-5602</p>
            <p className="text-neutral-400">
              comercial@mozellimarketing.com.br
            </p>
          </div>
          <div className="md:px-8">
            <h2 className="font-bold">Siga-nos:</h2>
            <p className="text-neutral-400 hover:underline">
              <a href="https://www.facebook.com/mozellimkt" target="_blank">
                Facebook
              </a>
            </p>
            <p className="text-neutral-400 hover:underline">
              <a href="https://www.instagram.com/mozelli.marketing/">
                Instagram
              </a>
            </p>
          </div>
        </address>
        <div className="text-neutral-100 text-center pt-8 text-xs">
          <p>© 2025 Mozelli Marketing</p>
          <p className="">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
