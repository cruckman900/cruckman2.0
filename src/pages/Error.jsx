import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import DefaultPage from "../components/DefaultPage/DefaultPage";
import Footer from "../components/Footer/Footer";

export default function ErrorPage() {
    return <>
        <Header className='main-header' icon='fa-solid fa-dragon'>
            <span className='titillium'>Chris Ruckman</span>
            <NavBar />
        </Header>
        <DefaultPage title="Error" icon="fa-solid fa-bug" className="home">
            <main className="flexbox-column-center">
                <h1>An error occurred</h1>
                <p>Could not find this page!</p>
            </main>
        </DefaultPage>
        <Footer />
    </>
}