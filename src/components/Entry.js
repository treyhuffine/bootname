var React = require('react');

var Entry = React.createClass({
  render: function() {
    var entry = this.props.entry;
    return (
      <div id="entry" className="col-md-7">
        <div className="header">
            <div className="container">
                <div className="nmh4 t2 mar1 c">
                  {entry.entry_type}: {entry.title}
                </div>
            </div>
        </div>
        <div id="entryDescription">
            <h4 className="t2">Summary &nbsp; &nbsp;</h4>
            <div className="code">
              {entry.description}
            </div>
            <p className="constraint mar1"><b>Constraints:</b> {entry.name_constraints}</p>
        </div>
      </div>
    );
  }
});

module.exports = Entry;
