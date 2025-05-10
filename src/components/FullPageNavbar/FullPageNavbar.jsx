import { NavLink } from "react-router-dom";
import Links from "../ui/Links/Links";
import "./FullPageNavbar.scss";
import { useState } from "react";

const FullPageNavbar = () => {
    const [menu, setMenu] = useState(null);

    return (
        <div className="fpnavbar">
            <Links linksContainer="ul" links={
                <>
                    <li className="nav-list-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                            to="/" alt="Home" onClick={() => setMenu(null)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                            to="/About" alt="About" onClick={() => setMenu(null)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <span
                            className={'nav-list-link'}
                            alt="Development" onClick={() => {menu === "dev" ? setMenu(null) : setMenu("dev")}}
                        >
                            Development
                        </span>
                        {menu === "dev" &&
                            <div className="submenu">
                                <ul>
                                    <li className="nav-list-dditem">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                            to="/SoftwareDevelopment" alt="Software Development" onClick={() => setMenu(null)}
                                        >
                                            Software
                                        </NavLink>
                                    </li>
                                    <li className="nav-list-dditem">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                            to="/GameDesignDevelopment" alt="Game Development" onClick={() => setMenu(null)}
                                        >
                                            Game
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="nav-list-item">
                        <span
                            className={'nav-list-link'}
                            alt="Graphics" onClick={() => {menu === "graphics" ? setMenu(null) : setMenu("graphics")}}
                        >
                            Graphics
                        </span>
                        {menu === "graphics" &&
                            <div className="submenu">
                                <ul>
                                    <li className="nav-list-dditem">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                            to="/Gallery2D" alt="2D" onClick={() => setMenu(null)}
                                        >
                                            2D
                                        </NavLink>
                                    </li>
                                    <li className="nav-list-dditem">
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                                            to="/Gallery3D" alt="2D" onClick={() => setMenu(null)}
                                        >
                                            3D
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="nav-list-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                            to="/Music" alt="Music" onClick={() => setMenu(null)}
                        >
                            Music
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                            to="/Literature" alt="Literature" onClick={() => setMenu(null)}
                        >
                            Literature
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink
                            className={({ isActive }) => isActive ? 'nav-list-link-active' : 'nav-list-link'}
                            to="/Resume" alt="Resume" onClick={() => setMenu(null)}
                        >
                            Resum&eacute;
                        </NavLink>
                    </li>
                </>
            } />
        </div>
    )
}

export default FullPageNavbar