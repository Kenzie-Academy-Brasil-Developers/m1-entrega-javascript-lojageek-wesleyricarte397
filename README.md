Logo

JavaScript | Entrega - Catálogo Geek
Tópicos do conteúdo
Introdução
Você foi convidado para ajudar alguns desenvolvedores a criar uma página Geek.

De início, eles somente usarão a página para listar os produtos que eles possuem em estoque, e efetuarão as vendas por telefone e aplicativos de venda.

Em suma, um catálogo virtual.

Os exemplos de código servem para demonstrar a lógica da construção. O desenvolvimento é totalmente seu.

A equipe irá fornecer todas as imagens para a construção do catálogo.

Faça clone deste repositório.

Você vai encontrar no repositório a pasta assets e dentro dela a pasta, img com as imagens dos itens e da logo.

Crie a estrutura do projeto:

Crie os arquivos index.html, style.css e script.js.
Desenvolva dentro do arquivo index.html a estrutura html base usando o .
Ligue ao index.html a folha de estilo e o script.
Já existe um layout a ser implementado.

Imagem Conteúdo

Pensando na marcação
Antes de começar a criar os estilos, você deve pensar em como sua página será marcada. Pense no seu html como sendo caixas. Então vamos analisar.

Nós temos o corpo do nosso documento.
Dentro do corpo, temos nosso menu de navegação e também o nosso conteúdo principal.
Dentro do nosso conteúdo principal vamos ter duas seções.
Cada seção carrega uma lista.
Depois que sua marcação foi pensada, chegou o momento de criar.

Dentro do seu index.html crie os elementos necessários para que você consiga chegar à marcação sugerida.

Lembre-se que você irá trabalhar com css, então vai ganhar tempo se criar suas tag's dando-lhes suas respectivas classes.

Dar classes as tags é muito importante, pois a partir delas é que vai conseguir capturar os elementos necessários para manipulação no css e no JavaScript.

🎨 Com estilo
Identidade visual é tudo! Alguns critérios devem ser respeitados.

As cores
Cor

Hexadecimal

Local

Azul

#0A99FE

Menu Ativado

Azul c/ Opacidade

#0A99FE com 10% de opacidade

Menu inativo

Preto 0

#1B1B1B

Títulos

Cinza 0

#868383

Textos

Branco

#FFFFFF

Fundo da Barra de navegação e da página

Os tamanhos
Elemento

Largura

Altura

Card

207px

275px

Botões

150px

40px

Imagem

Deverá ocupar a parte superior do card, podem ser alteradas da maneira que for melhor para ficarem adequadas ao espaço.

font-family

Roboto, sans-serif

Local

Tamanho

Tipo

Título do Card

20px

Medium

Valor do Produto

16px

Regular

Títulos de seção

20px

Regular

Texto dos botões

20px

Regular

Fonte do texto
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

A equipe já separou a fonte do projeto. Basta inserir a importação acima na folha de estilo.

Quando for usar basta inserir a especificação da família da fonte.
Usando o comando:

font-family: 'Roboto', sans-serif;

Pense no layout de forma que seja usual. Caso a quantidade de itens aumente, não é interessante que a página quebre.

Você pode usar uma barra de rolagem horizontal para solucionar este problema.

Dentro de cada seção use o atributo:

overflow-x: auto;

Este comando fará com que a barra de rolagem do eixo x(Horizontal) apareça sempre que a largura da caixa(lista) seja menor que a quantidade de itens.

Sendo assim, os itens irão permanecer em linha, evitando que sua lista quebre o layout da página.

Pensando nas Funcionalidades.
Atualmente a loja possui apenas duas seções de itens. Cada uma com três itens, mas logo chegarão mais.

A loja está dividida entre a seção de quadros decorativos(Decorative frames) e bonecos de ação(Action figure).

Os itens a serem vendidos correspondem a objetos com as seguintes propriedades:

Image - Uma imagem do produto.
Name - O nome do produto.
Price - O valor do produto.
type - Uma string que representa se o tipo é uma figura de ação ou um quadro.
Crie uma lista chamada itens e crie todos os objetos dentro dela.

Depois de já ter criado todos os elementos.

Desenvolva duas listas:

listFigures - Irá armazenar todos os objetos que fazem parte da seção de action figures.
listFrames - Irá armazenar todos os objetos que fazem parte da seção de frames.
Crie uma função chamada separateItens. Esta função deverá receber a lista itens.

Percorra a lista. Acesse a propriedade type e verifique se o objeto é um quadro ou um figure.
Quando o objeto for um quadro o adicione na lista listFrames caso contrário o adicione na lista listFigure.
Sabemos que existem dois array's e também sabemos que em tela existem duas seções.

Antes de pensar em como renderizar, devemos pensar onde renderizar.

Você já domina a captura de elementos da árvore DOM, então sabe que pode usar o método, .getElementsByClassName da seguinte forma:

let secaolistFigure = document.getElementsByClassName('secao-list-Figure')[0]

Aqui damos um exemplo fictício onde neste cenário, damos a nossa seção de actions figure a classe de; "secao-list-Figure".

Ao decorrer do seu desenvolvimento, você pode ter dado um nome diferente a sua classe, não vai mudar nada no processo, somente o nome usado para selecionar o elemento.

Assim, você vai capturar a lista com a classe "secao-list-Figure", você pode fazer o mesmo processo para capturar a seção de frames.

Agora devemos manipular os elementos para que todos os itens sejam renderizados da maneira correta nas seções correspondentes.

Na seção de frame os itens do array de frames e na seção de action figure os itens de action figure.

Pensando na solução
Precisamos percorrer nossos arrays
for(let i = 0; i < listFigure.length; i++){
//lógica
}

Precisamos inserir cada elemento de nosso array na seção.

Criamos uma, li para cada objeto da lista
let elementoLista = document.createElement('li')
// criamos o elemento de lista

Criamos um elemento span para receber o valor nome do nosso objeto
let nome = document.createElement('span')
//criamos um elemento do tipo span para renderizar o nome

Damos o valor ao span usando a propriedade nome do nosso objeto no índice atual.
nome.innerText = `${listPerson[i].nome}`//Inserimos um valor ao nosso span, usando o valor nome do nosso objeto.

Inserimos os spans ao li. Nosso li é representado pela a variável
elementoLista.
elementoLista.appendChild(nome)
//Inserimos no nosso elemento de lista, o elemento span//já com o valor nome do nosso objeto.

Inserimos o li dentro da seção 'secaoListFigure' que é uma ul e já pertence a árvore DOM. Nós 'capturamos' este elemento na atividade passada.

secaolistFigure.appendChild(elementoLista)
//Inserimos o nosso elemento de lista, já com o nosso elemento//span a nossa secao de produtos 'secao-list-figures'.

Não é exatamente o que precisa, mas tem tudo o que precisa.

Nós usamos o código acima dentro de uma estrutura de repetição para percorrer uma lista de objetos.

Você só vai conseguir visualizar os itens em tela, se estiver capturando os elemento de <ul> de maneira correta na sua árvore DOM e se estiver dando a appendChild() dos itens de lista(<li>) criados pelo o JS.

Envie o link do githubPages e o link do seu repositório nos comentários. Atenção, seu repositório deverá ser compartilhado apenas com a organização. (Internal)
