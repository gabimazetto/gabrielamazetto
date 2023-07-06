import { Parallax } from 'react-parallax';
import imageOne from "../images/page1.png"

const LastPage = () => (
    <Parallax className="last-image"  bgImage={imageOne} strength={600}>
            <div className="content">
                <h3 className="last-page-text">Entre em contato comigo</h3>
        </div>
        
    </Parallax>
);

export default LastPage;