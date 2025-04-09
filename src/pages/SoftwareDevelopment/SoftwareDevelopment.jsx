import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import './SoftwareDevelopment.scss';

export default function SoftwareDevelopment() {
    return <>
        <DefaultPage className="home" icon='fa-solid fa-code' title='Software Development'>
            <Section title="Coming soon!">
                <div className="twoD">
                    <div><i className="fa-solid fa-person-digging"></i></div>
                </div>
            </Section>
        </DefaultPage>
    </>
}