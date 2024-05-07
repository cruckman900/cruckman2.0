import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './IFrame.scss'
1
export default function IFrame({ src, ...props }) {
    const [isDisplayNone, setDisplayNone] = useState(true);
    const [iframeWrapperClass, setIFrameClass] = useState();

    let style = { backgroundColor: 'transparent' };

    useEffect(() => {
        if (isDisplayNone) {
            setIFrameClass(undefined);
        } else {
            setIFrameClass('iframeWrapper');
        }
    }, [isDisplayNone]);

    return (
        <div {...props}>
            <div className={iframeWrapperClass}>
                <header className='iframeWrapper-header' style={isDisplayNone ? style : undefined}>
                    <Button
                        id='OpenCloseIframe'
                        title='OpenCloseIframe'
                        type='button'
                        className='iframeWrapper-header-btnClose'
                        style={{height: '2rem', margin: 0}}
                        onClick={() => setDisplayNone(!isDisplayNone)}
                    >
                        {
                            !isDisplayNone
                                ? <i className='iframeWrapper-header-btnClose-red fa-solid fa-box'></i>
                                : <i className='iframeWrapper-header-btnOpen fa-solid fa-box-open'></i>
                        }
                    </Button>
                    { !isDisplayNone && <span className='iframeWrapper-header-span'>{src}</span> }
                </header>

                {
                    !isDisplayNone && 
                        <span className='iframeWrapper-container'>
                            <div>
                                <iframe
                                    className='iframeWrapper-container-iframe'
                                    frameBorder="0"
                                     src={src} {...props}
                                >
                                    This browser does&apos;t support iframes.
                                </iframe>
                            </div>
                        </span>
                }
            </div>
        </div>
    )
}