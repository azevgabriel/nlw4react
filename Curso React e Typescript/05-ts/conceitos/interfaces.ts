// object é o any dos objetos

interface ObjetoData {
    nome: string; // Obrigatório
    idade?: number; // Opcional
};

interface CampoDinamico {
    [key: string]: string;
    roberto?: string;
}

const obj: ObjetoData = {
    nome: "Gabriel",
    idade: 22,
};

function printObjeto(user: ObjetoData){
    console.log(user.nome);
    console.log(user.idade);
};

