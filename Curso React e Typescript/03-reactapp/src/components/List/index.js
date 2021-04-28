import { useEffect, useState } from "react";

export default function List(){
    const [contador,setContador] = useState(1);

    useEffect(() => {
        setContador(10);
        
        return () => {
            console.log(`New contador: ${contador}`);
        }
    }, [contador]); // [] -> Todas as variáveis que estou usando dentro do meu useEffect()
    // Mudança de estado ele é Async
    // return() => {} dentro do useEffect
    // Quando eu paro de Montar ele em tela, ele retorna algo nessa função.

    useEffect(() => {
        return () => {
            console.log("Desmontou");
        }
    }, []);

    /* useEffect não pode ser Async */
    useEffect(() => {
        async function setUserRepositories(){
            await localStorage.setItem('user-repositories', JSON.stringify({}));
        }

        setUserRepositories();
        //Porém dá para fazer um useEffect assíncrono desta forma!
    }, []);

    return (
        <div>New contador: {contador}</div>
    );
}