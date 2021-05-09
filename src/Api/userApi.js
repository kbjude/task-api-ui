import axios from "axios";
import resolveBaseUrl from ".";
import { browserHistory } from 'react-router';

const baseUrl = resolveBaseUrl();

class UsersAPI {
  static fetch(searchParams) {
    const {
        isLoading = true,
        error = "",
        name = "",
    } = searchParams;
    return axios.get(`${baseUrl}/api/users/search?name=${name}`);
  }

  static fetchUsers(id) {
    return axios.get(`${baseUrl}/api/users/${id}`);
  }

  static createUser(user) {
    return axios.post(`${baseUrl}/api/users`, user );
  }

  static updateUser(user) {
    console.log(user);
    browserHistory.push('/pathToRedirect')
    return axios.put(`${baseUrl}/api/users/${user.id}`, user);
  }

  static deleteUser(id) {
    return axios.delete(`${baseUrl}/api/user/${id}`);
  }
}

export default UsersAPI;
