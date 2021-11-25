const makeGitHubURL = (resource: string) =>
  `https://api.github.com/${resource}`;

const githubUserURL = (user: string, resource?: string) =>
  makeGitHubURL(`users/${user}${resource ? `/${resource}` : ""}`);

export const getUserRepositories = (user: string) =>
  fetch(githubUserURL(user, "repos?per_page=1000")).then<UserRepository[]>(
    res => res.json()
  );
