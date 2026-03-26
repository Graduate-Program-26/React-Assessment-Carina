import { Octokit } from "octokit";
import { RequestError } from "@octokit/request-error";
const octokit = new Octokit({});

export const getUserByUsername = async (username: string) => {
  try {
    const res = await octokit.rest.users.getByUsername({
      username,
    });
    return res.data;
  } catch (e) {
    if (e instanceof RequestError && e.status === 404) return null;
    throw e;
  }
};

export const getAuthenticatedUser = async (token) => {
  const octokit = new Octokit();

  await octokit.request("GET /user", {
    headers: {
      Authorization: token,
    },
  });
};
