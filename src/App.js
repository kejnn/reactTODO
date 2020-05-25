import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { About } from './pages/About.js'
import { Navbar} from './pages/components/Navbar.js';
import { Alert } from './pages/components/Alert.js';
import { AlertState } from './context/alert/AlertState.js';
import { FirebaseState } from './context/firebase/FirebaseState.js';

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
            <Alert />
            <div className="container pt-4">
              <Switch> 
                <Route path={'/'} exact component={Home} />
                <Route path={'/about'} component={About} />
              </Switch>
            </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
