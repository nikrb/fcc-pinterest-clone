import React from 'react';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';
import NewImageDialogue from '../components/NewImageDialogue';

export default class MyWall extends React.Component {
  state = {
    show_new_image_dialogue: false
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
    const user_id = Auth.get_id();
    // generate a list of pics
    const bu = "https://via.placeholder.com/";
    const data = [
      bu+"350x100", "bloopydoo", bu+"100x350", bu+"350x100", bu+"250x250", bu+"250x350",
      bu+"250x150", bu+"100x100", bu+"100x100", bu+"100x100", bu+"100x100"
    ];
    return (
      <div className="App">
        <h1>My Wall</h1>
        <button type="button" onClick={this.onAddImageClick} >Add Image</button>
        <ImageWall data={data} />
        {this.state.show_new_image_dialogue?
          <NewImageDialogue onCancel={this.onNewImageCancel}
            onOK={this.onNewImageOK} />
          :null
        }
      </div>
    );
  };
}
