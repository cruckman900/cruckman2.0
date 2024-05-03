import { useState } from 'react';

import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from '../../components/ui/Section/Section';
import Links from '../../components/ui/Links/Links';
import TabButton from '../../components/ui/TabButton/TabButton';

import { CONTENT_SHORTS } from '../../assets/static-data/content-shorts';
import './About.scss';

export default function About() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    function handleClick(index) {
        setSelectedIndex(index);
    }

    return <>
        <DefaultPage icon='fa-solid fa-address-card' title='About'>
            <Section title='What&apos;s on my site?' className='aboutSection'>
                
                <div className='large-output'>
                    <div className='aboutSection-container'>
                        <Links linksContainer="menu" linksContainerClass="aboutSection-container-Menu" links={
                            <>
                                {
                                    CONTENT_SHORTS.map((short, index) => {
                                        return (
                                            <TabButton
                                                type='button'
                                                key={short.topic}
                                                className={selectedIndex === index
                                                    ? 'aboutSection-container-Menu-button-active'
                                                    : 'aboutSection-container-Menu-button'}
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
                                    <p className='aboutSection-container-select'>
                                        Select a topic just to see what awaits inside. I have been waiting for you to come visit.
                                    </p>
                                : (
                                    <div key={CONTENT_SHORTS[selectedIndex].title} className='aboutSection-container-content'>
                                        <h3>
                                            <i className={CONTENT_SHORTS[selectedIndex].icon}></i>
                                            <span>{CONTENT_SHORTS[selectedIndex].title}</span>
                                        </h3>
                                        <p className='aboutSection-container-content-description'>{CONTENT_SHORTS[selectedIndex].description}</p>
                                        <p className='aboutSection-container-content-summary'>{CONTENT_SHORTS[selectedIndex].summary}</p>
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
                                <div key={`title_${index}`} className='aboutSection-container-content'>
                                    <h3>
                                        <i key={`icon_${index}`} className={short.icon}></i>
                                        <span key={`title_${index}`}>{short.title}</span>
                                    </h3>
                                    <p key={`description_${index}`} className='aboutSection-container-content-description'>{short.description}</p>
                                    <p key={`summary_${index}`} className='aboutSection-container-content-summary'>{short.summary}</p>
                                </div>
                            );
                        })
                    }
                </div>

            </Section>
        </DefaultPage>
    </>
}