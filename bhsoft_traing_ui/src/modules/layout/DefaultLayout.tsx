import React from 'react';
import Header from './header/form/Header';
import Footer from './footer/form/Footer';

const DefaultLayout = (childElement: any) => {
     const { children } = childElement;

     return (
          <>
               <Header />
               <div>{children}</div>
               <Footer />
          </>
     );
};

export default DefaultLayout;
