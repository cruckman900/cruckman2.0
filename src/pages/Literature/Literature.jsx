import DefaultPage from "../../components/DefaultPage/DefaultPage";
import Section from '../../components/ui/Section/Section';

// import FAFImage from "../../assets/images/failure_at_fifty_kindle_ebook_cover.png";

import { POEMS } from "../../assets/static-data/poems";
const targetWord = '_';

import './Literature.scss';

export default function Literature() {
    return <>
        <DefaultPage className="home" icon='fa-solid fa-book-open' title='Literature'>
            <Section title="Poems">
                {POEMS.map((poem) => (
                    <>
                        <h1>{poem.title}</h1>
                        <div>
                            {poem.body.split(' ').map((word, index) => 
                                word === targetWord ? (
                                    <br key={index} />
                                ) : (
                                    <span key={index}>{word} </span>
                                )
                            )}
                        </div>
                    </>
                ))}
            </Section>
            {/* <Section title='I have recently published my first book!'>
                <div className="works">
                    <div className="works-work">
                        <span className="works-work-cover">
                            <a href="https://www.amazon.com/dp/B0DYBMY155" alt="Order Failure at Fifty on Amazon" target="_blank">
                                <img className="fafImage" src={FAFImage} alt="book cover" />
                            </a>
                        </span>
                        <span className="works-work-description">
                            <h3>FAILURE AT FIFTY</h3>
                            <h3>How Alcohol and Mental Illness Nearly Destroyed Every Aspect of My Life</h3>
                            <div className="works-work-description-body">
                                This book is about my life from early childhood all the way through age 50. 
                                It involves how alchohol and schizophrenia have impacted my life.
                            </div>
                        </span>
                    </div>
                </div>
            </Section> */}
        </DefaultPage>
    </>
}