//Utility types

interface GithubUserData {
    login: string;
    id: string;
    email: string;
    bio: string;
    blog: string;
}

// Partial: preciso parcialmente de alguns dados.
function printGithubUserData(user: Partial<GithubUserData>){
    console.log(user.login)
}

printGithubUserData({bio: ''}); //Eu não preciso desse dado...


// Pick: preciso de um dado em específico.
function printGithubUserData02(user: Pick<GithubUserData, "login">){
    console.log(user.login)
}

printGithubUserData02({login: ''});

//Omit: para omitir alguns dados.
function printGithubUserData03(user: Omit<GithubUserData, "id" | "email" | "blog" >){
    console.log(user.login);
    console.log(user.bio);
};

//Readonly: Apenas de leitura

const newGitHubUser: Readonly<GithubUserData> = {
    login : "string",
    id : "string",
    email : "string",
    bio : "string",
    blog : "string"
};

//newGitHubUser.login = "123";

// Generics: São funcionalidades que permitem a passagem de tipos
// State - <S>
// Type - <T>
// Key - <K>
// Value - <V>
// Element - <E>

function print<T>(param: T) {
    console.log(param);    
}

print<string>('text');

function useState<S extends number | string>(initialState?: S){
    let state = initialState;

    function setState(newState: S) {
        state = newState;

        return state;
    }

    return {state, setState};
}

const state = useState<number>(10);
//const state02 = useState<boolean>(10);

//console.log(state.setState('contador'));
console.log(state.setState(1));

type Callback = (result: string) => void

function printAlgo(params: Callback){}
function callback(nome: string){}

printAlgo(callback);