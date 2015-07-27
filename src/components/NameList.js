var React = require('react');

var NameList = React.createClass({
  render: function() {
    return (
      <div id="names_list">
          <h4 className="t2">Rate your favorite names</h4>
          <div id="names_display" data-page="1" data-href="/entries/13495806-smartphone-reminders-for-behaviors-you-want-to-do/names">
              <ul id="names-list" className="name_list votable">
                  <li data-id="1433" data-rated="" className="one-name basic">
                      <div className="head clearfix">
                          <div className="name">Behavado</div>
                      </div>

                      <div className="extra">
                          <div className="description">Help track your behaviour</div>
                      </div>

                  </li>
              </ul>
          </div>
      </div>
    );
  }
});

module.exports = NameList;
