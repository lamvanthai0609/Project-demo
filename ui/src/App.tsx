import { BrowserRouter as Router, Route } from 'react-router-dom';
import { privateRouter, publicRouter } from './config/router';
import { RouterRender } from './config/routerRender';
import { NotFound } from './modules/components/notfound';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { tokenAuthSelector } from './modules/features/login/redux/authSelector';
import { useAppSelector } from './redux/hook';

function App() {
     const auth = useAppSelector(tokenAuthSelector);
     return (
          <div className="App">
               <ReactNotifications />
               <Router>
                    {/* <Route path="*" element={<NotFound />}></Route> */}
                    <RouterRender listRouter={privateRouter} isPrivate />
                    <RouterRender listRouter={publicRouter} />
               </Router>
          </div>
     );
}

export default App;
