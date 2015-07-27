var React = require('react');

var NamingForm = React.createClass({
  render: function() {
    return (
      <div className="col-md-5">
          <div id="naming-form">
              <form id="new-name-form" className="new_name" action="/entries/13495806-smartphone-reminders-for-behaviors-you-want-to-do/names" acceptCharset="UTF-8" method="post">
                  <input name="utf8" type="hidden" value="✓" />
                  <input type="hidden" name="authenticity_token" value="83N3Rt5AngOxE0akjaAANf6FJXHovGdK9kTYyDjcZqckRE8Z6Xh5A25+u5rlISkgqEM5Kl0wwvp5cmZBII7Gyw==" />
                  <div className="ajax_errors alert alert-error"></div>
                  <div className="form-group">
                      <h4 className="t2">Got a cool name for this?</h4>
                      <div className="controls">
                          <input className="form-control" placeholder="Awesome Name Here" data-logged-in="false" maxLength="80" size="80" type="text" name="name[label]" id="name_label" />
                          <span className="help-block"></span>
                          <textarea rows="2" className="form-control" placeholder="Why do you think this name would work" data-logged-in="false" maxLength="500" name="name[description]" id="name_description"></textarea>
                          <span className="help-block"></span>
                          <div id="propose-name-wrapper">
                              <a href="#" id="propose-name" className="btn btn-default"><i className="fa fa-flag"></i>&nbsp; Propose Name</a>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    );
  }
});

module.exports = NamingForm;
