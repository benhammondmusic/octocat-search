import './App.css';
import QueryBox from './components/QueryBox/QueryBox';
import RepoDetail from './components/RepoDetail/RepoDetail';
import RepoResults from './components/RepoResults/RepoResults';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <QueryBox />
            <RepoResults />
          </Route>

          <Route path="/detail">
            <RepoDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
