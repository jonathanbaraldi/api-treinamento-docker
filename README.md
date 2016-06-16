# api-treinamento-docker
Construção da API do treinamento para rodar em Docker

-------------------------------------------------------
# 0) Ter o docker instalado

-------------------------------------------------------
# 1) Iniciar ambiente do Docker na máquina
	# docker-machine rm default
	# docker-machine create --driver virtualbox default
	# docker-machine env default
	# eval $(docker-machine env default)
Pegar o IP que é usado pela VM do Docker para rodar as aplicações

-------------------------------------------------------
# 2) Construção do arquivo Dockerfile
Ver arquivo Dockerfile

-------------------------------------------------------
# 3) Build da imagem 
	# docker build -t <your username>/node-web-app .

-------------------------------------------------------
# 4) Listar as imagens 
	# docker images

-------------------------------------------------------
# 5) Rodar a imagen. 
Rodar com o -d coloca em modo destacado, permitindo rodar em background. O parâmetro -p redireciona para a porta privada dentro do container.
	
	# docker run -p 49160:8080 -d jonathanbaraldi/node-web-app
	# docker run -p 49160:8080 -d <your username>/node-web-app

-------------------------------------------------------
# 6) Pegar o ID do container
	# docker ps

-------------------------------------------------------
# 7) Exibir o output da aplicação
	# docker logs <container id>

-------------------------------------------------------
# 8) Acessar o shell  dentro do container e executar comandos
	# docker exec -it <container id> /bin/bash

-------------------------------------------------------
# 9) Testar a aplicação
	# docker ps // Ver a porta do container
	# curl -i 192.168.99.100:49160
		---------------------------------------
		HTTP/1.1 200 OK
		X-Powered-By: Express
		Content-Type: text/html; charset=utf-8
		Content-Length: 12
		ETag: W/"c-8O9wgeFTmsAO9bdhtPsBsw"
		Date: Thu, 16 Jun 2016 13:59:27 GMT
		Connection: keep-alive

		Hello world
		---------------------------------------

Também pode-se acessar pelo browser na url 192.168.99.100:49160, e ver o retorno Hello World!

-------------------------------------------------------
# 10) Remover container que está rodando
	# docker rm -f <container id>
	
