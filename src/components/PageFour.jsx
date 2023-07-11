import React from "react";
import { Link, Route } from "react-router-dom";



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
                                    <li>Calculadora com temas light e dark</li>
                                    <li>Páginas de vendas (com Bootstrap)</li>
                                    <li>Jogo Mario Jump</li>
                                    <li>Páginas Responsivas</li>
                                    <li>Página de Login/Cadastro</li>
                                    <li>Quiz literário</li>
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
                                    <li>
                                        <a href="https://github.com/gabimazetto/soulpet-back/blob/main/routes/pets.js" target="_blank" rel="noopener noreferrer">
                                        Paginação
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