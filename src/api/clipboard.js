import axios from 'axios';
import config from './../config';
const fullUrl = `${config.api.host}${config.api.prefix}`;

function addClipboard(payload) {
  const url = `${fullUrl}/clipboard`;
  return axios.post(url, payload, { withCredentials: true });
}

function receiveClipboards() {
  const url = `${fullUrl}/clipboards`;
  return axios.get(url, { withCredentials: true });
}

const clipboard = {
  addClipboard,
  receiveClipboards
};

export default clipboard;
