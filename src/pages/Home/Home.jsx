import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Section from '../../components/ui/Section/Section';

import './Home.scss';

export default function Home() {
    return (
        <DefaultPage className="home" icon='fa-solid fa-house' title='Home'>
            <Section title="Welcome to my site.">
                <div className='home-div'>
                    I am currently developing this new site because the old one is pretty messy. I am hoping to have it more presentable soon. 
                    Some elements of the site may be hidden on mobile devices. Some sections have no content yet and simply contain a placeholder. I 
                    chose to keep the menu items visible and working so that visitors coming to the site will know what kind of content will be 
                    available to view at some point. The plan is to have at least one item available for each section to start.
                    {/* My old site content is here if you want to <a href='https://old.cruckman.com' target='_blank'>take a look</a>. I had
                    fun building it, but it isn&apos;t as carefully put together as this one. I&apos;ve learned quite a bit about modern CSS in the last 
                    few years. */}
                </div>
                <div className='home-div'>
                    Everything on this site is hand-coded. I do use a few 3rd party packages, but they come bare-bones. It takes a little bit of effort
                    to get everything working. I am particularly fond of the three package. That is what I used to create the 3D viewer. I actually had
                    to take a course on how to get what I have on the screen. There aren&apos;t very many good examples or explanations on the web on
                    how to go from start to finish with it.
                </div>
                <div className='home-div'>
                    I have a few assets that are not of my own creation on the site. There is a dragon that I had commissioned for my old site, and there 
                    is a 3D model of a dog that I use on here to demonstrate the power of the 3D viewer and it&apos;s ability to gather and play
                    animations associated with the model.
                </div>
                {/* <div className='large-output'>
                    <span><a href='https://chatterboxsm.com' target='_blank'>chatterboxsm</a></span><span id='chatterbox-text'> (the button / panel
                    to the right)</span> is another one of my creations. It&apos;s not fully functional yet, but just like everything else I work on in my
                    spare time, it is not abandoned; it&apos;s just waiting for its turn in the rotation. I plan to redo it in NextJS and moving it to a 
                    free hosting site until/unless it gains some kind of popularity.
                </div> */}
            </Section>
        </DefaultPage>
    );
}