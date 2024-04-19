import { NavLink } from 'react-router-dom';
import './NavBar.scss';

import Links from '../ui/Links/Links';

import image1 from '../../assets/images/SpookyCorridor_1920x1080.jpg';
import image2 from '../../assets/images/BD_Stretch.jpg';
import image4 from '../../assets/images/code.jpg';

export default function NavBar() {
    function handleClick() {
        document.getElementById('check').checked = false;
    }
    return (
        <nav className="navbar">
            <input type="checkbox" id="check" className="checkbox" hidden />
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
                    <Links linksContainer="ul" linksContainerClass="nav-list" links={
                        <>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/" alt="Home" onClick={handleClick}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/SoftwareDevelopment" alt="Software Development" onClick={handleClick}
                                >
                                    Software Development
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/GameDesignDevelopment" alt="Game Design / Development" onClick={handleClick}
                                >
                                    Game Design / Development
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/Gallery2D" alt="2D Artwork" onClick={handleClick}
                                >
                                    2D Artwork
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/Gallery3D" alt="3D Graphics / Effects" onClick={handleClick}
                                >
                                    3D Graphics / Effects
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/Music" alt="Music" onClick={handleClick}
                                >
                                    Music
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/Literature" alt="Literature" onClick={handleClick}
                                >
                                    Literature
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/Resume" alt="Resume" onClick={handleClick}
                                >
                                    Resum&eacute;
                                </NavLink>
                            </li>
                            <li className="nav-list-item">
                                <NavLink
                                    className={({isActive}) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                    to="/About" alt="About" onClick={handleClick}
                                >
                                    About
                                </NavLink>
                            </li>
                        </>
                    } />
                </div>
            </div>
        </nav>
    );
}