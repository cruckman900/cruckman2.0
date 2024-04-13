import './Header.scss';

export default function Header({children, ...props}) {
    return (
        <>
            <div className='main-header' {...props}>
                <span>{children}</span>
            </div>
        </>
    );
}