var React = require('react');
var Entry = require('./Entry');
var Rewards = require('./Rewards');
var NameList = require('./NameList');

import EntryStore from "../stores/EntryStore";
import API from '../API';

var getEntryFromStore = function(entryCode) {
  return { entry: EntryStore.get(entryCode) }
};

var EntryContainer = React.createClass({
  getInitialState: function() {
    return getEntryFromStore();
  },
  _onChange: function() {
    this.setState(getEntryFromStore());
  },
  componentWillMount: function() {
    API.getEntry("book/87519463-react-and-flux-getting-started-book");
  },
  componentDidMount: function() {
    EntryStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    EntryStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div id="entryContainer" className="row">
        <Entry entry={this.state.entry} />
        <Rewards />
        <NameList />
      </div>
    );
  }
});

module.exports = EntryContainer;
