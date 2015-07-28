import request from 'superagent';
import { API_HOST } from './constants';
import ServerActions from './actions/ServerActions';

export default {
  getEntry(entryCode) {
    request
      .get(`${API_HOST}/entry/${entryCode}`)
      .end((err, responseFromServer) => {
        ServerActions.receiveEntry(responseFromServer.body);
        this.getEntryNames(entryCode);
      });
  },
  getEntryNames(entryCode) {
    request
      .get(`${API_HOST}/entries/${entryCode}/names`)
      .end(function(err, responseFromServer) {
        ServerActions.receiveEntryNames(responseFromServer.body.names);
      });
  },
  submitNameEntry(entryCode, name) {
    request
      .post(`${API_HOST}/entries/${entryCode}/names`)
      .send({name: name})
      .end(function(err, responseFromServer) {
        ServerActions.receivePostedName(responseFromServer.body);
      });
  }
}
