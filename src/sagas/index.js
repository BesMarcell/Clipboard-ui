import map from 'lodash/map';
import * as serverInfo from './server-info';
import * as account from './account';
import * as clipboard from './clipboard';

export default function * rootSaga() {
  const sagas = { ...serverInfo, ...account, ...clipboard };
  yield map(sagas, saga => saga());
}
