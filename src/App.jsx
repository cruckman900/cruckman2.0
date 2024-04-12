import Header from './components/Header/Header'
import DefaultPage from './components/DefaultPage/DefaultPage'
import IFrame from './components/ui/IFrame/IFrame'

import './App.scss'

function App() {
  return (
    <>
      <Header>Christopher Ruckman</Header>
      <DefaultPage icon={undefined} title='Home'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas itaque rerum vitae voluptatum temporibus laboriosam facilis nisi asperiores? Iste non minus exercitationem minima? Odit autem voluptate rem molestias dignissimos voluptatibus porro et consequuntur vero doloribus est tenetur voluptates, repudiandae totam ipsum voluptatum qui facilis. Provident officia aliquam repudiandae ipsa?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas itaque rerum vitae voluptatum temporibus laboriosam facilis nisi asperiores? Iste non minus exercitationem minima? Odit autem voluptate rem molestias dignissimos voluptatibus porro et consequuntur vero doloribus est tenetur voluptates, repudiandae totam ipsum voluptatum qui facilis. Provident officia aliquam repudiandae ipsa?</p>
        
        <section>
          <menu>
            <li>Software Development</li>
          </menu>
        </section>

        <IFrame src="https://chatterboxsm.com"></IFrame>
      </DefaultPage>
    </>
  )
}

export default App
