# HAUS - EVERTON VASZELEWSKI COMPONENTE A FRONTEND + COMPONENT B EXTERNAL API
# MVP SPRINT 2 - Pós-Graduação em Engenharia de Software

Componente A (FRONTEND) e Component B (Google Custom Search API) do projeto HAUS: Um Sistema web de gerenciamento e catalogar coleções de objetos de Música


---
## Como executar 

Requisitos:

Para correta execução das funcionalidades do sistema, executar primeiramente os passos dos seguintes repositórios:
- [Componente C 1 - Adicionar item ao catálogo](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-1)
- [Componente C 2 - Criar Lista de Desejos](https://github.com/Vaszelewski/pucrio-mvp-sprint2-haus-component-c-2)

Para execução apenas do Frontend deste projeto, siga as Etapas abaixo:

Etapas:


1 - Clonar o repositório e descompactar da pasta .zip.

2 - Ir ao diretório raiz, onde contém o Dockerfile, e executar como administrador o seguinte comando para construir a imagem Docker:
```
$ docker build -t rest-api .
```

3 - Após a criação da imagem, executar como adminitrador o seguinte comando para rodar o container:
```
$ docker run -p 8000:8000 rest-api
```

Após seguir todos os passos, abrir o link abaixo no bavegador para verificar o status da API em execução
- [http://localhost:8000/#/](http://localhost:8000/#/)

