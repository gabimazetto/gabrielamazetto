import { Parallax } from 'react-parallax';
import imageThree from "../images/page3.png"
import "devicon";

const ImageThree = () => (
    <Parallax className="image"  bgImage={imageThree} strength={600}>
        <div className="container-languages">
                <div className="header-languages">
                    <h1 className="linguagens-text">Linguagens Atuais</h1>
                </div>
                <div className="content-languages">
                    <div className="icon-wrapper">
                        <i className="devicon-html5-plain icon-large"></i>
                        <h3>HTML5</h3>
                    </div>
                    <div className="icon-wrapper">
                        <i className="devicon-css3-plain icon-large"></i>
                        <h3>CSS3</h3>
                    </div>
                    <div className="icon-wrapper">
                        <i className="devicon-javascript-plain icon-large"></i>
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <div className="icon-wrapper">
                        <i className="devicon-react-original icon-large"></i>
                        <h3>REACT.JS</h3>
                    </div>
                    <div className="icon-wrapper">
                        <i className="devicon-nodejs-plain icon-large"></i>
                        <h3>NODE.JS</h3>
                    </div>
                    
            </div>
        </div>
    </Parallax>
);

export default ImageThree