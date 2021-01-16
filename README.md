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
