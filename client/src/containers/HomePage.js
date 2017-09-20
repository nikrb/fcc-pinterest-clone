import React from 'react';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';
import {getAllImages, addFavourite} from './PImageActions';

export default class HomePage extends React.Component {
  state = {
    image_list: []
  };
  componentWillMount = () => {
    getAllImages()
    .then( (response) => {
      console.log( response);
      const image_list = response.data.map( (i) => {
        return {...i, url: decodeURIComponent( i.url),
          title: decodeURIComponent( i.title)};
      });
      this.setState( {image_list});
    });
  };
  onAddFavourite = ( _id) => {
    const favouriteer = Auth.get_id();
    // TODO: add user feedback
    addFavourite( {_id, favouriteer})
    .then( (response) => {
      console.log( "add favourite response:", response);
      if( response.success){
        const image_list = this.state.image_list.map( (i) => {
          if( i._id === _id){
            return {...i, favourites: i.favourites.concat( favouriteer)};
          }
          return i;
        });
        this.setState( {image_list});
      }
    });
  };
  render = () => {
    return (
      <div className="App">
        <h1>pcloneInterest</h1>
        <ImageWall data={this.state.image_list}
          onFavouriteClicked={this.onAddFavourite} />
      </div>
    );
  };
}
