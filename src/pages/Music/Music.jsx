/* eslint-disable no-unused-vars */
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";
import Player from "../../components/MP3Player/Player";
import GuitarImage from "../../assets/images/MySchecter.png";

import './Music.scss';

export default function Music() {

    const currentYear = new Date().getFullYear();

    return <>
        <DefaultPage className="home" icon='fa-solid fa-guitar' title='Music'>
            <Section title={`${currentYear - 1987} years of messing around, with 0 determination until NOW.`}>
                <div>
                    I just got a Boss ME90 multiple effects box and a cable to run directly into my laptop.
                    If you go to my old site, there are a few songs that I have on there that sound like I was
                    playing my guitar through mud. I hope to have a lot more songs on here soon!
                </div>
                <div className="music-guitar">
                    <a href="https://www.schecterguitars.com/Hellraiser-C-1-Fr?quantity=1&custitem_color_master_list=211" target="_blank"><img src={GuitarImage} alt="Schecter Hellraiser" /></a>
                </div>

                <Player className="music-player" />
            </Section>
        </DefaultPage>
    </>
}