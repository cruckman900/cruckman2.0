import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                <a href="https://github.com/cruckman900" target="_blank" alt="Github"><i className='fa-brands fa-github'></i></a>
                <a href="https://lineardescent.artstation.com" target="_blank" alt="Artstation"><i className='fa-brands fa-artstation'></i></a>
                <a href="https://www.linkedin.com/in/christopher-ruckman-619318215" target="_blank" alt="LinkedIn"><i className='fa-brands fa-linkedin'></i></a>
                <a href="https://www.facebook.com/christopher.ruckman" target="_blank" alt="Facebook"><i className='fa-brands fa-facebook'></i></a>
                <a href="https://twitter.com/LinearDescent" target="_blank"><i className='fa-brands fa-twitter' alt="Twitter"></i></a>
            </div>
            <div>
                <i>&copy;{new Date().getFullYear()} cruckman. all rights reserved.</i> 
            </div>
        </footer>
    );
}