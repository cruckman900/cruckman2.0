import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import './SoftwareDevelopment.scss';

export default function SoftwareDevelopment() {
    return <>
        <DefaultPage className="home" icon='fa-solid fa-code' title='Software Development'>
            <Section>
                Website links don&apos;t lead anywhere yet but the GitHub links work. I haven&apos;t hosted them anywhere other than my profile site 
                (cruckman.com). I have a hosting plan for InterTrade Solutions, but may allow it to expire and just keep the domains for it and 
                chatterboxsm and host them elsewhere for free. I love NameCheap, but it gets expensive having to renew these sites every year just 
                to demo projects.
            </Section>
            <Section title="Course Projects">
                <div>
                    <div><a href="" alt="BookIT">BookIT</a></div>
                    <div>
                        <b>Technologies Used:</b> 
                        Next.JS, TypeScript, Bootstrap, mongoose, MongoDB, Redux, bcrypt, crypto, next-auth, nodemailer, node-geocoder, MapQuest, 
                        react-datepicker, Moment.js
                    </div>
                    <div><b>GitHub:</b> <a href="https://github.com/cruckman900/BookIT" target="_blank" alt="BookIT on GitHub">Source Code</a></div>
                </div>
            </Section>
            <Section title="Personal Projects">
                <div>
                    <div><b>cruckman.com</b></div>
                    <div><b>Technologies Used:</b> ReactJS, SASS, three.js, react-three/drei, react-three/fiber, WaveSurfer</div>
                    <div><b>GitHub:</b> <a href="https://github.com/cruckman900/cruckman2.0" target="_blank" alt="cruckman.com on GitHub">Source Code</a></div>
                </div>
                <br />
                <div>
                    <div><a href="" alt="ChatterboxSM">ChatterboxSM</a></div>
                    <div><b>Technologies Used:</b> ReactJS, Module CSS, Node.JS, axios, express, MySQL, nodemailer, Pug, ContextApi</div>
                    <div><b>GitHub:</b>&nbsp;
                        <a href="https://github.com/cruckman900/chatterboxsm.com" target="_blank" alt="cruckman.com on GitHub">Front End</a>&nbsp;&mdash;&nbsp;
                        <a href="https://github.com/cruckman900/chatterboxsm-api" target="_blank" alt="cruckman.com on GitHub">API</a>&nbsp;&mdash;&nbsp;
                        <a href="https://github.com/cruckman900/chatterboxsm-mailer" target="_blank" alt="cruckman.com on GitHub">Mailer</a>
                    </div>
                </div>
            </Section>
            <Section title="Collaboration Projects">
                <div>
                    <div><a href="" alt="InterTrade Solutions">InterTrade Solutions</a></div>
                    <div><b>Technologies Used:</b> Next.JS, TypeScript, TailwindCSS, Node.JS, prisma, MySQL</div>
                    <div><b>GitHub:</b> <a href="https://github.com/AdamantiumCore/intertrade.solutions" target="_blank" alt="InterTrade Solutions on GitHub">Source Code</a></div>
                </div>
            </Section>
        </DefaultPage>
    </>
}