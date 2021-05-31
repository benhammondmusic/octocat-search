import { Link, useLocation } from 'react-router-dom';

function RepoDetail() {
  // load selected repo object via react-router
  const location = useLocation();
  const { repo } = location.state;

  return (
    <main className="d-flex flex-column align-items-center">
      <article className="d-flex flex-column align-items-center bg-blue rounded p-5 m-5">
        <header className="d-flex w-100 justify-content-between align-items-center">
          <h2 className="p-3">
            <i className="mr-1 fab fa-github"></i>{' '}
            <a className="bg-blue" href={repo.html_url}>
              {repo.name.replaceAll('_', ' ')}
            </a>
          </h2>

          <div className="owner-box">
            <em className="align-self-end">
              <img className="rounded-circle" height="100" src={repo.owner.avatar_url} alt="avatar" />
              <br />
              <a className="rounded bg-blue p-1" href={repo.owner.html_url}>
                by {repo.owner.login}
              </a>
            </em>
          </div>
        </header>

        <div className="bg-white rounded m-4 w-100 d-flex flex-column align-items-center">
          <p className="text-dark p-5">{repo.description === null ? 'No Description' : repo.description}</p>
          <p className="text-dark">
            View <a href={repo.html_url}>"{repo.name}" on GitHub</a>
          </p>
          <small className="text-dark p-2 align-self-end">
            {repo.language} - {repo.stargazers_count}★
          </small>
        </div>
      </article>

      <Link to="/">Back to Search</Link>
    </main>
  );
}

export default RepoDetail;
