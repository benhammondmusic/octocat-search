import './App.css';
import QueryBox from './components/QueryBox/QueryBox';
import RepoDetail from './components/RepoDetail/RepoDetail';
import RepoResults from './components/RepoResults/RepoResults';

function App() {
  return (
    <div className="App">
      <QueryBox />
      <RepoResults />
      <RepoDetail />
    </div>
  );
}

export default App;
