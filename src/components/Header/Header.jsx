import './Header.scss';

export default function Header({children}) {
    return (
        <>
            <div className='main-header'>
                <span>{children}</span>
            </div>
        </>
    );
}