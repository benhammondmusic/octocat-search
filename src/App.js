import { useEffect, useState } from 'react';
import { fetchReposAPI } from './services/search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import QueryBox from './components/QueryBox/QueryBox';
import RepoResults from './components/RepoResults/RepoResults';
import RepoDetail from './components/RepoDetail/RepoDetail';

function App() {
  const [repos, setRepos] = useState([]);
  const [queryString, setQueryString] = useState('hotel engine');
  const [orderIsDesc, setOrderIsDesc] = useState(true);
  const [sortBy, setSortBy] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [queryLanguage, setQueryLanguage] = useState('');

  const changeQuery = (e) => {
    setQueryString(e.target.value);
  };

  const changeDirection = () => {
    orderIsDesc ? setOrderIsDesc(false) : setOrderIsDesc(true);
  };

  const changeSort = () => {
    sortBy === 'stars' ? setSortBy('') : setSortBy('stars');
  };

  // refetch repo search results from API as a side effect of search-filters changing
  // tried onChange for input as well (queryString), but was hitting API too frequently
  useEffect(() => {
    fetchRepos();
  }, [sortBy, orderIsDesc, queryLanguage]);

  async function fetchRepos() {
    if (queryString.trim() === '') {
      setUserMessage('Empty search query. Please add search term(s)');
      setRepos([]);
      return;
    }

    try {
      setUserMessage('loading...');
      setRepos([]);
      let fetchedRepos = await fetchReposAPI(queryString, queryLanguage, sortBy, orderIsDesc);
      fetchedRepos.length > 0 ? setUserMessage('') : setUserMessage('No Results Found');
      setRepos(fetchedRepos);
    } catch {
      setUserMessage('Problem fetching repos from GitHub');
    }
  }

  return (
    <div className="App d-flex flex-column align-items-center container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <QueryBox queryString={queryString} changeQuery={changeQuery} queryLanguage={queryLanguage} setQueryLanguage={setQueryLanguage} sortBy={sortBy} changeSort={changeSort} fetchRepos={fetchRepos} />
            <RepoResults orderIsDesc={orderIsDesc} sortBy={sortBy} changeDirection={changeDirection} repos={repos} userMessage={userMessage} />
          </Route>

          <Route path="/detail">
            {/* specific repo object sent via react-router, not as props */}
            <RepoDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
