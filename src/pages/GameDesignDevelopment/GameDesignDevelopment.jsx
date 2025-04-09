import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import './GameDesignDevelopment.scss';

export default function GameDesignDevelopment() {
    return <>
        <DefaultPage className="home" icon='fa-solid fa-gamepad' title='Game Design / Development'>
            <Section title="Coming soon!">
                <div className="twoD">
                    <div><i className="fa-solid fa-person-digging"></i></div>
                </div>
            </Section>
        </DefaultPage>
    </>
}