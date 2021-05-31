import { Link } from 'react-router-dom';

function RepoResults({ orderIsDesc, changeDirection, repos, userMessage }) {
  return (
    <main className="container d-flex flex-column align-items-center ">
      <div className="d-flex m-2 p-2 col-10 col-lg-4 justify-content-between">
        <h3>Top Matches:</h3>
        <button className="btn btn-link inline text-dark" onClick={() => changeDirection()}>
          Order
          {orderIsDesc ? ' ▼' : ' ▲'}
        </button>
      </div>
      <em className="text-blue font-weight-light">{userMessage}</em>
      {repos.map((repo, i) => (
        <article key={repo.id} className={i % 2 === 0 ? 'bg-light rounded m-2 p-2 col-10 col-lg-4' : 'bg-white rounded m-2 p-2 col-10 col-lg-4'}>
          <h4>
            <i className="mr-1 fab fa-github"></i>
            {/* send specific repo to detail via via "state" */}
            <Link className="repoLink" to={{ pathname: '/detail', state: { repo: repo } }}>
              {repo.name}
            </Link>
          </h4>
          <small className="m-0 p-0">
            {repo.language} - {repo.stargazers_count}★
          </small>
        </article>
      ))}
    </main>
  );
}

export default RepoResults;
