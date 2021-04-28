# -- Video 01 --

## O que é o que React?

### Uma biblioteca ou framework? 

Uma biblioteca/framework para trabalhar com desenvolvimento Frontend!
Inicialmente era para ser uma biblioteca, 
mais a ferramente cresceu tanto que se tornou um framework.

Virtual DOM: Árvore de elementos que roda em RAM.
(O React é mais rápido que o JS por causa do Virtual DOM)

Compara com o DOM e modifica apenas as Tags que foram modificadas!
Ao invés de atualizar a DOM inteira!

DOM: Árvore de elementos.

JSX: Javascript XML (HTML no Javascript)
(Altera o ordem, ao invés de ter um HTML base para um JS, é o JS que faz a base para o HTML)

Exemplo de JSX: 

```jsx
function Button(){
    return (
        <button>
            Botão Personalizado!
        </button>
    );
}
```
Componentização: A gente criar nossas próprias Tags ou Componentes!

Exemplo de Componentização:

```javascript
<Button></Button> // É diferente do HTML, por causada letra maiúscula no início da Tag!
```

-- Video 02 --

Babel: Transpilação do código

JS mais atual para um JS mais arcaico >> Fazendo todos os navegadores entenderem!

Webpack: Module bundler, semelhante ao Babel porém com outros tipos de arquivos.
Exemplo: CSS, img, outros pacotes...

-- Video 03 --

CRA -> Create React App

Configurar Webpack vs. Utilizar o CRA

Webpack:
    - Controle maior,
    - Mais leve.
 
CRA: 
    - Mais prático,
    - !Maior compatibilidade!

eject: Todas as configurações são ejetadas, porém perde as atualizações do React App.
react-app-rewired: adicionar configurações ao React Scripts sem precisar ejetar. 

-- Video 04 --

Export: Exporto meu componente!
Import: Importo meu componente!

-- Video 05 --

Propriedades (props): Formas que a gente tem de passar info. de um componente para outro.
Children: É uma propriedade que a gente passa entre as tags.

Exemplo de Children:

```javascript
<Button> Teste <Button>
```