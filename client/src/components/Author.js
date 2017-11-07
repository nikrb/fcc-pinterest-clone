import React from 'react';

export default class Author extends React.Component {
  authorClicked = (e) => {
    this.props.authorClicked( this.props.author);
  };
  render = () => {
    const {name} = this.props.author;
    return (
      <span onClick={this.authorClicked} >{name}</span>
    );
  };
};
