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

#### **02.03. Definindo o script _start_**

Se executarmos `node server.js` no terminal, veremos a mensagem do `console.log()` no terminal. Ou podemos, ainda, usar o `nodemon server.js` (para não precisarmos derrubar e levantar o servidor a cada atualização).

Mas, faremos um _script_ para chamar esse trecho de código. No arquivo _package.json_, vamos criar o _script_ `start` (dentro da propriedade `scripts` ) da seguinte maneira:

``` json
"start": "nodemon server"
```

Dessa forma, podemos executar `npm start` e o _script_ será executado.

### 03 - Setup Inicial de Rotas

_**Branch: feature/03-routes-initial-setup**_

#### **03.01. Criando o _routes.js_**

Apesar de nosso servidor estar configurado, ao acessarmos _localhost:5000_ visualizamos a seguinte mensagem: `Cannot GET /` . Isso ocorre pois não temos nenhuma rota configurada. Então vamos configurar!

Vamos criar e abrir o arquivo na nossa IDE com `touch routes.js && code routes.js` .

#### **03.02. Configurando o _routes.js_**

Agora precisamos configurar o arquivo. Faremos o seguinte:

``` js
// Importando o express
const express = require('express')

// Instanciando o Router (necessário para criarmos as rotas)
const router = express.Router()

// Definindo a rota para a URL principal com o método GET
router.get('/', function(req, res) {

    // Definindo o retorno dessa rota com o método send (no arquivo vamos usar arrow function)
    res.send('<h1>Upload de Imagens com Node.js</h1>')
})

// Exportando o router para podermos importá-lo em outros arquivos
module.exports = router
```

#### **03.03. Importando o _routes.js_**

Por fim, precisamos importar e usar esse arquivo no _server.js_:

``` js
// [...]

// Importando o arquivo routes.js
const router = require('./routes')

// [...]

// Definindo o uso do arquivo para a rota principal
app.use('/', router)

// [...]
```

Ao acessarmos novamente a URL _localhost:5000_ veremos o retorno definido em nosso _routes.js_.

### 04 - View Index

_**Branch: feature/04-index-view**_

#### **04.01. Criando a View _index.ejs_**

