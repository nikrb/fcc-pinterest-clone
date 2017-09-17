import React from 'react';
export default class FavouriteButton extends React.Component {
  render = () => {
    const {favourite_count} = this.props;
    const heart = String.fromCharCode( 10084);
    const heart_style = { color: "red"};
    const wrapper = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    };
    const count_style = { fontSize: "1.15em"};
    return (
      <div style={wrapper}>
        <button className="card_button" type="button" ><span style={heart_style}>{heart}</span></button>
        <span style={count_style} >({favourite_count})</span>
      </div>
    );
  };
};
