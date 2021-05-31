function QueryBox({ queryString, changeQuery, queryLanguage, setQueryLanguage, sortBy, changeSort, fetchRepos }) {
  // called from each language filter option
  function handleLanguageChange(e) {
    setQueryLanguage(e.target.value);
  }

  return (
    <header className="App-header d-flex flex-column col-12 col-lg-8 m-2 px-5 py-2 font-weight-bold bg-blue rounded">
      <div className="d-flex flex-column align-items-center">
        <h1>Octocat Search</h1>
        <small>
          Query Public GitHub Repos - by{' '}
          <a className="text-white" href="https://benhammond.tech">
            benhammond.tech
          </a>
        </small>
      </div>
      <hr></hr>
      <div className="px-5">
        <label className="px-2">
          Search Terms:
          <input className="ml-1" value={queryString} onChange={changeQuery} />
        </label>

        <label className="px-2">
          Sort by ★:
          <input className="ml-1" type="checkbox" checked={sortBy === 'stars'} onChange={() => changeSort()} />
        </label>

        <label className="px-2">
          Filter by Language:
          <select value={queryLanguage} onChange={handleLanguageChange}>
            <option value="">All Results</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Go">Go</option>
            <option value="cpp">c++</option>
            <option value="c">c</option>
            <option value="c#">c#</option>
            <option value="Java">Java</option>
            <option value="Ruby">Ruby</option>
          </select>
        </label>
      </div>
      <button className="btn btn-dark btn-sm m-2 w-30" onClick={() => fetchRepos()}>
        View Results
      </button>
    </header>
  );
}

export default QueryBox;
