import { useState } from 'react'
import './IFrame.scss'
1
export default function IFrame({src, ...props}) {
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <div className='container'>
            <header className={!fullScreen ? 'small' : undefined}>
                <button
                    type='button'
                    onClick={() => setFullScreen(!fullScreen)}
                >
                    {fullScreen ? 'Minimize' : 'Maximize'}
                </button>
                <span>{src}</span>
            </header>

            <div>
                <iframe
                    className={fullScreen ? 'fullScreen' : undefined}
                    src={src} {...props}
                >
                    This browser does&apos;t support iframes.
                </iframe>
            </div>
        </div>
    )
}