import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from './config/router';

function App() {
     return (
          <div className="App">
               <Router>
                    <Routes>
                         {publicRouter.map((router, index) => {
                              const Page = router.component;
                              const Layout = router.Layout ? router.Layout : Fragment;
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
                         })}
                    </Routes>
               </Router>
          </div>
     );
}

export default App;
