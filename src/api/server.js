import axios from 'axios';

const serverInfo = () => axios.get('http://localhost:3003/api/v1/');
// console.log('====' + JSON.stringify(serverInfo().then(response => console.log('-inside information-'+JSON.stringify(response)))));

export default serverInfo;
