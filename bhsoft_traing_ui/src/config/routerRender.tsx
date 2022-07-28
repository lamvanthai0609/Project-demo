import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { tokenAuthSelector } from '../modules/features/login/redux/authSelector';
import { useAppSelector } from '../redux/hook';
import { IRouter } from './router';
interface Iprops {
     listRouter: Array<IRouter>;
     isPrivate?: boolean;
}

export const RouterRender = ({ listRouter, isPrivate = false }: Iprops) => {
     const auth = useAppSelector(tokenAuthSelector);
     return (
          <Routes>
               {listRouter &&
                    listRouter.map((router: IRouter, index: number) => {
                         const Page = router.component;
                         const Layout = router.Layout ? router.Layout : Fragment;
                         if (isPrivate) {
                              return (
                                   <Route
                                        key={index}
                                        path={router.path}
                                        element={
                                             auth ? (
                                                  <Layout>
                                                       <Page />
                                                  </Layout>
                                             ) : (
                                                  <Navigate to="/" replace />
                                             )
                                        }
                                   ></Route>
                              );
                         } else {
                              return (
                                   <Route
                                        key={index}
                                        path={router.path}
                                        element={
                                             <Layout>
                                                  <Page />
                                             </Layout>
                                        }
                                   ></Route>
                              );
                         }
                    })}
          </Routes>
     );
};
