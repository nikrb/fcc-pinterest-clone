import React from 'react';
import Auth from "../../modules/Auth";
import {addFavourite} from "./actions";

export default class FavouriteButton extends React.Component {
  onClick = ( e) => {
    const _id = this.props.data;
    const favouriteer = Auth.getUser()._id;
    // TODO: add user feedback
    addFavourite( {_id, favouriteer})
    .then( (response) => {
      console.log( "add favourite response:", response);
      if( response.success){
        this.props.addFavourite( {_id, favouriteer});
      } else {
        dispatchEvent( new CustomEvent( "message-box",
          {detail: { action: "show", text: response.message}}));
      }
    });
  };
  render = () => {
    const {favourite_count, author_id} = this.props;
    const heart = String.fromCharCode( 10084);
    let favourite_enabled = false;
    if( Auth.isUserAuthenticated()){
      if( this.props.addFavourite && Auth.getUser()._id !== author_id ){
        favourite_enabled = true;
      }
    }
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
        {favourite_enabled?
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
