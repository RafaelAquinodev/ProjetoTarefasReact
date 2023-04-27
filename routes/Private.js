import { useState, useEffect  } from "react";

import {auth} from '../firebaseConnection' // fazer a conexão com autenticação

import {onAuthStateChanged} from 'firebase/auth' //verifica se tem usuario logado

import{Navigate}from 'react-router-dom'


export default function Private({children}){
    const [loading, setLoading] = useState (true); //começa carregando ate saber se tem usuario ou nao
    const [signed, setSigned] = useState(false); //verificar se o usuario esta logado

    useEffect (() => { //quando passar chamara o useEffect
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                //se tem user logado
                if (user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,

                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false); //vira falso pois ja tem usuario
                    setSigned(true); //agora o usuario esta logado
                } else{
                    //não possui user logado
                    setLoading(false);
                    setSigned(false);
                }

            })
        }

        checkLogin(); //chamando o checkLogin para ser executado
    }, [])
    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return <Navigate to="/"/>
    }
    return children; //é oq esta dentro da tag, no caso a pagina /admin

}