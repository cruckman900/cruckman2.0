import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                <a href="#" target=""><i className='fa-brands fa-github'></i></a>
                <a href="#" target=""><i className='fa-brands fa-artstation'></i></a>
                <a href="#" target=""><i className='fa-brands fa-linkedin'></i></a>
                <a href="#" target=""><i className='fa-brands fa-facebook'></i></a>
                <a href="#" target=""><i className='fa-brands fa-twitter'></i></a>
            </div>
            <div>
                <i>&copy;{new Date().getFullYear()} Christopher Ruckman. All rights reserved.</i> 
            </div>
        </footer>
    );
}