import React from 'react';
import {Redirect} from 'react-router-dom';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';
import {getAllImages} from './PImageActions';

export default class HomePage extends React.Component {
  state = {
    image_list: [],
    redirect: null
  };
  componentWillMount = () => {
    getAllImages()
    .then( (response) => {
      console.log( response);
      if (response.success) {
        const image_list = response.data.map( (i) => {
          return {...i, url: decodeURIComponent( i.url),
            title: decodeURIComponent( i.title)};
          });
          this.setState( {image_list});
      }
    });
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
  authorClicked = (owner) => {
    this.setState( {redirect: owner});
  };
  render = () => {
    if( this.state.redirect){
      return (
        <Redirect to={{
          pathname:"/authorwall",
          state: { from: this.props.location},
          author: this.state.redirect
        }} />
      );
    }
    const authed = Auth.isUserAuthenticated();
    return (
      <div className="App">
        <h1>pinterest Clone</h1>
        <ImageWall data={this.state.image_list}
          onFavouriteClicked={authed?this.onAddFavourite:null}
          authorClicked={this.authorClicked} />
      </div>
    );
  };
}
