import axios from 'axios';
import config from './../config';

const fullUrl = `${config.api.host}${config.api.prefix}`;

function signup(payload) {
  const url = `${fullUrl}/auth/signup`;
  return axios.post(url, payload);
}

function signin(payload) {
  const url = `${fullUrl}/auth/signin`;
  return axios.post(url, {
    email: payload.email,
    password: payload.password
  });
}

function logout(){
  const url = `${fullUrl}/auth/logout`;
// eslint-disable-next-line
  return axios.get(url);
}

const account = {
  signup,
  signin,
  logout
};

export default account;
