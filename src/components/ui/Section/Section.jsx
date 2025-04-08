import './Section.scss';

export default function Section({title, children}) {
    return (
        <section className="section">
            <h2 className="section-title">{title}</h2>
            <div className="section-body">{children}</div>
        </section>
    )
}