import { useState } from 'react';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import IFrame from '../../components/ui/IFrame/IFrame';
import Section from '../../components/ui/Section/Section';
import TabButton from '../../components/ui/TabButton/TabButton';
import { HOMEPAGE_SHORTS } from '../../assets/static-data/homepage-shorts';
import './Home.scss';

export default function Home() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(topic) {
        setSelectedTopic(topic);
    }

    return (
        <DefaultPage icon='fa-solid fa-house' title='Home'>
            <section className='homeFlexbox'>

                <div className='homeFlexbox-left'>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque architecto dolorum mollitia similique dolore sint explicabo illum ea facere et, quam provident ex consequuntur dolor laboriosam reprehenderit neque, pariatur in sequi tempore minima. Voluptas provident quos distinctio eaque laboriosam praesentium consectetur minima fugiat. Quam consequatur veritatis assumenda ad accusantium.</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque architecto dolorum mollitia similique dolore sint explicabo illum ea facere et, quam provident ex consequuntur dolor laboriosam reprehenderit neque, pariatur in sequi tempore minima. Voluptas provident quos distinctio eaque laboriosam praesentium consectetur minima fugiat. Quam consequatur veritatis assumenda ad accusantium.</div>
                    <Section title='On my site' className='homeSection'>
                        <div className='homeSection-container'>
                            <menu className='homeSection-container-Menu'>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button active'
                                    size='200px'
                                    isSelected={selectedTopic === 'softwaredev'}
                                    onClick={() => handleClick('softwaredev')}
                                >
                                    Software Development
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button'
                                    size='200px'
                                    isSelected={selectedTopic === 'gamedev'}
                                    onClick={() => handleClick('gamedev')}
                                >
                                    Game Design/Development
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button'
                                    size='200px'
                                    isSelected={selectedTopic === 'art2d'}
                                    onClick={() => handleClick('art2d')}
                                >
                                    2D Artwork
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button'
                                    size='200px'
                                    isSelected={selectedTopic === 'art3d'}
                                    onClick={() => handleClick('art3d')}
                                >
                                    3D Graphics and Effects
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button'
                                    size='200px'
                                    isSelected={selectedTopic === 'music'}
                                    onClick={() => handleClick('music')}
                                >
                                    Music
                                </TabButton>
                                <TabButton
                                    type='button'
                                    className='homeSection-container-Menu-button'
                                    size='200px'
                                    isSelected={selectedTopic === 'literature'}
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