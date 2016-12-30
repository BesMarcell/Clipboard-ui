import axios from 'axios';
import config from './../config';
const fullUrl = `${config.api.host}${config.api.prefix}`;

function addClipboard(payload) {
  const url = `${fullUrl}/clipboard`
  return axios.post(url, payload, { withCredentials: true })
}

const clipboard = {
  addClipboard
};

export default clipboard;
