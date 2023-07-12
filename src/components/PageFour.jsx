import React from "react";
import Calculator from "../components/calculator.mp4"
import Responsive from "../components/responsive.mp4"
import Quiz from "../components/quiz.mp4"
import Login from "../components/login.mp4"



export function PageFour() {

    return(
        <div className="container-done">
            <div className="text-box-done">
                <div className="header-done">
                    <h1>O que eu já fiz</h1>
                </div>
                <div className="content-done">
                    <div className="front">
                        {/* Front */}
                        <div className="list-container">
                            <h3>Front-end</h3>
                                <ul>
                                    <li>
                                        <a href={Calculator} target="_blank" rel="noopener noreferrer">
                                        Calculadora com temas light e dark
                                        </a>
                                    </li>
                                    <li>
                                        <a href={Responsive} target="_blank" rel="noopener noreferrer">
                                        Páginas Responsivas
                                        </a>
                                    </li>
                                    <li>
                                        <a href={Login} target="_blank" rel="noopener noreferrer">
                                        Página de Login/Cadastro
                                        </a>
                                    </li>
                                    <li>
                                        <a href={Quiz} target="_blank" rel="noopener noreferrer">
                                        Quiz literário
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/gabimazetto/bibliotech-squad3/tree/main/src/pages/Loja" target="_blank" rel="noopener noreferrer">
                                        Páginas de vendas (com Bootstrap)
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="back">
                        <div className="list-container">
                            <h3>Back-end</h3>
                                <ul>
                                    <li>
                                        <a href="https://github.com/gabimazetto/food-express-server/tree/main/routes" target="_blank" rel="noopener noreferrer">
                                        CRUD
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/gabimazetto/food-express-server/tree/main/database" target="_blank" rel="noopener noreferrer">
                                        Conexão com banco de dados (MySQL)
                                        </a>
                                        </li>
                                    <li>
                                        <a href="https://github.com/gabimazetto/bibliotech-squad3/blob/main/src/pages/Login/Login.jsx" target="_blank" rel="noopener noreferrer">
                                        Autenticação de login/cadastro
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/gabimazetto/bibliotech-squad3/blob/main/src/pages/RecuperarSenha/RecuperarSenha.jsx" target="_blank" rel="noopener noreferrer">
                                        Recuperação de senha Firebase
                                        </a>
                                        </li>
                                    <li>
                                        <a href="https://github.com/gabimazetto/soulpet-back/blob/main/database/produto.js" target="_blank" rel="noopener noreferrer">
                                        Criação e manipulação de rotas
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}