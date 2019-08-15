import axios from 'axios';

const apiUrl = 'https://api.github.com';

export class Service {
  static getProjectsFromUser(username) {
    return axios.get(`${apiUrl}/users/${username}/repos`);
  }

  static getProjectReadme(username, project) {
    return axios.get(`${apiUrl}/repos/${username}/${project}/readme`);
  }
}
