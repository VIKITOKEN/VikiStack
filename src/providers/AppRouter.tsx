import { lazy, Suspense } from 'react';
// import accessEnv from "@utils/accessEnv";
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home')),
Main = lazy(() => import('@pages/Layout'));

const AppRouter = createBrowserRouter([
   { path:"/",  element: <Suspense> <Main/> </Suspense>, children: [
         { index: true, element: <Home /> },
      ]
   },
]);

export default AppRouter;