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

const account = {
  signup,
  signin
};

export default account;
