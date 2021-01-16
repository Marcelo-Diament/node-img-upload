# Upload de Imagens com Node.js

## Introdução

### Escopo

Esse repositório trata de uma prática simples para aprendermos a realizar _upload_ de imagens (arquivos) com **[node.js](https://nodejs.org/en/)**. Trata-se de uma página com um formulário básico (nome, sobrenome e avatar) e uma segunda página que exibirá os dados enviados.

### Tecnologias

Para tornar nossa vida mais fácil, utilizaremos também alguns pacotes para nos auxiliar, bem como o _mini-framework_ **[Express.js](https://expressjs.com/)** (saiba mais sobre o [Express.js](https://expressjs.com/) clicando **[aqui](https://github.com/Marcelo-Diament/express-intro)**).

Como _template engine_, o **[EJS](https://ejs.co/)** (acesse [esse link](https://github.com/Marcelo-Diament/template-engine-ejs) para conhecer melhor o [EJS](https://ejs.co/)). Sinta-se à vontade para utilizar o [Express Generator](https://github.com/Marcelo-Diament/express-generator), se preferir (mas faremos tudo 'na unha', para fixarmos os conhecimentos sobre tais tecnologias). Junto ao [EJS](https://ejs.co/), também utilizaremos o **[Bootstrap](https://getbootstrap.com/docs/5.0/)** (versão 5.0) para nos ajudar com um _layout_ mais bonito sem termos de criar nosso próprio estilo (CSS).

### Fluxo do Projeto

Para tornar a prática bem didática, cada passo descrito na documentação terá sua respectiva _branch_ (usaremos o modelo _gitFlow_). E os _commits_ serão gerados de forma a facilitar a compreensão do fluxo do projeto durante a leitura do histórico dos mesmos.

## Antes de Começarmos

Antes de iniciar o projeto, certifique-se de que possui o **[node.js](https://nodejs.org/en/)** esteja instalado em sua máquina - execute `node -v` no seu terminal para verificar a versão instalada (caso ainda não tenha familiaridade com o **[node.js](https://nodejs.org/en/)**, acesse esse [link](https://github.com/Marcelo-Diament/node-intro) para entender melhor como ele funciona).

Caso tenha dúvidas sobre como utilizar o repositório - ou mesmo criar seu próprio repositório -, acesse **[esse link](https://thewebdev.com.br/git.php)** para aprender mais sobre **git** e o **gitFlow**.

> E, se quiser evoluir o projeto e construir o _front end_ com o **[React.js](https://pt-br.reactjs.org/)**, não deixe de acessar **[esse repositório](https://github.com/Marcelo-Diament/react-express)**, onde apresentamos uma das formas de unirmos _front end_ e _back end_ (utilizando o _concurrently_ para 'rodarmos' **[node.js](https://nodejs.org/en/)** e **[React.js](https://pt-br.reactjs.org/)** no mesmo terminal).

_Sem mais delongas..._

## Passo a Passo

### 01 - Setup Inicial do Projeto

_**Branch: feature/01-project-initial-setup**_

#### **01.01. Iniciando um projeto node.js**

Basta rodarmos `npm init` e configurarmos nosso arquivo **package.json** (pode pressionar 'Enter' para tudo ou, se preferir, definir cada propriedade solicitada). Se preferir, para não definir nenhuma propriedade do arquivo, inclua `-y` ao final do comando ( `npm init -y` ), que nada mas faz do que responder _YES_ para todas as perguntas.

#### **01.02. Instalando as dependências**

Vamos instalar as dependências que utilizaremos ao longo do projeto (ou seja, os pacotes _node_ com o _node package manager_ - **[npm](https://www.npmjs.com/)**). Poderíamos instalar todos de uma só vez (basta executarmos `npm i pacote1 pacote2 pacote2` ). Mas vamos instalar um a um para descrevermos brevemente o papel de cada um deles:

**express**

O pacote **[express](https://www.npmjs.com/package/express)** é esse _mini-framework_ que comentamos. Ele facilita a configuração do servidor [node.js](https://nodejs.org/en/). Para instalarmos ele devemos executar o seguinte comando no terminal:

``` sh
npm i express --save
```

> _O trecho `--save` garante que o pacote será salvo como uma dependência no arquivo **package.json** (que é o responsável por gerenciar as dependências do projeto e garantir que outros desenvolvedores terão todos os pacotes necesários listados num único local)._

**body-parser**

O pacote **[body-parser](https://www.npmjs.com/package/body-parser)** nos ajuda a analisar o _body_ das _requests_ recebidas. Para instalarmos, execute:

``` sh
npm i body-parser --save
```

**ejs**

O [ejs](https://www.npmjs.com/package/ejs) é um _template engine_. De forma simplificada, ele nos permite receber variáveis através das rotas (pelas _requests_) e renderizá-las mantendo uma sintaxe semelhante à do HTML. Com as _template engines_ também podemos usar código _JavaScript_ dentro desse mesmo documento (que muito se parece com um HTML). Para instalá-lo, vamos executar o seguinte trecho no terminal:

``` sh
npm i ejs --save
```

Vale pontuar que poderíamos ter instalado e definido o [EJS](https://ejs.co/) como _template engine_ a ser usada ao instalarmos o [express](https://www.npmjs.com/package/express) - complementando o comando com a opção `--view=ejs` .

**uuid**

O [uuid](https://www.npmjs.com/package/uuid) (_Universally Unique IDentifier_) vai gerar nomes aleatórios para nossos arquivos recebidos através do formulário que vamos construir (evitando assim nomes duplicados). Simples assim.

``` sh
npm i uuid --save
```

Também podemos instalar o [uuid-4](https://www.npmjs.com/package/uuid-4) - seu subpacote referente à versão 4 com `npm i uuid-v4 --save` .

**multer**

O [multer](https://www.npmjs.com/package/multer) funciona como o [body-parser](https://www.npmjs.com/package/body-parser) - mas para formulários `multipart/form-data` (com o atributo `enctype=multipart/form-data` , necessário para envio de arquivos via formulários - com o método `POST` ). Para instalá-lo:

``` sh
npm i multer --save
```

**sharp**

O pacote [sharp](https://www.npmjs.com/package/sharp) nos permite manipular imagens facilmente.

``` sh
npm i sharp --save
```

**nodemon**

Num projeto [node.js](https://nodejs.org/en/), sempre que há atualizações nos arquivos de _back end_ precisamos 'derrubar' (com Control + C no terminal) e 'levantar' o servidor novamente (com `npm run server` , por exemplo). O [nodemon](https://www.npmjs.com/package/nodemon) fica 'observando' as atualizações e _restarta_ o servidor automaticamente (mas ainda precisamos atualizar a janela no _browser_). Para instalar o [nodemon](https://www.npmjs.com/package/nodemon) basta executar:

``` sh
npm i nodemon --save-dev
```

Repare que nesse pacote/dependência, estamos incluindo a opção `--save-dev` . Isso para que o [nodemon](https://www.npmjs.com/package/nodemon) seja configurado como uma dependência de desenvolvimento apenas.

**dotenv**

O **[dotenv](https://www.npmjs.com/package/dotenv)** na realidade não seria uma dependência necessária. Mas acrescentamos aqui nesse projeto como um bônus, para aumentar seu repertório de pacotes [node](https://nodejs.org/en/). =)

Ele funciona de modo similar ao arquivo _.gitignore_ (que evita com que dados sejam compartilhados no repositório). Usamos o [dotenv](https://www.npmjs.com/package/dotenv) para declarar dados sensíveis como senha de banco de dados. No caso, vamos usar esse pacote para configurarmos o número da porta do servidor.

``` sh
npm i dotenv --save
```

**_Spoiler_**: para usarmos esse pacote, criamos um arquivo chamado _.env_ na raíz do projet, importamos o [dotenv](https://www.npmjs.com/package/dotenv) - `require('dotenv').config()` - e acessamos as variáveis definidas no arquivo com `process.env.NOME_DA_VARIAVEL` .

### 02 - Setup Inicial do Servidor

_**Branch: feature/02-server-initial-setup**_

#### **02.01. Criando o _server.js_**

Nosso servidor será definido no arquivo _server.js_, que será salvo na raíz do projeto. Podemos criá-lo através do próprio terminal - certifique-se de que está na raíz do projeto. Também vamos concatenar ( `&&` ) esse comando com outro que abrirá o arquivo no VS Code (ou outra ferramenta que estiver usando):

``` sh
touch server.js && code server.js
```

#### **02.02. Configurando o _server.js_**

Agora vamos, de fato, configurar o servidor. A seguir, uma breve explicação sobre cada trecho:

``` js
// Importando o express
const express = require('express')

// Importando o bodyParser
const bodyParser = require('body-parser')

// Importando o path (que nos permite gerenciar os caminhos no projeto mais facilmente)
const path = require('path')

// Instanciando o express na variável app
const app = express()

// Importando o dotenv
require('dotenv').config()

// Definindo a porta (caso não haja a variável configurada no .env, usará o segundo valor)
const port = process.env.PORT || 5000

// Permitindo o uso de JSON no body das requests com o bodyParser
app.use(bodyParser.json())

// Permitindo o parse das informações (com Content-Type correspondente ao type) vindas no body das requests com o bodyParser. O true permite informações encadeadas (usa a lib qs, com false usaria a lib querystring)
app.use(bodyParser.urlencoded({
    extended: true
}))

// Por fim, precisamos instruir o servidor a observar (listen) a porta definida - isso nos permite acessar localhost:PORTA_DEFINIDA para visualizarmos nosso projeto. Perceba que, além da porta, podemos passar um segundo parâmetro - uma função callback que, nesse caso, retorna um console.log para avisar que o servidor está 'rodando' na porta definida.
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
```
