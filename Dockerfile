	# De onde deve ser pega a imagem e a versão. Nesse caso do repositório padrão do Docker, a imagem do node
FROM node:argon

	# Instalar nodemon
RUN npm install -g nodemon

	# Criar diretório do app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

	# Instalar as dependências do app - Nodejs npm
COPY package.json /usr/src/app/
RUN npm install

	# Empacotar os fontes da aplicação
COPY server.js /usr/src/app/

############################################################

	# Expor a porta 8080 do container
EXPOSE 8080

	# Rodar o app usando nodemon
CMD ["nodemon", "/usr/src/app/server.js"]