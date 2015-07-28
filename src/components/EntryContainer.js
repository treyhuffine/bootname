var React = require('react');
var Entry = require('./Entry');
var Rewards = require('./Rewards');
var NameList = require('./NameList');
var NamingForm = require('./NamingForm');

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
    API.getEntry(this.props.params.code);
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
        <NamingForm entryCode={this.state.entry.code}/>
        <Entry entry={this.state.entry} />
        <Rewards />
        <NameList list={this.state.entry.names} />
      </div>
    );
  }
});

module.exports = EntryContainer;
