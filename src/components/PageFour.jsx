import React from "react";

export function PageFour() {


    return(
        <div className="container-done">
            <div className="text-box-done">
                <div className="header-done">
                    <h1>O que eu já fiz</h1>
                </div>
                <div className="content-done">
                    <div className="front">
                        <div className="list-container">
                            <h3>Front-end</h3>
                                <ul>
                                    <li>Calculadora com temas light e dark</li>
                                    <li>Páginas de vendas (com Bootstrap)</li>
                                    <li>Jogo Mario Jump</li>
                                    <li>Páginas Responsivas</li>
                                    <li>Página de Login/Cadastro</li>
                                    <li>Quiz literário</li>
                                </ul>
                        </div>
                    </div>
                    <div className="back">
                        <div className="list-container">
                            <h3>Back-end</h3>
                                <ul>
                                    <li>CRUD</li>
                                    <li>Autenticação de login/cadastro</li>
                                    <li>Recuperação de senha Firebase</li>
                                    <li>Conexão com banco de dados (MySQL)</li>
                                    <li>Criação e manipulação de rotas</li>
                                    <li>Alguma coisa aqui</li>
                                </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}