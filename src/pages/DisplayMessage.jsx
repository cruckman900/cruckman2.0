import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import DefaultPage from "../components/DefaultPage/DefaultPage";
import Footer from "../components/Footer/Footer";
import Section from "../components/ui/Section/Section";

export default function DisplayMessage({ icon, title, heading, message, displayFullPage=false }) {
    return <>
        {
            displayFullPage &&
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
            <Section title={heading}>
                <div style={{padding: '1rem'}}>{ message }</div>
            </Section>
        </DefaultPage>

        {
            displayFullPage &&
                <Footer />
        }
    </>
}