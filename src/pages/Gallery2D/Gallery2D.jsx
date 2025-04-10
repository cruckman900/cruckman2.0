import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import './Gallery2D.scss';

export default function Gallery2D() {
    return <>
        <DefaultPage className="home" icon='fa-solid fa-palette' title='2D Artwork'>
            <Section title="Coming soon!" className="temp">
                <div className="redalert">
                    <div><i className="fa-solid fa-person-digging"></i></div>
                </div>
            </Section>
        </DefaultPage>
    </>
}