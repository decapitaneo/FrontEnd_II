# from = obtigatorio/ determina a imagem a ser usada
FROM ubuntu 
RUN apt-get update 
RUN apt-get install apache2 -y 
# cria um diretorio principal/inicial
WORKDIR /nidio/qualquer/coisa 
#eu que defino o caminho 
RUN touch primeiro-arquivo
RUN touch index.html
CMD touch segundo-arquivo
#documentacao da porta usada 
EXPOSE 80

# no terminal:
# docker image build --tag primeiraimagem 
# docker image ls
# docker container run primeiraimagem
# docker container run -it primeiraimage bash // ver se criou os arquivos
# docker run -it segundaimage bash

FROM httpd:2.4
COPY . /usr/local/apache2/htdocs
EXPOSE 80
# no terminal:
# docker build -t  coffee . 
# docker image ls
# docker container run -p 81:80  todoserver