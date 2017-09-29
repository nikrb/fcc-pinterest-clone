import React from 'react';

export default class FavouriteButton extends React.Component {
  onClick = () => {
    if( this.props.allow_favourite){
      this.props.onFavouriteClick( this.props.data);
    }
  };
  render = () => {
    const {favourite_count,allow_favourite} = this.props;
    const heart = String.fromCharCode( 10084);
    const heart_style = {
      cursor: this.props.onFavouriteClick?"pointer":"inherit",
      color: allow_favourite?"red":"lightgrey",
      fontSize: this.props.onFavouriteClick?"1em":"1.5em"
    };
    const wrapper = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    };
    const count_style = { fontSize: "1.15em"};
    return (
      <div style={wrapper}>
        {this.props.onFavouriteClick?
          <button className="card_button" type="button" onClick={this.onClick} >
            <span style={heart_style}>{heart}</span>
          </button>
          :
          <span style={heart_style}>{heart}</span>
        }
        <span style={count_style} >({favourite_count})</span>
      </div>
    );
  };
};
