import React from 'react';

export default class Author extends React.Component {
  authorClicked = (e) => {
    if( this.props.authorClicked){
      this.props.authorClicked( this.props.author);
    }
  };
  render = () => {
    const highlight = this.props.authorClicked?true:false;
    const {name} = this.props.author;
    const style = {
      cursor: highlight?"pointer":"inherit",
      fontSize: "1.2em",
      color: highlight?"blue":"inherit"
    };
    return (
      <span style={style} onClick={this.authorClicked} >{name}</span>
    );
  };
};
