import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import Login from './components/login/login';

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
