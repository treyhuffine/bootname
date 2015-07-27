import AppEventEmitter from "./AppEventEmitter";
import AppDispatcher from "../dispatcher";
import Actions from "../constants";

let _entry = {};

class EntryStoreEmitter extends AppEventEmitter {
  get(entryCode) {
    return _entry;
  }
}

let EntryStore = new EntryStoreEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case Actions.RECEIVE_ENTRY:
      _entry = action.payload;
      EntryStore.emitChange();
      break;

    default:
      // do nothing
  }
});


export default EntryStore;
