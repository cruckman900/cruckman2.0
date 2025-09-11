import './ResumeHeader.scss';

const ResumeHeader = () => {
    return (
        <header className='header'>
            <div className='h1'><i className='fa-solid fa-dragon'></i>&nbsp;Christopher Ruckman</div>
            <div className='header-sub'>
                <div className='header-sub-left'>
                    <div className='h2'>Full-Stack Software Engineer</div>
                    <div>2005 &mdash; Present</div>
                </div>
                <div className='header-sub-right'>
                    <div className='h2'>cruckman900@gmail.com</div>
                    <div>https://cruckman.com</div>
                </div>
            </div>
            <div>&nbsp;</div>
        </header>
    )
}

export default ResumeHeader