import './Section.scss';

export default function Section({title, blurb, children}) {
    return (
        <section className="section">
            <h2 className="section-title">{title}</h2>
            <div className="section-blurb">{blurb}</div>
            <div>{children}</div>
        </section>
    )
}