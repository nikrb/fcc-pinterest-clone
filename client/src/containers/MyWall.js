import React from 'react';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';
import NewImageDialogue from '../components/NewImageDialogue';
import {getUserImages,createNewImage} from './PImageActions';

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
        const data = response.data.map( (i)=>{
          return {...i, url: decodeURIComponent( i.url),
            title: decodeURIComponent( i.title)};
        });
        this.setState( {image_list: data});
      }
    });
  };
  onShowNewImageDlg = (e) => {
    this.setState( {show_new_image_dialogue: true});
  };
  onNewImageCancel = () => {
    this.setState( {show_new_image_dialogue: false});
  };
  onNewImageOK = (detail) => {
    // create new image for user
    console.log( "add new image:", detail);
    this.setState( {show_new_image_dialogue: false});
    const payload = {url:encodeURIComponent( detail.url),
      title:encodeURIComponent( detail.title),
      owner:Auth.get_id(), created: new Date()};
    createNewImage( payload)
    .then( (response) => {
      console.log( "create new image response:", response);
    });
  };
  render = () => {
    return (
      <div className="App">
        <h1>My Wall</h1>
        <button type="button" onClick={this.onShowNewImageDlg} >Add Image</button>
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
