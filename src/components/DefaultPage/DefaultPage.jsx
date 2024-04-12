import { useState, useEffect } from 'react';
import image1 from '../../assets/images/SpookyCorridor_1920x1080.png';
import image2 from '../../assets/images/BD_Stretch.png';
import image3 from '../../assets/images/City2.png';
import './DefaultPage.scss';

export default function DefaultPage({icon, title, children}) {
    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    const [backgroundImage, setBackgroundImage] = useState(null);
    const [style, setStyle] = useState();

    useEffect(() => {
        const images = [image1, image2, image3];
        setBackgroundImage(images[genRandomInt(2)]);
    }, []);

    useEffect(() => {
        setStyle({ background: `
            linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)),
            url(${backgroundImage}) center no-repeat` 
        });
    }, [backgroundImage]);

    return (
        <div className='defaultPage' style={style}>
            <header className='dpHeader'>{icon}{title}</header>
            <div className='dpChildren'>{children}</div>
        </div>
    );
}