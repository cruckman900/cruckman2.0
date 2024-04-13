import DefaultPage from '../../components/DefaultPage/DefaultPage';
import IFrame from '../../components/ui/IFrame/IFrame';
import './Home.scss';

export default function Home() {
    return (
        <DefaultPage icon={undefined} title='Home'>
            <section className='homeFlexbox'>

                <div className='homeFlexbox-left'>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque architecto dolorum mollitia similique dolore sint explicabo illum ea facere et, quam provident ex consequuntur dolor laboriosam reprehenderit neque, pariatur in sequi tempore minima. Voluptas provident quos distinctio eaque laboriosam praesentium consectetur minima fugiat. Quam consequatur veritatis assumenda ad accusantium.</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque architecto dolorum mollitia similique dolore sint explicabo illum ea facere et, quam provident ex consequuntur dolor laboriosam reprehenderit neque, pariatur in sequi tempore minima. Voluptas provident quos distinctio eaque laboriosam praesentium consectetur minima fugiat. Quam consequatur veritatis assumenda ad accusantium.</div>
                    <menu>
                    <li>Software Development</li>
                    </menu>
                </div>

                <IFrame src="https://chatterboxsm.com"></IFrame>
            
            </section>
        </DefaultPage>
    );
}