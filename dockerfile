# Define a imagem base que será usada
FROM node:17-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package.json .

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação para produção
# RUN npm run build

EXPOSE 3333

# Define o comando padrão que será executado quando o contêiner for iniciado
CMD ["npm", "run", "dev"]