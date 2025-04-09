/* eslint-disable no-unused-vars */
import { Suspense, useCallback, useEffect, useState } from "react";
import WavesurferPlayer from '@wavesurfer/react';
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from "../../components/ui/Section/Section";

import './Music.scss';
import GuitarImage from "../../assets/images/MySchecter.png";

export default function Music() {
    const [wavesurfer, setWavesurfer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioIndex, setAudioIndex] = useState(0);

    const currentYear = new Date().getFullYear();

    const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')

    const songList = [
        {file: "LonelyIsTheNight", title: "Billy Squire - Lonely Is The Night", img: "billysquire.jpg"},
        {file: "HellsBells", title: "AC/DC - Hell's Bells", img: "acdc-hellsbells.jpg"},
    ];

    const onReady = (ws) => {
        setWavesurfer(ws);
        setIsPlaying(false);
    };

    const onUrlChangeMinus = useCallback(() => {
        setAudioIndex((index) => {
            if (index > 0) {
                return (index - 1) % songList.length;
            } else {
                return songList.length - 1;
            }
        }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onUrlChangePlus = useCallback(() => {
        setAudioIndex((index) => (index + 1) % songList.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause();
    };

    const seekToZero = () => {
        wavesurfer && wavesurfer.seekTo(0);
    };

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
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="music-player">
                        <div className="music-player-title">
                            <i className="fa-solid fa-music"></i>
                            {songList[audioIndex].title}
                        </div>
                        <WavesurferPlayer
                            height={50}
                            width={325}
                            waveColor="#f8c314"
                            progressColor="#96880a"
                            url={`../../mp3/${songList[audioIndex].file}.mp3`}
                            onReady={onReady}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                        <div className="music-player-controls">
                            <a>
                                <i className="fa-solid fa-circle-arrow-left" onClick={onUrlChangeMinus}></i>
                            </a>
                            <a>
                                <i className="fa-solid fa-backward" onClick={seekToZero}></i>
                            </a>
                            <a>
                                <i onClick={onPlayPause} className={isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-arrow-right" onClick={onUrlChangePlus}></i>
                            </a>
                        </div>
                        <div className="music-player-cover">
                            <img src={`../../mp3/${songList[audioIndex].img}`} />
                        </div>
                    </div>
                </Suspense>
            </Section>
        </DefaultPage>
    </>
}