import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';

import './App.scss'

import DisplayMessage from './pages/DisplayMessage';

const Home = lazy(() => import('./pages/Home/Home'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment/SoftwareDevelopment'));
const GameDesignDevelopment = lazy(() => import('./pages/GameDesignDevelopment/GameDesignDevelopment'));
const Gallery2D = lazy(() => import('./pages/Gallery2D/Gallery2D'));
const Gallery3D = lazy(() => import('./pages/Gallery3D/Gallery3D'));
const Music = lazy(() => import('./pages/Music/Music'));
const Literature = lazy(() => import('./pages/Literature/Literature'));
const ResumeDoc = lazy(() => import('./pages/Resume/Resume'));
const About = lazy(() => import('./pages/About/About'));

function displayMessage(icon, title, heading, message) {
  return (
    <DisplayMessage icon={icon} title={title} heading={heading} message={message} />
  );
}

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: displayMessage('fa-solid fa-bug', 'Error', 'An error occured', 'Could not find this page'),
    children: [
      {
        path: '/',
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <Home />
          </Suspense>
      },
      {
        path: '/SoftwareDevelopment',
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <SoftwareDevelopment />
          </Suspense>
      },
      {
        path: '/GameDesignDevelopment',
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <GameDesignDevelopment />
          </Suspense>
      },
      { 
        path: '/Gallery2D', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <Gallery2D />
          </Suspense>
      },
      { 
        path: '/Gallery3D', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <Gallery3D />
          </Suspense>
      },
      { 
        path: '/Music', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <Music />
          </Suspense>
      },
      { 
        path: '/Literature', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <Literature />
          </Suspense>
      },
      { 
        path: '/Resume', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <ResumeDoc />
          </Suspense>
      },
      { 
        path: '/About', 
        element: 
          <Suspense
            fallback={displayMessage('fa-solid fa-cloud-bolt', 'Status', 'Loading', 'Your content should be here shortly.')}
          >
            <About />
          </Suspense>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
