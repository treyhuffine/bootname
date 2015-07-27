import React from "react";

export default class NameItem extends React.Component {
  render() {
    return (
      <li data-id={this.props.item.id} data-rated="" className="one-name basic">
          <div className="head clearfix">
              <div className="name">{this.props.item.label}</div>
          </div>

          <div className="extra">
              <div className="description">{this.props.item.description}</div>
          </div>

      </li>
    );
  }
}
