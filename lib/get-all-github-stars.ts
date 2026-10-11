const getAllGithubStars = async () => {
  const URL = 'https://api.github.com/users/knowankit/repos';
  const response = await fetch(URL);
  const data = await response.json();

  if (!Array.isArray(data)) return 0;

  let stars = 0;

  for (let i = 0; i < data.length; i++) {
    stars += data[i]['stargazers_count'];
  }

  return stars;
};

const getRepos = async () => {
  const URL = 'https://api.github.com/users/knowankit/repos?per_page=100&sort=updated';
  const response = await fetch(URL);
  const data = await response.json();

  return Array.isArray(data) ? data : [];
};

export { getAllGithubStars, getRepos };
