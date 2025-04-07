/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import './ModelViewer.scss?v=1';
import Scene from './Scene';

import './ModelViewer.scss';

export default function ModelViewer() {
    const [showInstructionsToggle, setShowInstructionsToggle] = useState(true);
    const [showInstructions, setShowInstructions] = useState(true);

    function handleMouseEvent(value) {
        if (showInstructionsToggle) {
            setShowInstructions(value);
        }
    }

    function handleInstructionsClick() {
        setShowInstructionsToggle(!showInstructionsToggle);
    }

    useEffect(() => {
        if (!showInstructionsToggle) {
            setShowInstructions(false);
        }
    }, [showInstructionsToggle])

    return (
        <>
            <div className='modelViewer'
                onMouseOver={() => handleMouseEvent(false)}
                onMouseOut={() => handleMouseEvent(true)}
                onTouchStart={() => handleMouseEvent(false)}
                onTouchEnd={() => handleMouseEvent(true)}
            >
                <Canvas className='canvas'>
                    <Scene />
                    <Perf className='perf' position="bottom-right" />
                </Canvas>
                {
                    showInstructions &&
                    <div className="modelViewer-overlay">
                        <div className='modelViewer-commands'>
                            <div className='modelViewer-commands-heading'>
                                <span className='modelViewer-commands-heading'>Keyboard / Mouse</span>
                            </div>
                        </div>
                        <div className='modelViewer-commands'>
                            <span className='modelViewer-commands-command'>pan:</span>
                            <span className='modelViewer-commands-action'>right mouse button</span>
                        </div>
                        <div className='modelViewer-commands'>
                            <div className='modelViewer-commands-command'>rotate:</div>
                            <span className='modelViewer-commands-action'>left mouse button</span></div>
                        <div className='modelViewer-commands'>
                            <span className='modelViewer-commands-command'>zoom:</span>
                            <span className='modelViewer-commands-action'>middle mouse button/scroll</span>
                        </div>
                        <br />
                        <div className='modelViewer-commands'>
                            <div className='modelViewer-commands-heading'>
                                <span className='modelViewer-commands-heading'>Touch</span>
                            </div>
                        </div>
                        <div className='modelViewer-commands'>
                            <span className='modelViewer-commands-command'>&nbsp;</span>
                            <span className='modelViewer-commands-action'>tap to remove instructions</span>
                        </div>
                        <div className='modelViewer-commands'>
                            <span className='modelViewer-commands-command'>pan:</span>
                            <span className='modelViewer-commands-action'>two finger - drag</span>
                        </div>
                        <div className='modelViewer-commands'>
                            <div className='modelViewer-commands-command'>rotate:</div>
                            <span className='modelViewer-commands-action'>single finger - drag</span></div>
                        <div className='modelViewer-commands'>
                            <span className='modelViewer-commands-command'>zoom:</span>
                            <span className='modelViewer-commands-action'>two finger - pinch</span>
                        </div>
                    </div>
                }
            </div>
            <div className='toggle' onClick={handleInstructionsClick}>Click to {showInstructionsToggle ? 'hide' : 'show'} Instructions</div>
        </>
    );
}