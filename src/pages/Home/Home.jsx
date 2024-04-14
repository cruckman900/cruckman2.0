import { useState } from 'react';

import DefaultPage from '../../components/DefaultPage/DefaultPage';
import Section from '../../components/ui/Section/Section';
import TabButton from '../../components/ui/TabButton/TabButton';
import IFrame from '../../components/ui/IFrame/IFrame';

import { HOMEPAGE_SHORTS } from '../../assets/static-data/homepage-shorts';

import './Home.scss';

export default function Home() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(topic) {
        setSelectedTopic(topic);
    }

    return (
        <DefaultPage className="home" icon='fa-solid fa-house' title='Home'>
            <section className='homeFlexbox'>
        
                <div className='homeFlexbox-left'>
                    <div>
                        I am currently developing this new site because the old one is pretty messy. I am hoping to have it more presentable soon.
                        My old site content is here if you want to take a look: 
                        <div className='homeFlexbox-left-link'><a href='https://old.cruckman.com' target='_blank'>old cruckman.com website</a></div>
                    </div>
                    <div>
                        <span className='homeFlexbox-left-link'><a href='https://chatterboxsm.com' target='_blank'>chatterboxsm</a></span> is another one of my creations. It&apos;s not fully functional yet, but just like everything else I work on in my
                        spare time, it is not abandoned; it&apos;s waiting its turn in the rotation.
                    </div>
                    <Section title='On my site' className='homeSection'>
                        <div className='homeSection-container'>
                            <menu className='homeSection-container-Menu'>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'softwaredev'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('softwaredev')}
                                >
                                    Software Development
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'gamedev'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('gamedev')}
                                >
                                    Game Design/Development
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'art2d'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('art2d')}
                                >
                                    2D Artwork
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'art3d'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('art3d')}
                                >
                                    3D Graphics and Effects
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'music'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('music')}
                                >
                                    Music
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className={selectedTopic === 'literature'
                                        ? 'homeSection-container-Menu-button-active'
                                        : 'homeSection-container-Menu-button'}
                                    size='200px'
                                    onClick={() => handleClick('literature')}
                                >
                                    Literature
                                </TabButton>
                            </menu>

                            {!selectedTopic ? <p className='homeSection-container-content'>Select a topic.</p> : (
                                <div className='homeSection-container-content'>
                                    <h3>
                                        <i className={HOMEPAGE_SHORTS[selectedTopic].icon}></i>
                                        <span>{HOMEPAGE_SHORTS[selectedTopic].title}</span>
                                    </h3>
                                    <p className='homeSection-container-content-description'>{HOMEPAGE_SHORTS[selectedTopic].description}</p>
                                </div>
                            )}
                        </div>
                    </Section>
                </div>

                <IFrame src="https://chatterboxsm.com"></IFrame>
            
            </section>
        </DefaultPage>
    );
}