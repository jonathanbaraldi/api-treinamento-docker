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


Once the Automated Build is configured it will automatically trigger a build and, in a few minutes, you should see your new Automated Build on the Docker Hub Registry. It will stay in sync with your GitHub and Bitbucket repository until you deactivate the Automated Build.

To check the output and status of your Automated Build repositories, click on a repository name within the “Your Repositories” page. Automated Builds are indicated by a check-mark icon next to the repository name. Within the repository details page, you may click on the “Build Details” tab to view the status and output of all builds triggered by the Docker Hub.

Once you’ve created an Automated Build you can deactivate or delete it. You cannot, however, push to an Automated Build with the docker push command. You can only manage it by committing code to your GitHub or Bitbucket repository.

You can create multiple Automated Builds per repository and configure them to point to specific Dockerfile’s or Git branches.

Build triggers
Automated Builds can also be triggered via a URL on Docker Hub. This allows you to rebuild an Automated build image on demand.

Webhooks
Webhooks are attached to your repositories and allow you to trigger an event when an image or updated image is pushed to the repository. With a webhook you can specify a target URL and a JSON payload that will be delivered when the image is pushed.





