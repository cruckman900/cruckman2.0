import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';

import './App.scss'

import ErrorPage from './pages/Error';

const Home = lazy(() => import('./pages/Home/Home'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment/SoftwareDevelopment'));
const GameDesignDevelopment = lazy(() => import('./pages/GameDesignDevelopment/GameDesignDevelopment'));
const Gallery2D = lazy(() => import('./pages/Gallery2D/Gallery2D'));
const Gallery3D = lazy(() => import('./pages/Gallery3D/Gallery3D'));
const Music = lazy(() => import('./pages/Music/Music'));
const Literature = lazy(() => import('./pages/Literature/Literature'));
const ResumeDoc = lazy(() => import('./pages/Resume/Resume'));
const About = lazy(() => import('./pages/About/About'));

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense>
      },
      {
        path: '/SoftwareDevelopment',
        element: <Suspense fallback={<p>Loading...</p>}><SoftwareDevelopment /></Suspense>
      },
      {
        path: '/GameDesignDevelopment',
        element: <Suspense fallback={<p>Loading...</p>}><GameDesignDevelopment /></Suspense>
      },
      { 
        path: '/Gallery2D', 
        element: <Suspense fallback={<p>Loading...</p>}><Gallery2D /></Suspense>
      },
      { 
        path: '/Gallery3D', 
        element: <Suspense fallback={<p>Loading...</p>}><Gallery3D /></Suspense>
      },
      { 
        path: '/Music', 
        element: <Suspense fallback={<p>Loading...</p>}><Music /></Suspense>
      },
      { 
        path: '/Literature', 
        element: <Suspense fallback={<p>Loading...</p>}><Literature /></Suspense>
      },
      { 
        path: '/Resume', 
        element: <Suspense fallback={<p>Loading...</p>}><ResumeDoc /></Suspense>
      },
      { 
        path: '/About', 
        element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
