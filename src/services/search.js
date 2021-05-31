import { Octokit } from '@octokit/rest';
const octokit = new Octokit({});

const fetchReposAPI = async function (queryString, queryLanguage, sortBy, orderIsDesc) {
  let response = await octokit.request('GET /search/repositories', {
    q: `${queryString} ${queryLanguage.length ? 'language:' : ''}${queryLanguage}`,
    sort: `${sortBy.length ? sortBy : ''}`,
    order: `${orderIsDesc ? 'desc' : 'asc'}`,
  });

  console.log('FETCHING', response.url, response);
  if (response.headers['x-ratelimit-remaining'] < 1) console.log('API Limit Exceeded - Please Try Again in a Few Minutes');

  return response;
};

export { fetchReposAPI };
