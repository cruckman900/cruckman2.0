import { useState } from 'react';
import Button from '../Button/Button';
import './IFrame.scss'
1
export default function IFrame({src, ...props}) {
    const [isDisplayNone, setDisplayNone] = useState(false)
    return (
        <div {...props}>
            {!isDisplayNone && <span className='iframeContainer'>
                <header>
                    <Button
                        type='button'
                        className='btnClose'
                        onClick={() => setDisplayNone(!isDisplayNone)}
                    >
                        {!isDisplayNone ? 'Close' : 'Open'}
                    </Button>
                    <span>{src}</span>
                </header>

                <div>
                    <iframe src={src} {...props}>
                        This browser does&apos;t support iframes.
                    </iframe>
                </div>
            </span>
            }
        </div>
    )
}