import axios from 'axios';
import config from './../config';

const fullUrl = `${config.api.host}${config.api.prefix}`;

function signup(payload) {
  const url = `${fullUrl}/auth/signup`;
  return axios.post(url, payload, {
    withCredentials: true
  });
}

function signin(payload) {
  const url = `${fullUrl}/auth/signin`;
  return axios.post(url, {
    email: payload.email,
    password: payload.password
  }, {
    withCredentials: true
  });
}

function logout() {
  const url = `${fullUrl}/auth/logout`;
// eslint-disable-next-line
  return axios.get(url, {
    withCredentials: true
  });
}

function fetch() {
  const url = `${fullUrl}/auth`;
  return axios.get(url, {
    withCredentials: true
  });
}

const account = {
  signup,
  signin,
  logout,
  fetch
};

export default account;
