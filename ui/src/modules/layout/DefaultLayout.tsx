import React from 'react';
import { Header } from './header/form/Header';
import { Footer } from './footer/form/Footer';

export const DefaultLayout = (childElement: any) => {
     const { children } = childElement;

     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     );
};
