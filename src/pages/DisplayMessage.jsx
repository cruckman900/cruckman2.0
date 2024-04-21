import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import DefaultPage from "../components/DefaultPage/DefaultPage";
import Footer from "../components/Footer/Footer";

export default function DisplayMessage({ icon, title, heading, message }) {
    return <>
        {
            title === 'Error' &&
                <Header className='main-header' icon='fa-solid fa-dragon'>
                    <NavLink className='brand-link titillium' to="/" alt="Home">
                        Chris<span className='large-output'>topher</span> Ruckman
                    </NavLink>
                    <NavBar />
                </Header>
        }

        <DefaultPage
            title={ title }
            icon={ icon } 
            className="home"
        >
            <div className="placeholder">
                <h1>{ heading }</h1>
                <p>{ message }</p>
            </div>
        </DefaultPage>

        {
            title === 'Error' &&
                <Footer />
        }
    </>
}