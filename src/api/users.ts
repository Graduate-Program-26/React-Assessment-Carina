import { Octokit } from "octokit";
import { RequestError } from "@octokit/request-error";
const octokitNoAuth = new Octokit({});

export const getUserByUsername = async (username: string) => {
  try {
    const res = await octokitNoAuth.rest.users.getByUsername({
      username,
    });
    return res.data;
  } catch (e) {
    if (e instanceof RequestError && e.status === 404) return null;
    throw e;
  }
};

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN });

export const getAuthenticatedUser = await octokit.request("GET /user");

export const getUserRepos = await octokit.request("GET /user/repos");

export const getEvents = async (username: string) =>
  await octokit.request("GET /users/{username}/events", {
    username: username,
  });
