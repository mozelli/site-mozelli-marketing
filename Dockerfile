# Usando Node 22
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o restante
COPY . .

# Build da aplicação (modo produção)
RUN npm run build

# Expõe a porta interna (não pública, só interna no Docker)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
