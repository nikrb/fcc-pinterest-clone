import React from 'react';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';
import NewImageDialogue from '../components/NewImageDialogue';
import {getUserImages} from './PImageActions';

export default class MyWall extends React.Component {
  state = {
    image_list: [],
    show_new_image_dialogue: false
  };
  componentWillMount = () => {
    const owner = Auth.get_id();
    getUserImages( {owner, limit:10, offset: 0})
    .then( (response) => {
      console.log( "get user images response:", response);
      if( response.data){
        this.setState( {image_list: response.data});
      }
    });
  };
  onAddImageClick = (e) => {
    this.setState( {show_new_image_dialogue: true});
  };
  onNewImageCancel = () => {
    this.setState( {show_new_image_dialogue: false});
  };
  onNewImageOK = (image_url) => {
    // create new image for user
    console.log( "add new image:", image_url);
    this.setState( {show_new_image_dialogue: false});

  };
  render = () => {
    return (
      <div className="App">
        <h1>My Wall</h1>
        <button type="button" onClick={this.onAddImageClick} >Add Image</button>
        <ImageWall data={this.state.image_list} />
        {this.state.show_new_image_dialogue?
          <NewImageDialogue onCancel={this.onNewImageCancel}
            onOK={this.onNewImageOK} />
          :null
        }
      </div>
    );
  };
}
