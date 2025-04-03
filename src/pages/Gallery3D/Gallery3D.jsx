import { lazy, Suspense } from 'react';

import DefaultPage from '../../components/DefaultPage/DefaultPage';

const ModelViewer = lazy(() => import('../../components/ModelViewer/ModelViewer'));

export default function Gallery3D() {
    return (
        <DefaultPage icon={'fa-solid fa-cubes'} title='3D Graphics and Effects'>
            <div>
                <div>
                    <div>
                        I have been playing with Blender almost as long as it has been around, but I never really knew what I was doing with it.
                        I recently decided to get a few courses and delve deep into understanding how it all works: get some knowledge, tips and
                        tricks, gather some addons, and start creating stuff! I will be modifying the 3D viewport below (hopefully) at some point to be a little
                        more than a simple tool. I will make it so that you can navigate scenes as if you&apos;re inside a game.
                    </div>
                    <div><a href="../../../public/blenderfiles/BD_Stretch_Robot.blend">BD Stretch Robot blender file</a></div>
                    <Suspense
                        fallback={<div>Loading model viewer...</div>}
                    >
                        <ModelViewer />
                    </Suspense>
                </div>
            </div>
        </DefaultPage>
    );
}