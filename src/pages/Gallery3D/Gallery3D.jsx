import { lazy, Suspense } from 'react';

import DefaultPage from '../../components/DefaultPage/DefaultPage';

const ModelViewer = lazy(() => import('../../components/ModelViewer/ModelViewer'));

export default function Gallery3D() {
    return (
        <DefaultPage icon={'fa-solid fa-cubes'} title='3D Graphics and Effects'>
            <div>
                <div>
                    <div>
                        The 3D content here will, for the most part be made by me. The dog that is loaded when you first arrive
                        is not my own creation, but is being used as an example of how a model with animations can be loaded with
                        the animations and have them play. Other files will either be my results from following along with online
                        courses and tutorials or of my own design. Any models that I have no qualms with sharing that I came up with
                        myself will be available for download below.
                    </div>
                    <div><a href="../../../blenderfiles/BD_Stretch_Robot.blend">BD Stretch Robot blender file</a></div>
                    <Suspense
                        fallback={<div>Loading model viewer...</div>}
                    >
                        <ModelViewer style={{ flex: 1 }} />
                    </Suspense>
                </div>
            </div>
        </DefaultPage>
    );
}