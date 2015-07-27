var React = require('react');

import EntryContainer from './EntryContainer';
import NamingForm from './NamingForm';

export default React.createClass({
  render: function() {
    return (
      <div className="appHolder">
        <div className="body">
            <div className="container">
                <EntryContainer />
                <NamingForm />
            </div>
        </div>
      </div>
    );
  }
})
