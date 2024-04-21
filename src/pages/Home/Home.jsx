import { useState } from 'react';

import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Section from '../../components/ui/Section/Section';
import Links from '../../components/ui/Links/Links';
import TabButton from '../../components/ui/TabButton/TabButton';

import { CONTENT_SHORTS } from '../../assets/static-data/content-shorts';

import './Home.scss';

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    function handleClick(index) {
        setSelectedIndex(index);
    }

    return (
        <DefaultPage className="home" icon='fa-solid fa-house' title='Home'>
            <div className='homeFlexbox-left'>
                <div className='homeFlexbox-left-div'>
                    I am currently developing this new site because the old one is pretty messy. I am hoping to have it more presentable soon. 
                    Some elements of the site may be hidden on mobile devices.
                    My old site content is here if you want to take a look: 
                    <div className='homeFlexbox-left-link'>
                        <a href='https://old.cruckman.com' target='_blank'>old cruckman.com website</a>
                    </div>
                </div>
                <div id='chatterbox-text' className='homeFlexbox-left-div'>
                    <span className='homeFlexbox-left-link'><a href='https://chatterboxsm.com' target='_blank'>chatterboxsm</a></span> (the button / panel
                    to the right) is another one of my creations. It&apos;s not fully functional yet, but just like everything else I work on in my
                    spare time, it is not abandoned; it&apos;s just waiting for its turn in the rotation.
                </div>
                <Section title='What&apos;s on my site?' className='homeSection'>
                    <div className='large-output'>
                        <div className='homeSection-container'>
                            <Links linksContainer="menu" linksContainerClass="homeSection-container-Menu" links={
                                <>
                                    {
                                        CONTENT_SHORTS.map((short, index) => {
                                            return (
                                                <TabButton
                                                    type='button'
                                                    key={short.topic}
                                                    className={selectedIndex === index
                                                        ? 'homeSection-container-Menu-button-active'
                                                        : 'homeSection-container-Menu-button'}
                                                    size='200px'
                                                    onClick={() => handleClick(index)}
                                                >
                                                    {short.title}
                                                </TabButton>
                                            );
                                        })
                                    }
                                </>
                            }>
                                {
                                    selectedIndex === null ? 
                                        <p className='homeSection-container-select'>
                                            Select a topic just to see what awaits inside. I have been waiting for you to come visit.
                                        </p>
                                    : (
                                        <div key={CONTENT_SHORTS[selectedIndex].title} className='homeSection-container-content'>
                                            <h3>
                                                <i className={CONTENT_SHORTS[selectedIndex].icon}></i>
                                                <span>{CONTENT_SHORTS[selectedIndex].title}</span>
                                            </h3>
                                            <p className='homeSection-container-content-description'>{CONTENT_SHORTS[selectedIndex].description}</p>
                                            <p className='homeSection-container-content-summary'>{CONTENT_SHORTS[selectedIndex].summary}</p>
                                        </div>
                                    )
                                }
                            </Links>
                        </div>
                    </div>
                    <div className='small-output'>
                        {
                            CONTENT_SHORTS.map((short, index) => {
                                return (
                                    <div key={`title_${index}`} className='homeSection-container-content'>
                                        <h3>
                                            <i key={`icon_${index}`} className={short.icon}></i>
                                            <span key={`title_${index}`}>{short.title}</span>
                                        </h3>
                                        <p key={`description_${index}`} className='homeSection-container-content-description'>{short.description}</p>
                                        <p key={`summary_${index}`} className='homeSection-container-content-summary'>{short.summary}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Section>
            </div>
        </DefaultPage>
    );
}