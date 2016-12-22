import map from 'lodash/map';
import * as serverInfo from './server-info';
import * as account from './account';

export default function * rootSaga() {
  const sagas = { ...serverInfo, ...account };
  yield map(sagas, saga => saga());
}
