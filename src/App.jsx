import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Root';

import DisplayMessage from './pages/DisplayMessage';

import ReactGA from 'react-ga4';

import './App.scss';


const Home = lazy(() => import('./pages/Home/Home'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment/SoftwareDevelopment'));
const GameDesignDevelopment = lazy(() => import('./pages/GameDesignDevelopment/GameDesignDevelopment'));
const Gallery2D = lazy(() => import('./pages/Gallery2D/Gallery2D'));
const Gallery3D = lazy(() => import('./pages/Gallery3D/Gallery3D'));
const Music = lazy(() => import('./pages/Music/Music'));
const Literature = lazy(() => import('./pages/Literature/Literature'));
const Resume = lazy(() => import('./pages/Resume/Resume'));
const About = lazy(() => import('./pages/About/About'));

const TRACKING_ID = "G-54B098JVFT";
ReactGA.initialize(TRACKING_ID);

function displayMessage(title) {
  return (
    title === 'Error' ? 
      <DisplayMessage 
        icon='fa-solid fa-bug' 
        title={title} 
        heading='An error occured' 
        message='Could not find this page' 
        displayFullPage={true} />
    :
      <DisplayMessage 
        icon='fa-solid fa-cloud-bolt' 
        title={title} 
        heading='Loading' 
        message='Your content should be here shortly.' 
        displayFullPage={false} />
    );
}

const router = createHashRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: displayMessage('Error'),
    children: [
      {
        path: '/',
        element: <Suspense fallback={displayMessage('Status')}><Home /></Suspense>
      },
      {
        path: '/SoftwareDevelopment',
        element: <Suspense fallback={displayMessage('Status')}><SoftwareDevelopment /></Suspense>
      },
      {
        path: '/GameDesignDevelopment',
        element: <Suspense fallback={displayMessage('Status')}><GameDesignDevelopment /></Suspense>
      },
      { 
        path: '/Gallery2D', 
        element: 
          <Suspense fallback={displayMessage('Status')}><Gallery2D /></Suspense>
      },
      { 
        path: '/Gallery3D', 
        element: 
          <Suspense fallback={displayMessage('Status')}><Gallery3D /></Suspense>
      },
      { 
        path: '/Music', 
        element: <Suspense fallback={displayMessage('Status')}><Music /></Suspense>
      },
      { 
        path: '/Literature', 
        element: <Suspense fallback={displayMessage('Status')}><Literature /></Suspense>
      },
      { 
        path: '/Resume', 
        element: <Suspense fallback={displayMessage('Status')}><Resume /></Suspense>
      },
      { 
        path: '/About', 
        element: <Suspense fallback={displayMessage('Status')}><About /></Suspense>
      },
    ],
  },
]);

function App() {
  // useEffect(() => {
  //   GoogleAnalytics();
  // }, []);

  // <RouteChangeTracker />
  return <RouterProvider router={router} />
}

export default App
