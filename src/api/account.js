import axios from 'axios';

const fullUrl = 'http://localhost:3003/api/v1';

function signup(payload) {
  const url = `${fullUrl}/auth/signup`;
  return axios.post(url, payload);
}

const account = {
  signup
};

export default account;
