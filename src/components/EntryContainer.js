var React = require('react');
var Entry = require('./Entry');
var Rewards = require('./Rewards');
var NameList = require('./NameList');

var EntryContainer = React.createClass({
  render: function() {
    return (
      <div id="entryContainer" className="row">
        <Entry />
        <Rewards />
        <NameList />
      </div>
    );
  }
});

module.exports = EntryContainer;
