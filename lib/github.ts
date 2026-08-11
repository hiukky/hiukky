export type GithubRepository = {
  name: string;
  description: string | null;
  html_url: string;
  node_id: string;
  stargazers_count: number;
};

const GITHUB_BASE_URL = "https://api.github.com";

export async function getStarredRepositories(username: string) {
  const response = await fetch(`${GITHUB_BASE_URL}/users/${username}/repos`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return [];
  }

  const repositories = (await response.json()) as GithubRepository[];

  return repositories
    .filter((repo) => repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}
