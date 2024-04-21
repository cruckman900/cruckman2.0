import { useState, lazy, Suspense } from 'react';

import DisplayMessage from '../DisplayMessage';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
// import ModelViewer from '../../components/ModelViewer/ModelViewer';

const ModelViewer = lazy(() => import('../../components/ModelViewer/ModelViewer'));

export default function Gallery3D() {
    const [modelURL, setModelURL] = useState('bow2.glb')

    function handleClick(url) {
        setModelURL(url);
    }

    return (
        <DefaultPage icon={'fa-solid fa-cubes'} title='3D Graphics and Effects'>
            <div>
                <div className='homeFlexbox-left'>
                    <div className='homeFlexbox-left-div'>
                        I have been playing with Blender almost as long as it has been around, but I never really knew what I was doing with it.
                        I recently decided to get a few courses and delve deep into understanding how it all works: get some knowledge, tips and
                        tricks, gather some addons, and start creating stuff! I will be modifying the 3D viewport below (hopefully) at some point to be a little
                        more than a simple tool. I will make it so that you can navigate scenes as if you&apos;re inside a game.
                    </div>
                    <Suspense
                        fallback={<DisplayMessage icon='fa-solid fa-cloud-bolt' title='Status' heading='Please Wait.' message='Loading the model viewer.' />}
                    >
                        <ModelViewer url={modelURL} />
                    </Suspense>
                    <button onClick={() => handleClick('BD_Stretch_Robot.glb')}>Stretch Robot</button>
                </div>
            </div>
        </DefaultPage>
    );
}