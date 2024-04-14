export default function Header({icon, children, ...props}) {
    return (
        <>
            <div className='main-header' {...props}>
                <i className={icon}></i>
                <span className='main-header-title'>{children}</span>
            </div>
        </>
    );
}