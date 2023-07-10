import devicon from "devicon";

export function Contato() {
    return (
    <div className="container-contact">
        <div className="content-contact">
            <div className="icon-wrapper-contact">
                <a className="link-contact" href="https://github.com/gabimazetto" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original icon-medium"></i>
                <p>/gabimazetto</p>
                </a>
            </div>
            <div className="icon-wrapper-contact">
                <a className="link-contact" href="https://www.linkedin.com/in/gabriela-mazetto-gusm%C3%A3o-5b21a0266/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-linkedin-plain icon-medium"></i>
                <p>Gabriela Mazetto Gusmão</p>
                </a>
            </div>
            <div className="icon-wrapper-contact">
                <a className="link-contact" href="https://twitter.com/devsergabi" target="_blank" rel="noopener noreferrer">
                <i className="devicon-twitter-original icon-medium"></i>
                <p>@devsergabi</p>
                </a>
            </div>
            <div className="icon-wrapper-contact">
                <a className="link-contact" href="mailto:gmazettog@gmail.com">
                <i className="devicon-google-plain icon-medium"></i>
                <p>gmazettog@gmail.com</p>
                </a>
            </div>
        </div>
    </div>
);
}
