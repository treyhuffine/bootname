import request from 'superagent';
import { API_HOST } from './constants';
import ServerActions from './actions/ServerActions';

export default {
  getEntry(entryCode) {
    request
      .get(`${API_HOST}/entry/${entryCode}`)
      .end(function(err, responseFromServer) {
        ServerActions.receiveEntry(responseFromServer.body);
      });
  }
}
