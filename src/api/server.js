import axios from 'axios';

const serverInfo = () => axios.get('http://localhost:3003/api/v1/');

export default serverInfo;
