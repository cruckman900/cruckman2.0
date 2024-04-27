import DefaultPage from '../../components/DefaultPage/DefaultPage';

import './Home.scss';

export default function Home() {
    return (
        <DefaultPage className="home" icon='fa-solid fa-house' title='Home'>
            <div className='home-div'>
                I am currently developing this new site because the old one is pretty messy. I am hoping to have it more presentable soon. 
                Some elements of the site may be hidden on mobile devices.
                My old site content is here if you want to take a look: 
                <div className='home-div-centered-link'>
                    <a href='https://old.cruckman.com' target='_blank'>old cruckman.com website</a>
                </div>
            </div>
            <div id='chatterbox-text' className='home-div'>
                <span><a href='https://chatterboxsm.com' target='_blank'>chatterboxsm</a></span> (the button / panel
                to the right) is another one of my creations. It&apos;s not fully functional yet, but just like everything else I work on in my
                spare time, it is not abandoned; it&apos;s just waiting for its turn in the rotation.
            </div>
        </DefaultPage>
    );
}