---
layout: post
title: Conheça o seu algoritmo (e suas estruturas de dados!)
feature-img: "assets/img/banners/patricia_trie.png"
thumbnail: "assets/img/banners/patricia_trie.png"
tags: [Árvore, Busca, Algoritmo, Trie, C, Estrutura de Dados, Otimização]
---

Recentemente eu fiz uma colaboração em um projeto do Github. Era um protótipo de assistente virtual ao estilo JARVIS, no qual o usuário entra com uma frase e o programa processa essa entrada e identifica o que o usuário quer (ver emails, previsão do tempo, pesquisa no Google, etc.).

O modo que o programa processava a frase não era muito sofisticado. Ele possuía uma estrutura de dados contendo a classificação das palavras conhecidas e comparava as palavras que o usuário escreveu com as contidas nessa estrutura. Cada correspondência aumentava a pontuação da categoria da qual a palavra pertencia.

```c
enum Classes {
    CLASSE_1,
    CLASSE_2,
    CLASSE_3,
    etc
};

char classificador[NUM_DE_CLASSES][NUM_DE_FRASES][NUM_DE_PALAVRAS][TAM_DA_PALAVRA] {
    { // CLASSE_1
        {"eu", "estou", "com", "fome"},
        {"restaurantes", "por", "perto"},
        {"o", "que", "tem", "para", "comer"}
    },
    { // CLASSE_2
        {"como", "está", "o", "tempo", "hoje"},
        {"vai", "chover"},
        {"qual", "é", "a", "previsão", "do", "tempo"}
    } // etc...
}

int pontuacao[NUM_DE_CLASSES] = {0,0,0,...};

for(int i = 0; i < tamanho_entrada; i ++) {
    for (int classe = 0; classe < NUM_DE_CLASSES; classe ++){
        for (int frase = 0; frase < NUM_DE_FRASES; frase++) {
            for (int palavra = 0; palavra < NUM_DE_PALAVRAS; palavra++){
                if (strcmp(entrada[i],classificador[classe][frase][palavra]) == 0)
                    pontuacao[classe]++;
            }
        }
    }
}
```

Como eu disse, não era nada sofisticado.

O que o desenvolvedor desse projeto estava pedindo era alternativa para esses laços aninhados, que claramente não são muito eficientes. Não só cada palavra da entrada era comparada com **todas** as palavras do classificador, mas também era comparada com muitas strings vazias (repare na segunda frase da segunda classe: ela só tem duas palavras. No entanto, se `NUM_DE_PALAVRAS` for 10, nessa frase existirão 8 strings vazias que serão comparadas com as palavras da entrada!).

Assim que vi esse código, soube que para poder otimizá-lo, o primeiro passo era mudar a estrutura onde as palavras são armazenadas. A primeira alternativa que veio à mente foi usar uma **árvore Radix** (também conhecida como árvore Trie compacta.).

Não vou explicar como é o funcionamento dessa árvore neste post, isso vai ficar para uma próxima. Basta dizer que as operações de inserção, busca e remoção têm complexidade computacional de no máximo $$O(k)$$, onde $$k$$ é o comprimento da palavra que está sendo procurada. Lindo né? A implementação do nodo seria assim:

```c
typedef struct {
    char chave[TAM_DA_PALAVRA];
    int classes; // as classes são codificadas em binário para economizar espaço
    Nodo *descendentes[TAM_ALFABETO];
} Nodo;
```

Se considerarmos que `TAM_DA_PALAVRA` é 10 e que o alfabeto tem 26 letras, então cada nodo ocuparia 224 bytes em uma máquina de 64 bits. Ok, não parece muito para um computador moderno, mas isso ainda faz diferença em software embarcado. Felizmente existe uma evolução da árvore Radix de ameniza esse problema: a árvore Patricia (sim, é tipo Pokemon: Trie > Radix > Patricia 😂). Ela é uma árvore Radix binária, ou seja, ao invés de chegar a ter 26 descendentes por nodo, ela tem apenas dois. Essa mágica acontece pelo fato das comparações serem feitas bit a bit, ao invés de letra por letra.

A nossa estrutura de dados ficaria assim:

```c
typedef struct {
    unsigned short bit_inicio;
    unsigned short bit_fim;
    char chave[TAM_DA_PALAVRA];
    int classes; 
    Nodo *descendentes[2];
} Nodo;
```

E tudo isso por apenas 40 bytes por nodo!

**Caso encerrado!**
  
  <br />
  <br />
  <br />
  <br />
  <br />
  
  
Ainda não!

Enquanto eu pensava nas otimizações que ainda poderia fazer, reparei que ao usar uma árvore Patricia, eu teria que fazer uma média de 40 comparações por busca (o tamanho médio das palavras em inglês é aproximadamente 5, e o número de bits por caractere é 8, logo $$5*8=40$$). Se eu pudesse fazer as buscas em $$O(log_{2}n)$$, estaria melhor que a minha solução atual enquanto o número de palavras fosse menor que aproximadamente 100 bilhões. Em outras palavras: do ponto de vista prático $$O(log_{2}n)$$ é sempre melhor.

Antes que eu pudesse pensar em outros algoritmos sofisticados, lembrei-me que não seriam feitas inserções e nem remoções nessa coleção de palavras, apenas buscas. Isso significa que uma busca binária em um *array* ordenado resolve o meu problema.

Antes de poder criar esse array, defini a seguinte `struct` para manter a associação de palavras e classes:

```c
typedef struct {
    char palavra[TAM_DA_PALAVRA];
    int classes; // as classes são codificadas em binário para economizar espaço
} PalavraClasse; // ocupa apenas 16 bytes! Uhuu!!

```

Para gerar o *array* ordenado, eu primeiro preenchi um *array* `PalavraClasse temp[NUM_MAX_DE_PALAVRAS]` com todas as palavras da estrutura original. Esse array estava desordenado e continha repetições. Usei, então, a função `qsort` da **stdlib** para ordená-lo, removi as palavras repetidas e mesclei o código das classes delas (`p1.classes |= p2.classes`).

A preparação desse *array* foi custosa, mas agora era possível buscar as palavras que o usuário inseria em $$O(log_{2}n)$$.

Enfim, moral da história: tenha um bom repertório de algoritmos, mas não se esqueça dos básicos!
