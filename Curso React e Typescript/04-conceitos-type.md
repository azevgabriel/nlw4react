# TypeScript - Microsoft

## O que é o TypeScript?

    - Criado com o objetivo de ser um superset para o JS.
    - Considerado uma linguagem nova.
    
## Quais as ferramentas que Type adiciona ao JS?

    - Adicionar os tipos estáticos ao nosso código JS.

```js
    let text = 'a';
    text = 10;
```
Evitar que eu consiga atribuir qualquer valor.
```ts
    const text: string = 'texto';
```
    - Tudo é transpilado para JS. (Conversão)

## Vantagens

    - Evita resultados inesperados.

```ts
    function soma(num1: number,num2: number){

    }
    soma('10',5); //Não espera uma string!
```

    - Ele ajuda você a entender o código. 
    - Permite à trabalharmos com as últimas funcionalidades da linguagem.
    - Ajuda no intellisense (inteligência do editor de texto).

## Custo de ter um Bug 

    - Aumenta exponencialmente de acordo com as fases do projeto!
    - Resolver um bug em produção é infinitamnte mais caro que em desenvolvimento.

## Desvantagem

    - Queda na produtividade no processo de aprendizado.


