import AppEventEmitter from "./AppEventEmitter";
import AppDispatcher from "../dispatcher";
import Actions from "../constants";

let _entry = { };
let _entryNames = [];

class EntryStoreEmitter extends AppEventEmitter {
  get(entryCode) {
    _entry.names = _entryNames;
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

    case Actions.RECEIVE_ENTRY_NAMES:
      _entryNames = action.payload;
      EntryStore.emitChange();
      break;

    default:
      // do nothing
  }
});


export default EntryStore;
