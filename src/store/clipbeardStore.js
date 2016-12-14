import {createStore} from 'redux';
import reducers from '../reducers';

const clipbeardStore = createStore(reducers);

export default clipbeardStore;
