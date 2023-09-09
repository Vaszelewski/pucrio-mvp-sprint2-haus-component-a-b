# HAUS - EVERTON VASZELEWSKI COMPONENTE A FRONTEND + COMPONENT B EXTERNAL API
# MVP SPRINT 2 - Pós-Graduação em Engenharia de Software

Componente A (FRONTEND) e Component B (Google Custom Search API) do projeto HAUS: Um Sistema web de gerenciamento e catalogar coleções de objetos de Música


Para o Componente B deste projeto, foi utilizada a Google Custom Search API, api pública disponibilizada gratuitamente.

Acesse [aqui](https://console.cloud.google.com/apis/library/customsearch.googleapis.com?hl=pt-br) para ver a Documentação.


---
## Como executar 

Requisitos:
Para correta execução das funcionalidades do sistema, executar primeiramente os passos dos seguintes repositórios:
- [Componente C 1 - Adicionar item ao catálogo](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-1)
- [Componente C 2 - Criar Lista de Desejos](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-2)
- Certificar de que o [Docker](https://docs.docker.com/engine/install/) está instalado em sua máquina e em execução.


Para execução apenas do Frontend deste projeto, siga as Etapas abaixo:


Etapas:


1 - Clonar o repositório e descompactar da pasta .zip.

2 - Ir ao diretório raiz, onde contém o Dockerfile, e executar como administrador o seguinte comando para construir a imagem Docker:
```
$ docker build -t haus .
```

3 - Após a criação da imagem, executar como adminitrador o seguinte comando para rodar o container:
```
$ sudo docker run --rm -p 8080:80 haus
```

Após seguir todos os passos, abrir o link abaixo no bavegador para verificar o status da API em execução
-  [http://localhost:8080/#/](http://localhost:8080/#/)

