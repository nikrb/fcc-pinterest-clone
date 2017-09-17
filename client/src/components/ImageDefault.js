import React from 'react';

export default class ImageDefault extends React.Component {
  state = {
    image: null,
    missing_url: null,
    show_image: false
  };
  componentWillMount = () => {
    const {src, missing_url} = this.props;
    this.getImage( src)
    .then( ( img) => {
      console.log( "got image:", img.src);
      this.setState( {image:img, show_image: true});
    })
    .catch( (err) => {
      console.error( "image didn't load:", err);
      this.setState( {show_image: true});
    });
    this.setState( {missing_url});
  };
  getImage = ( url) => {
    console.log( "get url:", url);
    return new Promise( (resolve, reject) => {
      const timeout_id = setTimeout( () => { reject( {error:"image timed out"})}, 5000);
      const img = new Image();
      img.onload = () => {
        clearTimeout( timeout_id);
        resolve (img);
      };
      img.onerror = () => {
        clearTimeout( timeout_id);
        reject( {error:"image not found"});
      };
      img.src = url;
    });
  };
  render = () => {
    const {show_image, image, missing_url} = this.state;
    return (
      <div>
        {show_image?
          <img className="item" src={image?image.src:missing_url} alt="" />
          :
          <div className="item" />
        }
      </div>
    );
  };
};
