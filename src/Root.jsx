import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { NavLink, Outlet } from 'react-router-dom';
import image1 from './assets/images/KLTd95pi4.png';
import image2 from './assets/images/Radiation-Symbol-PNG-Image.png';

import './Root.scss';
import AnalyticsTracker from './components/GoogleAnalytics/AnalyticsTracker';

function RootLayout() {
    return <>
        <Header className='main-header' icon='fa-solid fa-dragon'>
            <NavLink className='brand-link titillium' to="/" alt="Home">
                Chris<span className='large-output'>topher Ruckman</span><span className='small-output'>&nbsp;R</span>
            </NavLink>
            <NavBar />
        </Header>
        <span className="kicks-image"><img className='kicks-image-left' src={image1} alt="Biohazard" /></span>
        <Outlet />
        <span className="kicks-image"><img className='kicks-image-right' src={image2} alt="Radioactive" /></span>
        <Footer />
        <AnalyticsTracker />
    </>
}

export default RootLayout;