Até o momento, estamos renderizando HTML através do método `res.send()` , passando o código HTML como seu argumento. Mas para podermos ter uma página mais elaborada, ao invés de criarmos um arquivo HTML e um _script_ JavaScript integrado através da tag `<script>` , vamos usar a _template engine_ [EJS](https://ejs.co/).

Usá-la, nos permite trabalhar de forma mais simplificada com JS e HTML no mesmo documento - além de recebermos valores através de um objeto enviado através da rota ou do _controller_.

O primeiro passo é criarmos um arquivo com extensão _.ejs_ dentro da pasta _views_.

#### **04.02. Página Inicial com HTML e Bootstrap**

O uso do JS no arquivo _.ejs_ não é obrigatório. Ou seja, podemos ter um HTML 'tradicional' que o mesmo será renderizado normalmente. Para nossa página inicial (_index.ejs_), usaremos o [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - assim podemos nos focar no **upload de imagem com node.js** sem nos preocuparmos com CSS mas conferindo um estilo bacana ao nosso _front end_.

No caso, usaremos basicamente o sistema de _grid_ e componentes de formulário. Mas antes, é importante ressaltar que precisamos importar o CSS e os scripts JS do [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

O link para o estilo deve ser inserido na tag `<head>` do nosso documento (se for usar um estilo customizado, insira seu link depois do link do Bootstrap, para que possa sobrescrevê-lo, se necessário):

``` html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
```

Já os _scripts_, devem ser posicionados no final do documento, antes do fechamento da tag _body_ ( `</body>` ), de modo a não prejudicar a performance e funcionamento do site. É importante que sejam inseridos exatamente nessa mesma ordem (pois os _scripts_ acima são dependências dos seguintes - ou, os _scripts_ debaixo precisam, são dependentes dos que são declarados acima deles):

``` html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
```

Outra opção, é utilizar o _script_ do _bundle_ - que já contém ambos os scripts em um link só:

``` html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
```

Acesse a [documentação](https://getbootstrap.com/docs/5.0/getting-started/introduction/) para saber mais detalhes sobre como tirar maior proveito dessa biblioteca.

#### **04.03. Direcionando a Rota para a View**

**_routes.js_**

Se acessar _localhost:5000_, verá que a página não exibe nada de novo, continua exatamente igual. Isso ocorre pois precisamos informar ao nosso _back end_ que, ao acessar a rota principal ( `/` ), precisamos mostrar o conteúdo da nossa _view_. Para isso, utilizaremos o método `render()` , que recebe como argumentos a _view_ e, possivelmente, um objeto com valores a serem transmitidos para a _view_ (mas vamos devagar, por enquanto só passaremos a _view_ a ser utilizada). No arquivo _routes.js_ vamos deixar a rota da seguinte maneira:

``` js
router.get('/', (req, res) => {
            res.render('index')
        }
```

**_server.js_**

Mas não é só isso! Para podermos passar simplesmente o nome da _view_ no método `render()` sem nos preocuparmos com o 'caminho' até o arquivo - e para informarmos ao [Express.js](https://expressjs.com/) que estamos usando o [EJS](https://ejs.co/) como _template engine_, também precisamos incluir os seguintes trechos no arquivo _server.js_:

``` js
// Indica qual o caminho para as views
app.set('views', path.join(__dirname, 'views'));

// Indica que o template engine (ou view engine) a ser usado é o EJS
app.set('view engine', 'ejs')
```

### 05 - View Profile

_**Branch: feature/05-profile-view**_

#### **05.01. Criando a View _profile.ejs_**

Vamos criar uma nova _view_, que será a página de destino após o 'cadastro' de nosso usuário (usado para aplicarmos o _upload_ de imagem). Não trataremos banco de dados nessa prática, será apenas uma simulação.

Podemos copiar e colar o arquivo _index.ejs_ dentro da pasta _views_. E então, após renomeá-lo para _profile.ejs_, vamos simplesmente adaptar o conteúdo principal (dentro da tag `<main>` ). E, antes de criarmos a parte principal do projeto (o _upload_), vamos usar um conteúdo fictício. Escolhemos o personagem Randy Marsh, do South Park, como exemplo:

![Randy Marsh](https://static.wikia.nocookie.net/spsot/images/b/b9/Randy_Marsh_facebook_profile.png)

_**Randy Marsh**_

Claro que você pode usar a imagem e dados que preferir, é apenas um exemplo. =)

Após criarmos o conteúdo de marcação (como chamamos conteúdo temporários de exemplo), vamos replicar o que fizemos no arquivo _routes.js_:

_**routes.js**_

``` js
// Estamos informando que, ao acessar a página '/profile' com o método GET, a view 'profile' deve ser renderizada
router.get('/profile', (req, res) => res.render('profile'))
```

Acesse _localhost:5000/profile_ para ver como ficou a nossa página de perfil.

### 06 - Partial Views

_**Branch: feature/06-partial-views**_

#### **06.01. Partial Views**

Reparou que estamos repetindo uma série de trechos do nosso HTML? O uso do _template engine_ nos permite reaproveitar código. E isso nos traz inúmeras vantagens, sendo as principais:

**1. Manutenabilidade**

Usando _partial views_, conseguimos reutilizar um único código. Por exemplo: a tag `<header>` normalmente contém o menu de nosso site. Imagine que seu cliente resolve trocar um item do menu. Até o momento, teríamos de acessar cada um dos arquivos para trocar um único link. Mas com esse reaproveitamento, só precisaríamos atualizar um arquivo específico e a atualização seria refletida em todas as páginas que importam esse trecho.

**2. Legibilidade**

Ao remover esses trechos repetitivos, o arquivo de uma página específica acaba ficando muito mais limpo e, consequentemente, legível (o que acaba, inclusive, otimizando nosso tempo de trabalho por conta da rapidez com que conseguimos ler e manipular nosso código).

**3. Responsabilidades**

Ao dividirmos o nosso código em trechos, conseguimos criar arquivos com responsabilidades únicas. Isso reforça as últimas duas vantagens citadas e facilita nosso fluxo de trabalho. Seja para incorporar nossas funcionalidades, identificar possíveis _bugs_, ou mesmo para realizar _rollback_ (desfazer a última ação/atualização).

Agora que já sabemos as vantagens de se utilizar as _partial views_, vamos voltar para nosso código! Para utilizarmos as _partial views_ vamos criar uma pasta chamada _partials_ dentro da pasta _views_.

#### **06.02. Head**

Dentro da pasta _partials_ criaremos nosso primeiro arquivo parcial - o _head.ejs_. Basicamente vamos copiar o trecho do início do arquivo _index.ejs_ até a abertura da tag `<body>` . Então vamos substituir esse mesmo trecho - tanto no _index.ejs_ quanto no _profile.ejs_ - por um trecho com uma sintaxe _scriptlet_. Esse trecho deve ser assim:

``` ejs
<%- include('partials/head') %>
```

> _**Scriptlet syntax**_: com o [EJS](https://ejs.co/), podemos utilizar algumas marcações específicas que nos permitem incluir arquivos ( `<%- include('partials/arquivo-parcial') %>` ).

#### **06.03. Header**

Faremos o mesmo procedimento, mas dessa vez com o trecho da tag `<header>` (da abertura ao fechamento da tag). Criaremos o arquivo _header.ejs_ dentro da pasta _./views/partials_, copiaremos esse trecho da _index.ejs_ e colaremos no arquivo. Então substituiremos esse mesmo trecho (nos arquivos _index.ejs_ e _profile.ejs_) por:

``` ejs
<%- include('partials/head') %>
```
