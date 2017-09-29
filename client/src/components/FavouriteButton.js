import React from 'react';

export default class FavouriteButton extends React.Component {
  onClick = () => {
    if( this.props.onFavouriteClick){
      this.props.onFavouriteClick( this.props.data);
    }
  };
  render = () => {
    const {favourite_count} = this.props;
    const heart = String.fromCharCode( 10084);
    const favourite_enabled = this.props.onFavouriteClick?true:false;
    const heart_style = {
      cursor: favourite_enabled?"pointer":"inherit",
      color: favourite_enabled?"red":"lightgrey",
      fontSize: favourite_enabled?"1em":"1.5em"
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
