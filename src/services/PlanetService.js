import axios from 'axios'


// single axios instance for entire app
const apiCall = axios.create({
  baseURL: 'https://swapi.dev/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getPlanets() {
    return apiCall.get('/planets');
  }
}