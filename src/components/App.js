var React = require('react');

export default React.createClass({
  render: function() {
    return (
      <div className="appHolder">
        <div className="body">
          <div className="container">
            <h1>Main</h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
})
