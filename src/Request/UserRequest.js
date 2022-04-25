import AxiosHelper from "./AxiosHelper";

async function getUsers() {
  return AxiosHelper.get(`/users/`);
}

const UserRequest = {
  getUsers,
};
export default UserRequest;
