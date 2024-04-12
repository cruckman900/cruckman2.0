import DefaultPage from '../../components/DefaultPage/DefaultPage';
import IFrame from '../../components/ui/IFrame/IFrame';
import './Home.scss';

export default function Home() {
    return (
        <DefaultPage icon={undefined} title='Home'>
            <section className='homeFlexbox'>

                <div className='homeFlexbox-left'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas itaque rerum vitae voluptatum temporibus laboriosam facilis nisi asperiores? Iste non minus exercitationem minima? Odit autem voluptate rem molestias dignissimos voluptatibus porro et consequuntur vero doloribus est tenetur voluptates, repudiandae totam ipsum voluptatum qui facilis. Provident officia aliquam repudiandae ipsa?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas itaque rerum vitae voluptatum temporibus laboriosam facilis nisi asperiores? Iste non minus exercitationem minima? Odit autem voluptate rem molestias dignissimos voluptatibus porro et consequuntur vero doloribus est tenetur voluptates, repudiandae totam ipsum voluptatum qui facilis. Provident officia aliquam repudiandae ipsa?</p>
                    
                    <menu>
                    <li>Software Development</li>
                    </menu>
                </div>

                <IFrame className='homeFlexbox-right' src="https://chatterboxsm.com"></IFrame>
            
            </section>
        </DefaultPage>
    );
}