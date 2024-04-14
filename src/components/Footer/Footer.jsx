import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                <a href="https://github.com/cruckman900" target="_blank"><i className='fa-brands fa-github'></i></a>
                <a href="https://lineardescent.artstation.com" target="_blank"><i className='fa-brands fa-artstation'></i></a>
                <a href="https://www.linkedin.com/in/christopher-ruckman-619318215" target="_blank"><i className='fa-brands fa-linkedin'></i></a>
                <a href="https://www.facebook.com/christopher.ruckman" target="_blank"><i className='fa-brands fa-facebook'></i></a>
                <a href="https://twitter.com/LinearDescent" target="_blank"><i className='fa-brands fa-twitter'></i></a>
            </div>
            <div>
                <i>&copy;{new Date().getFullYear()} Christopher Ruckman. All rights reserved.</i> 
            </div>
        </footer>
    );
}