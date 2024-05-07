import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import IFrame from '../ui/IFrame/IFrame';

import image1 from '../../assets/images/SpookyCorridor_1920x1080.jpg';
import image2 from '../../assets/images/BD_Stretch.jpg';
import image3 from '../../assets/images/City2.jpg';
import image4 from '../../assets/images/code.jpg';

import './DefaultPage.scss';

export default function DefaultPage({ icon, title, children }) {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [style, setStyle] = useState();

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    useEffect(() => {
        const images = [image1, image2, image3, image4];
        setBackgroundImage(images[genRandomInt(3)]);
    }, []);

    useEffect(() => {
        setStyle({
            background: `
                linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)),
                url(${backgroundImage}) center no-repeat
            `
        });
    }, [backgroundImage]);

    return (
        <div className='defaultPage' style={style}>
            <Header icon={icon} className='defaultPage-header'>{title}</Header>
            <section className='defaultPage-flexbox'>
                <div className='defaultPage-flexbox-children'>{children}</div>
                <IFrame className='chatterbox' src="https://chatterboxsm.com"></IFrame>
            </section>
        </div>
    );
}