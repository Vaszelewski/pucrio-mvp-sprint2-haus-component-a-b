# HAUS - EVERTON VASZELEWSKI COMPONENTE A FRONTEND + COMPONENT B EXTERNAL API
# MVP SPRINT 2 - Pós-Graduação em Engenharia de Software

Componente A (FRONTEND) e Component B (Google Custom Search API) do projeto HAUS: Um Sistema web de gerenciamento e catalogar coleções de objetos de Música


Para o Componente B deste projeto, foi utilizada a Google Custom Search API, api pública disponibilizada gratuitamente.

Acesse [aqui](https://console.cloud.google.com/apis/library/customsearch.googleapis.com?hl=pt-br) para ver a Documentação.
Referências: [Solodev](https://www.solodev.com/blog/web-design/adding-google-custom-search-to-your-website.stml#)

---
## Contexto

HAUS trata-se de um sistema para catalogar itens de coleção focado em Música (porém podendo ser utilizado para qualquer nicho).

Possui três abas:
- uma aba "Início" para sempre retornar ao index.
- uma aba "Lista de Desejos", o qual o mesmo pode adicionar itens que deseja comprar no futuro
- uma aba "Comprar Itens" (com a API externa) onde há três campos de busca para as lojas mais populares no meio da música: Amazon.com, Ebay.com e Discogs.com. Método utilizado de GET.

Para este projeto, foi utilizado Javascript, CSS e HTML. Para o Backend (Componentes C 1, C 2) foi utilizado Python e banco de dados SQLite.
Para execução em containers foi utilizado Dockerfile.


---
## Como executar 

Requisitos:
- Certificar de que o [Docker](https://docs.docker.com/engine/install/) está instalado em sua máquina e em execução.
- Certificar de que o [PIP](https://pypi.org/project/pip/) está instalado em sua máquina.
  
Para correta execução das funcionalidades do sistema, executar primeiramente os passos dos seguintes repositórios:
- [Componente C 1 - Adicionar item ao catálogo](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-1)
- [Componente C 2 - Criar Lista de Desejos](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-2)



Para execução apenas do Frontend deste projeto, siga as Etapas abaixo:


Etapas:


1 - Clonar o repositório e descompactar da pasta .zip.

2 - Executar o seguinte comando abaixo:
```
$ pip install google-api-python-client
```

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

