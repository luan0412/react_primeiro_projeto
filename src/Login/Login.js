import React  from "react";
import './Login.css'

export default function Login(){
    function mostrarmensagem(){
        alert("Usúario ou senha inválido")
    }
    return(
        <div> 
            <form className="form">
                <div className="usuario">
                    <input type="username" name="username" placeholder="Nome do usúario"></input>
                </div>
                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha"></input>
                </div>
                <button className="botao" onClick={() => mostrarmensagem()}> Logar</button>
                <p> Esqueceu a sua senha ? <a target="_blank" href= "https://www.google.com.br/"> Clique aqui</a> </p>
            </form>

        </div>


        )
}