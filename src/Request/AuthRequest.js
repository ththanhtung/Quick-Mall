import AxiosHelper from "./AxiosHelper";

/**
 * Request to register user.
 * @param {*} user a user object
 * @returns a response of the request
 */
async function registerUser(user) {
  return AxiosHelper.post("/auth/register", user);
}

async function loginUser(user) {
  return AxiosHelper.post("/auth/login", user);
}

const AuthRequest = {
  registerUser,
  loginUser,
};

export default AuthRequest;
