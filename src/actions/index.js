import { REQUEST_TEST, FETCH_SERVER_INFO_REQUESTED } from '../constants/';

const ActionCreators = {
  testrequest() {
    return {
      type: REQUEST_TEST,
      text: 'Hello from reducer'
    };
  },
  serverRequest() {
    return {
      type: FETCH_SERVER_INFO_REQUESTED
    };
  }
};
export default ActionCreators;
