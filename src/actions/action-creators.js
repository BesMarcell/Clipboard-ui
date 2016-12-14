import {REQUEST_TEST} from '../constants';

const ActionCreators = {
    testrequest () {
      return {
        type: REQUEST_TEST,
        text: 'Hello from reducer'
      }
    }
}

export default ActionCreators;
