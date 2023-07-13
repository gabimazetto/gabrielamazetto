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
                    <p>Quando comecei a estudar programação, achei que focaria no front-end, por ser mais criativa e gostar da parte visual (já trabalhei como social media), mas o back-end foi aos poucos me conquistando e aqui estou eu, uma dev fullstack. </p>
                </div>
                    
            </div>
            <img src={GabiImage} className="gabi-image" />
        </div>
        
    )
}