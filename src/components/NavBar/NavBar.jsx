import './NavBar.scss';

import image1 from '../../assets/images/SpookyCorridor_1920x1080.jpg';
import image2 from '../../assets/images/BD_Stretch.jpg';
import image4 from '../../assets/images/code.jpg';

export default function NavBar() {
    return (
        <nav className="navbar">
        <input type="checkbox" id="check" className="checkbox" style={{display: 'none'}} />
        <div className="hamburger-menu">
            <label htmlFor="check" className="menu">
                <div className="menu-line menu-line-1"></div>
                <div className="menu-line menu-line-2"></div>
                <div className="menu-line menu-line-3"></div>
            </label>
        </div>

        <div className="navbar-navigation">
            <div className="navbar-navigation-left">
                <img src={ image1 } className="left-img left-img-1" />
                <img src={ image4 } className="left-img left-img-2" />
                <img src={ image2 } className="left-img left-img-3" />
            </div>

            <div className="navbar-navigation-right">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Home</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Software Development</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Game Design / Development</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">2D Artwork</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">3D Graphics / Effects</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Music</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Literature</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="#" className="nav-list-link">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}