var React = require('react');
import NameItem from './NameItem';

export default class NameList extends React.Component {
  render() {
    var nameItems = this.props.list.map( item => {
      return <NameItem item={item} key={item.id} />;
    });
    return (
      <div id="names_list">
          <h4 className="t2">Rate your favorite names</h4>
          <div id="names_display" data-page="1" data-href="/entries/13495806-smartphone-reminders-for-behaviors-you-want-to-do/names">
              <ul id="names-list" className="name_list votable">
                {nameItems}
              </ul>
          </div>
      </div>
    );
  }
}
