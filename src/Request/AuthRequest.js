import AxiosHelper from "./AxiosHelper";

/**
 * Request to register user.
 * @param {*} user a user object
 * @returns a response of the request
 */

class AuthRequest {
  registerUser(user){
    const url = "/auth/register";
    return AxiosHelper.post(url, user)
  }
  loginUser(user) {
    const url = "/auth/login";
    return AxiosHelper.post(url, user)
  }
}

export default AuthRequest;
