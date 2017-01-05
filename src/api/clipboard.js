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

function deleteClipboard(id) {
  const url = `${fullUrl}/clipboard/${id}`;
  return axios.delete(url, { withCredentials: true });

}

function editClipboard(payload) {
  const url = `${fullUrl}/clipboard/${payload.id}`;
  return axios.put(url, {type: payload.type, value: payload.value}, {withCredentials: true});
}

const clipboard = {
  addClipboard,
  receiveClipboards,
  deleteClipboard,
  editClipboard
};

export default clipboard;
