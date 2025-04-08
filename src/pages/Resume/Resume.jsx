import { useRef } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import ResumeBody from "./ResumeBody";
import Button from "../../components/ui/Button/Button";

import './Resume.scss';

function Resume() {
    const printRef = useRef(null);

    return (
        <DefaultPage icon='fa-solid fa-hat-wizard' title='Resum&eacute;'>
            <Section title='I am currently on Social Security Disability, but...' className="section">
                <div className="resumePage">
                    <div className="resumePage-left">
                        <Button onClick={() => window.print()}>Print Resum&eacute;</Button>
                    </div>
                    <div className="resumePage-right">
                        <h3>I feel empty without a purpose by not having a job and a responsibility.</h3>
                        <div className="printContainer">
                            <ResumeBody id="printable-content" ref={printRef} />
                        </div>
                    </div>
                </div>
            </Section>
       </DefaultPage>
    );
}

export default Resume;