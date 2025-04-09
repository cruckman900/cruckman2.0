/* eslint-disable no-unused-vars */
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";

import './Music.scss';
import GuitarImage from "../../assets/images/MySchecter.png";
import Player from "./Player";

export default function Music() {

    const currentYear = new Date().getFullYear();

    return <>
        <DefaultPage className="home" icon='fa-solid fa-guitar' title='Music'>
            <Section className="music" title={`${currentYear - 1987} years of messing around, with 0 determination until NOW.`}>
                <div>
                    I just got a Boss ME90 multiple effects box and a cable to run directly into my laptop.
                    If you go to my old site, there are a few songs that I have on there that sound like I was
                    playing my guitar through mud. I hope to have a lot more songs on here soon!
                </div>
                <div className="music-guitar">
                    <img src={GuitarImage} alt="Schecter Hellraiser" />
                </div>

                <Player />
            </Section>
        </DefaultPage>
    </>
}