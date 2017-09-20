import React from 'react';

export default class DeleteButton extends React.Component {
  handleClick = (e) => {
    this.props.onClick( this.props.data);
  };
  render = () => {
    const cross_mark = String.fromCharCode( 10008);
    const cross_style = { color: "red"};
    return (
      <button className="card_button" type="button" onClick={this.handleClick}>
        <span style={cross_style}>{cross_mark}</span>
      </button>
    );
  };
};
