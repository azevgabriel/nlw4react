// Tipos:

let string: string = 'texto';
string = "texto";
string = `texto ${1}`;

let bool: boolean = true;
bool = !!1;
bool = Boolean(1);

let num: number = 10;
num = 0xff;

let arr: Array<string> = ['texto',"texto",`texto`];
let arr2: string[] = ['texto',"texto",`texto`];

let tuple: [number,string] = [1, '1'];
// Pouco usado...

enum Theme {
    Dark,
    Light 
}
enum Theme02 {
    Dark = 'dark',
    Light = 'light'
}

let any: any = {};
any = 1;
any = '';
// Qualquer coisa! Sem tipagem.
any.nome; // Isso é claramente é um erro.
// Evitar o any sempre que possível.

const number: number = any; // Isso é claramente é um erro.

let unknown: unknown = {};
unknown = 1;
//unknown.nome; 
// Não consigo acessar as funçôes e as propriedades.
// Quando vocẽ nâo souber a tipagem
// E quando não for uma tipagem importante para seu código.
// Não consigo fazer operaçôes.

//const A: string = unknown;
const B: any = unknown;

function sum(num1: number, num2: number):void {
    return undefined;
};

const result = sum(10,20);

function sum2(num1: number):never {
    while(true){

    }
};

function sum3(num1: number):never {
    throw new Error('');
};

let test = undefined; //Não exite
let test2 = null; //Exite mas nâo tem valor

const obje: object = { // any object
    a: '',
    "": true,
    1: null
};