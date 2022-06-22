import axios from "axios";

export function getUserList() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
  