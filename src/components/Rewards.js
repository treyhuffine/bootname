var React = require('react');

var Rewards = React.createClass({
  render: function() {
    return (
      <div id="rewards">
          <div className="">
              <h4 className="t2">REWARDS!</h4>
          </div>
          <div className="row alert alert-success b">
              <div className="col-xs-6 text-center">
                  <span className="reward-amount">$100</span> for winner</div>
              <div className="col-xs-6 text-center">
                  <span className="reward-amount">$70</span> for supporters</div>
          </div>
      </div>
    );
  }
});

module.exports = Rewards;
