import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRouter, publicRouter } from './config/router';
import { RouterRender } from './config/routerRender';

import { tokenAuthSelector } from './modules/features/login/redux/authSelector';
import { useAppSelector } from './redux/hook';

function App() {
     const auth = useAppSelector(tokenAuthSelector);
     return (
          <div className="App">
               <Router>
                    <RouterRender listRouter={publicRouter} />
                    <RouterRender listRouter={privateRouter} isPrivate />
               </Router>
          </div>
     );
}

export default App;
