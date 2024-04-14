import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './IFrame.scss'
1
export default function IFrame({src, ...props}) {
    const [isDisplayNone, setDisplayNone] = useState(true);
    const [iframeWrapperClass, setIFrameClass] = useState();
    const [style, setStyle] = useState();

    useEffect(() => {
        if (isDisplayNone) {
            setStyle({ backgroundColor: 'transparent' });
            setIFrameClass(undefined);
        } else {
            setIFrameClass('iframeWrapper');
        }
    }, [isDisplayNone]);

    return (
        <div {...props}>
            <div className={ iframeWrapperClass }>
                <header style={style}>
                    <Button
                        type='button'
                        className='btnClose'
                        onClick={() => setDisplayNone(!isDisplayNone)}
                    >
                        {
                            !isDisplayNone
                                ? <i className='btnClose-red fa-solid fa-box'></i>
                                : <i className='fa-solid fa-box-open'></i>
                        }
                    </Button>
                    { !isDisplayNone && <span>{src}</span> }
                </header>

                {
                    !isDisplayNone && 
                        <span className='iframeContainer'>
                            <div>
                                <iframe src={src} {...props}>
                                    This browser does&apos;t support iframes.
                                </iframe>
                            </div>
                        </span>
                }
            </div>
        </div>
    )
}