import DefaultPage from '../../components/DefaultPage/DefaultPage';
// import Section from '../../components/ui/Section/Section';
import ModelViewer from '../../components/ModelViewer/ModelViewer';

export default function ThreeDGallery() {
    return (
        <DefaultPage icon={'fa-solid fa-cubes'} title='3D Graphics and Effects'>
            <div>
                <div className='homeFlexbox-left'>
                    <div className='homeFlexbox-left-div'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate eveniet explicabo id architecto delectus voluptate ullam temporibus mollitia dolores cumque et quo corporis numquam, incidunt veritatis quisquam laudantium error, recusandae accusamus! Quaerat officiis a eveniet modi molestiae, dicta ducimus molestias, iste illo saepe nam! Itaque tempore nemo iste numquam?</div>
                    <ModelViewer url='BD_Stretch_Robot.glb' />
                </div>
            </div>
        </DefaultPage>
    );
}