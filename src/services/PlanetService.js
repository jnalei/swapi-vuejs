import axios from 'axios';
import NProgress from 'nprogress';

// single axios instance for entire app
const apiCall = axios.create({
  baseURL: 'https://swapi.dev/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// not optimal for multiple api calls at the same time & template loads before data returned
// future solution using loading vuex module
apiCall.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiCall.interceptors.response.use(response => {
  NProgress.done();
  return response;
})

export default {
  getPlanets() {
    return apiCall.get('/planets');
  }
}