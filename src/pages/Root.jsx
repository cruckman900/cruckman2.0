import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { NavLink } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

function RootLayout() {
    return <>
        <Header className='main-header' icon='fa-solid fa-dragon'>
            <NavLink className='brand-link titillium' to="/" alt="Home">
                Chris<span className='large-output'>topher</span> Ruckman
            </NavLink>
            <NavBar />
        </Header>
        <Outlet />
        <Footer />
    </>
}

export default RootLayout;