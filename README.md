# Mapa do Bairro

## Para executar a Aplicação

- Você vai precisar do Nodejs, verifique no seu terminal node -v
- Caso não tenha o Nodejs instalado, visite o site oficial [nodejs](https://nodejs.org/en/)
- Você precisa baixar o zip ou clonar o projeto.
- Apos fazer o download do projeto tanto 'zip' ou 'clone', entre do diretorio do projeto cd mapa-bairro e execute ```npm install``` para instalar as dependencias
- Apos executar o seguinte comando ```npm install``` e ```npm start```, caso tenha você tenha o yarn ```yarn start```

## Arquitetura

- Foi utiliza a Library [ReactJS](https://reactjs.org/)

## Bibliotecas utilizadas no desenvolvimento

- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) = Para trabalhar com Regex, Foi utilizado na parte de filtro.
- [react-google-maps](https://tomchentw.github.io/react-google-maps/)    = Uma das apis principais, manipulação do Map veja mais [ReactGoogleMaps](https://tomchentw.github.io/react-google-maps/)
- [sort-by](https://www.npmjs.com/package/sort-by)              = Foi utlizado para Organizar os nomes na barra de pesquisa.
- [JsonPlaceholder](https://jsonplaceholder.typicode.com/) = Utilizei um modulo para criação de uma api Customizada [my-json-server](https://my-json-server.typicode.com/) onde posso fazer minha configuração :-).

## Aplicação Offline

- Para o modo de offline funcione, é necessario fazer o build do app.
- Entrando na pasta ```cd mapa-bairro``` e depois ```npm run build``` será gerado uma pasta chamada ```build```
- E pronto, agora é so colocar essa pasta no seu servidor, e referenciar seu index.html e pronto, ou colocar o conteudo da pasta no seu servidor e automaticamente o servidor ira chamar seu index.html :-).

