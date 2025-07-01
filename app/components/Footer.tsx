const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-50 py-5 px-4">
      <h2 className="text-xl font-bold mb-5">mozelli.</h2>
      <address className="md:flex md:justify-around">
        <div className="">
          <h2 className="font-bold">Endereço:</h2>
          Rua Joaquim Teixeira Dias, 710 <br />
          Belo Horizonte, MG. <br />
          <br />
        </div>
        <div className="">
          <h2 className="font-bold">Contatos:</h2>
          <strong>Telefone/WhatsApp:</strong> (31) 9 9885-5602 <br />
          <strong>E-mail:</strong> comercial@mozellimarketing.com.br
        </div>
      </address>
    </footer>
  );
};

export default Footer;
