/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

import './ModelViewer.scss';

function Model({ url }) {
    const { scene } = useLoader(GLTFLoader, url)
    return <primitive object={scene} dispose={null} />;
}

export default function ModelViewer({ url }) {
    const [showInstructions, setShowInstructions] = useState(true);

    function handleMouseEvent(value) {
        setShowInstructions(value);
    }

    return (
        <div className='modelViewer'
            onMouseOver={() => handleMouseEvent(false)} onMouseOut={() => handleMouseEvent(true)}
            onTouchStart={() => handleMouseEvent(false)} onTouchEnd={() => handleMouseEvent(true)}
        >
            <Canvas
                className='modelViewer-canvas'
                camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}
            >
                <directionalLight position={[10, 10, 10]} intensity={5} />
                <directionalLight position={[-10, -10, -10]} intensity={5} />
                <OrbitControls />
                <Suspense fallback={<Html>Loading...</Html>}>
                    <Model url={ url } />
                </Suspense>
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
                            <span className='modelViewer-commands-action'>middle mouse button/scroll wheel</span>
                        </div>
                        <div className='modelViewer-commands'>
                            <div className='modelViewer-commands-heading'>
                                <span className='modelViewer-commands-heading'>Touch</span>
                            </div>
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
    );
}