import { useState } from 'react'
import './IFrame.scss'
1
export default function IFrame({src, ...props}) {
    const [isDisplayNone, setDisplayNone] = useState(false)
    return (
        <>
            {!isDisplayNone && <span>
                <header>
                    <button
                        type='button'
                        onClick={() => setDisplayNone(!isDisplayNone)}
                    >
                        {!isDisplayNone ? 'Close' : 'Open'}
                    </button>
                    <span>{src}</span>
                </header>

                <div>
                    <iframe src={src} {...props}>
                        This browser does&apos;t support iframes.
                    </iframe>
                </div>
            </span>
            }
        </>
    )
}