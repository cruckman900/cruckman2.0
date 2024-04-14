import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import './App.scss'

function App() {
  return (
    <>
      <Header><span className='titillium'>Christopher Ruckman</span></Header>
      <Home />
      <Footer />
    </>
  )
}

export default App
