import React from "react"
import GabiImage from "../images/GabiImage.jpeg"


export function PageOne() {
    return (
        
        <div className="container-profile">
            <div className="text-box-profile">
                <div className="header-profile">
                    <h1>Quem sou eu?</h1>
                </div>
                
                <div className="text-profile">
                    <p>Me chamo Gabriela, mas todos me chamam de "gabi". Nasci, cresci e moro em Curitiba, PR. Tenho 27 anos e estou em transição de carreira, saindo da área da educação (cursava Letras pela UFPR) para área da tecnologia. Além de vídeo aulas e workshops, recentemente finalizei um bootcamp em React.js e Node.js pela Soulcode Academy. </p> <br />
                    <p>Por ser mais criativa e bastante visual, o Front-End me conquistou desde o começo. Gosto muito de ver os projetos que estou fazendo tomando forma. Ainda estou só no começo, mas planejo ver várias páginas programadas por mim, ou com minha ajuda, por aí. </p>
                </div>
                    
            </div>
            <img src={GabiImage} className="gabi-image" />
        </div>
        
    )
}