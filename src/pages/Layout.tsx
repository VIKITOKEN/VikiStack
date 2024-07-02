import React, { Suspense } from 'react';
import Header from '@components/Header';
import { Outlet} from 'react-router-dom';
// import Footer from '@components/Footer';

const Layout:React.FC  = () => {
   return <>
      <Header/>
      <Suspense fallback={<div className="loader"></div>}> <Outlet/> </Suspense>
   </> 
}

export default Layout;