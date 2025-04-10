import './Section.scss';

export default function Section({title, children, ...props}) {
    return (
        <section className="section" {...props}>
            <h2 className="section-title">{title}</h2>
            <div className="section-body">{children}</div>
        </section>
    )
}