import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Section from '../../components/ui/Section/Section';

import './Home.scss';

export default function Home() {
    return (
        <DefaultPage className="home" icon='fa-solid fa-house' title='Home'>
            <Section title="Welcome to my site.">
                <div className='home-div'>
                    I am currently developing this new site because the old one is pretty messy. I am hoping to have it more presentable soon. 
                    Some elements of the site may be hidden on mobile devices.
                    My old site content is here if you want to <a href='https://old.cruckman.com' target='_blank'>take a look here</a>. I had
                    fun building it, but it isn&apos;t as carefully put together as this one. I&apos;ve learned quite a bit about modern CSS in the last 
                    few years.
                </div>
                <div className='home-div large-output'>
                    <span><a href='https://chatterboxsm.com' target='_blank'>chatterboxsm</a></span><span id='chatterbox-text'> (the button / panel
                    to the right)</span> is another one of my creations. It&apos;s not fully functional yet, but just like everything else I work on in my
                    spare time, it is not abandoned; it&apos;s just waiting for its turn in the rotation. I plan to redo it in NextJS and moving it to a 
                    free hosting site until/unless it gains some kind of popularity.
                </div>
            </Section>
        </DefaultPage>
    );
}