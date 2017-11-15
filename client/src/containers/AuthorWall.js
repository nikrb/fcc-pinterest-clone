import React from 'react';
import {Redirect} from 'react-router-dom';
import ImageWall from '../components/ImageWall';
import {getUserImages} from './PImageActions';
import Auth from "../modules/Auth";

export default class AuthorWall extends React.Component {
  state = {
    image_list: [],
    redir: null
  };
  componentWillMount = () => {
    if( this.props.location.author){
      const {_id} = this.props.location.author;
      getUserImages( {owner:_id}) // , limit:10, offset: 0})
      .then( (response) => {
        console.log( "get user images response:", response);
        if( response.data){
          const data = response.data.map( (i)=>{
            return {...i, url: decodeURIComponent( i.url),
              title: decodeURIComponent( i.title)};
            });
            this.setState( {image_list: data});
          }
        });
    } else {
      this.setState( {redir: "/"});
    }
  };
  onAddFavourite = ( {_id, favouriteer}) => {
    const image_list = this.state.image_list.map( (i) => {
      if( i._id === _id){
        return {...i, favourites: i.favourites.concat( favouriteer)};
      }
      return i;
    });
    this.setState( {image_list});
  };
  render = () => {
    const authed = Auth.isUserAuthenticated();
    if( this.state.redir){
      return <Redirect to="/" />
    }
    const {name} = this.props.location.author;
    return (
      <div className="App">
        <h1>{`${name}'s`} Wall</h1>
        <ImageWall data={this.state.image_list}
          onFavouriteClicked={authed?this.onAddFavourite:null} />
      </div>
    );
  };
}
