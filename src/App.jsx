import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';

import './App.scss'

import ErrorPage from './pages/Error';
import Home from './pages/Home/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment/SoftwareDevelopment';
import GameDesignDevelopment from './pages/GameDesignDevelopment/GameDesignDevelopment';
import Gallery2D from './pages/Gallery2D/Gallery2D';
import Gallery3D from './pages/Gallery3D/Gallery3D';
import Music from './pages/Music/Music';
import Literature from './pages/Literature/Literature';
import ResumeDoc from './pages/Resume/Resume';
import About from './pages/About/About';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/SoftwareDevelopment', element: <SoftwareDevelopment /> },
      { path: '/GameDesignDevelopment', element: <GameDesignDevelopment /> },
      { path: '/Gallery2D', element: <Gallery2D /> },
      { path: '/Gallery3D', element: <Gallery3D /> },
      { path: '/Music', element: <Music /> },
      { path: '/Literature', element: <Literature /> },
      { path: '/Resume', element: <ResumeDoc /> },
      { path: '/About', element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
