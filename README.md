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
Dentro do diretório onde está o arquivo Dockerfile, rodar o docker build.
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
	# curl -i 192.168.99.100:49160/
	# curl -i 192.168.99.100:49160/html
		---------------------------------------
		HTTP/1.1 200 OK
		X-Powered-By: Express
		Access-Control-Allow-Origin: *
		Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE
		Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
		Content-Type: application/json; charset=utf-8
		Content-Length: 64
		ETag: W/"40-+qlexIdTQNaZv+noPeKNyQ"
		Date: Thu, 16 Jun 2016 15:27:10 GMT
		Connection: keep-alive

		{"Data":"API de Serviços do Jon - retorno em JSON","Ver":"1.0"}
		---------------------------------------

Também pode-se acessar pelo browser na url 192.168.99.100:49160, e ver o retorno Hello World!
O ip 192.168.99.100, neste caso é o ip da vm do Docker. Esse ip pode ser encontrado com: 
	# docker-machine env default

-------------------------------------------------------
# 10) Fazer push da imagem para o Docker Hub
	# docker login
	# docker push <your username>/<your image>
	# docker push jonathanbaraldi/node-web-app

Esse nome de usuário é o mesmo nome que você usa no Docker Hub.

-------------------------------------------------------
# 11) Remover container que está rodando
	# docker rm -f <container id>


-------------------------------------------------------
# 12) Criar Build automatizado
	1) Criar conta no Docker Hub
	2) Depois de logado, clicar no menu superior em Create > Create Automated Build
	3) Clicar em "Link accounts"
	4) Selecionar o Github ou o Bitbucket
	5) Selecionar Público e Privado
	6) Depois na tela do Git, clicar para autorizar.
	7) Informar a senha do Git
	8) Feito isso, clique novamente no menu Create > Create Automated Build.
	9) Selecionar o Autobuild do Github.
	10) Selecionar o projeto que tenha o Dockerfile.
	11) Dar nome e detalhes, e clicar para criar

Uma vez que os builds automáticos são configurados, eles irão automaticamente fazer novos builds e, em alguns minutos você deve ver o seu build automático no Docker Hub Registry. Ele irá ficar em sincronização com sua conta do GitHub ou BitBucket até você desativar o Build Automático.

Você pode ver os detalhes do build, na aba "Build Details". 

Uma vez que você criou um build automático, você pode desativar ou deletar ele. Entretanto, você NÃO PODE fazer push para um build automático com o comando de push. Você pode APENAS gerenciar ele comitando código para seu repositório no Github ou Bitbucket.

Você pode criar múltiplos builds automatizados por repositório e configurar eles para apontar para Dockerfile's ou branches específicos


-------------------------------------------------------
# 13) Remover imagem do repositório local
	# docker rmi -f <id da imagem>

-------------------------------------------------------
# 14) Fazer pull da nova imagem gerada pelo build automatizado
	# docker pull <your username>/<your image>
	# docker pull jonathanbaraldi/api-treinamento-docker

	# docker run -p 49160:8080 -d jonathanbaraldi/api-treinamento-docker

