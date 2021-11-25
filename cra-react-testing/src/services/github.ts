const makeGitHubURL = (resource: string) => {
  return `https://api.github.com/${resource}`;
};

const githubUserURL = (user: string, resource?: string) => {
  return makeGitHubURL(`users/${user}${resource ? `/${resource}` : ""}`);
};

export const getUserRepositories = async (user: string) => {
  const reposURL = githubUserURL(user, "repos?per_page=1000");
  const response = await fetch(reposURL);

  return (await response.json()) as UserRepository[];
};
