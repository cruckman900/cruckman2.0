import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
// import ThreeDGallery from './pages/ThreeDGallery/ThreeDGallery';

import './App.scss'

function App() {
  return (
    <>
      <Header className='main-header' icon='fa-brands fa-d-and-d'>
          <span className='titillium'>Chris Ruckman</span>
          <NavBar />
      </Header>
      <Home />
      {/* <ThreeDGallery /> */}
      <Footer />
    </>
  );
}

export default App
