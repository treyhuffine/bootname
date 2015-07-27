var React = require('react');

var Entry = React.createClass({
  render: function() {
    return (
      <div id="entry" className="col-md-7">
        <div className="header">
            <div className="container">
                <div className="nmh4 t2 mar1 c">Software Component: Smartphone reminders for behaviors you want to do</div>
            </div>
        </div>
        <div id="entryDescription">
            <h4 className="t2">Summary &nbsp; &nbsp;</h4>
            <div className="code">
                <p>Our software, code-named Compass, is a behavior-change-as-a-service application. We help users discover their self-improvement goals and get reminders about easy activities that help them reach those goals. We work with
                    experts and agencies to create packaged behavior agendas and reminder packages that users can adopt at the touch of a button.</p>

                <p>We think of concepts like "set a course," "stay on track," etc, but we are open to whatever works.</p>
            </div>
            <p className="constraint mar1"><b>Constraints:</b> Not Compass</p>
        </div>
      </div>
    );
  }
});

module.exports = Entry;
