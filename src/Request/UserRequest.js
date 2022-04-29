import AxiosHelper from "./AxiosHelper";

class UserRequest {
  getUsers(params){
    const url = `/users/`;
    return AxiosHelper.get(url, {params})
  }
}
export default new UserRequest;
