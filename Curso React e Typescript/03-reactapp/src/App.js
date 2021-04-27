import { useCallback, useEffect, useMemo, useState } from 'react';
/* Isso é um Hook(Gancho) do react! */
/*  Ele pega os Hooks que estão sendo chamados DENTRO dos componentes 
    Não posso colocar os Hooks dentro de outros escopos. 
    Exemplo: Um useEffect() dentro de uma function qualquer.
*/

import Button from './components/Button';
import List from './components/List';
import api from './services/api';

function App() {
  // ?AJAX?, quem faz as Requisiçôes HTTP?
  // !axios! -> API mais amigável que o fetch do JS
  const set = new Set(); //Recebe valores únicos.

  const [username,setUsername] = useState("azevgabriel");
  const [userData, setUserData] = useState({});

  const[showList,setShowList] = useState(true);
  
  const [contador, setContador] /* [value, setValue] */ = useState(0);
  // Desestruturar o Array: []
  // Se eu tiver um valor muito grande no inicial State
  // Exemplo useState(99999999999*99999999999);
  // Posso usar uma função useState(() => 99999999999*99999999999);
  // Para ganhar Performance!
  const contaContador = useCallback(() => {
    setContador((oldContator) => oldContator + 1); 
    set.add(contaContador);
  }, [])
  
  //function contaContador(){
  //  setContador((oldContator) => oldContator + 1); 
  //  set.add(contaContador);
  //};
  // Função recria cada fez que eu uso...
  console.log(set.size);
  
  //const number = 999999999 * 999999999;
  const number = useMemo(() => 999999999 * 999999999, []);
  // Utilizar nos calcúlos pesados.

  /*
    - Button ele está renderizando!
    - UseState renderiza o elemento novamente, além de atualizar a const.
    Ele cria outro elemento.
    - oldContador é uma boa prática, para nâo perder o valor quando houver um delay.
  */

  useEffect(() => {
    setContador((oldContator) => oldContator + 1);
  },[]);
  /* Arrow Function, Array */
  /*  Uma função com ciclo de vida
      3 estados nesse ciclo de vida!
      - Quando a tela é montada. -> componentDidMount()
      - Quando o componente é atualizado. (setValue) -> componentDidUpdate()
      - Quando nosso componente é desmontado. -> componentWillUnmount()
  */

  useEffect(() => {
    console.log("Atualizei!");
  },[contador]);
  // Vai usar o Effect sempre que o contador for atualizado ou renderizado novamente.

  useEffect(() => {
    const localStorageUserDate = localStorage.getItem('@reactapp:GITHUB_USER_DATA');
    setUserData(JSON.parse(localStorageUserDate));
  }, []);

  async function getUserGithubData(){
    const {data} = await api.get(username);
    localStorage.setItem('@reactapp:GITHUB_USER_DATA', JSON.stringify(data));
    // key, value(String)
    // key = @nomedaaplicação:CHAVE_DE_FATO
    // Manter sempre um padrão!
    setUserData(data);
  }

  return (
    <div>
      <h1>Hello React World!</h1>
      <hr/>
      <Button text="text">children</Button>
      <hr/>
      <div>
        <h3>Contator: {contador}</h3>
        <button onClick={contaContador}>Aumenta contator</button>
      </div>
      <hr/>
      <div>
        {showList && <List />}
        <button onClick={() => setShowList((oldShowList) => !oldShowList)}>Monta/Desmonta</button>
      </div>
      <hr/>
      <div>
        <input 
          type="text" 
          value={username} 
          onChange={(event) => setUsername(event.target.value)} 
        />
        <button onClick={getUserGithubData}>Pesquisar usuário</button>
        <br/>
        {userData.name}
        <br/>
        {userData.company}
      </div>
    </div>
  );
}

export default App;
