import { Octokit } from '@octokit/rest';
const octokit = new Octokit({});

const fetchReposAPI = async function (queryString, queryLanguage, sortBy, orderIsDesc) {
  let response = await octokit.request('GET /search/repositories', {
    q: `${queryString} ${queryLanguage.length ? 'language:' : ''}${queryLanguage}`,
    sort: `${sortBy}`,
    order: `${orderIsDesc ? 'desc' : 'asc'}`,
  });

  // extract only the repo array from the full API response
  let fetchedRepos = [];
  response.data.items.forEach((repo) => {
    fetchedRepos.push(repo);
  });

  return fetchedRepos;
};

export { fetchReposAPI };
