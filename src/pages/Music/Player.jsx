import { Suspense, useCallback, useState } from "react";
import WavesurferPlayer from '@wavesurfer/react';

const Player = () => {
    const [wavesurfer, setWavesurfer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioIndex, setAudioIndex] = useState(0);

    // const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')

    const songList = [
        { file: "../../mp3/LonelyIsTheNight.mp3", title: "Billy Squire - Lonely Is The Night", img: "../../mp3/billysquire.jpg" },
        { file: "../../mp3/HellsBells.mp3", title: "AC/DC - Hell's Bells", img: "../../mp3/acdc-hellsbells.jpg" },
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
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="music-player">
                <div className="music-player-title">
                    <i className="fa-solid fa-music"></i>
                    {songList[audioIndex].title}
                </div>
                <div className="music-player-cover">
                    <img src={songList[audioIndex].img} />
                </div>
                <WavesurferPlayer
                    height={50}
                    width={325}
                    waveColor="#f8c314"
                    progressColor="#96880a"
                    url={songList[audioIndex].file}
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
            </div>
        </Suspense>
    );
}

export default Player

