import React from 'react';
import PropTypes from 'prop-types';
import ImageDefault from './ImageDefault';

export default class NewImageDialogue extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onOK: PropTypes.func.isRequired
  };
  state = {
    title: "",
    url_text: "",
    url: ""
  };
  onTitleChange = (e) => {
    this.setState( {title: e.target.value});
  };
  onUrlChange = (e) => {
    this.setState( {url_text: e.target.value});
  };
  grabUrl = () => {
    this.setState( {url: this.state.url_text});
  };
  onUrlBlur = (e) => {
    this.grabUrl();
  };
  handleUrlKeyUp = (e) => {
    if( e.keyCode === 13){
      this.grabUrl();
    }
  };
  onOK = (e) => {
    this.props.onOK( this.state.url_text);
    this.setState( {url: this.state.url_text});
  };
  onCancel = (e) => {
    this.props.onCancel();
  };
  render = () => {
    const {title, url, url_text} = this.state;
    const image_box_style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems:"center",
      width: "200px",
      height: "200px"
    };
    const {width,height} = image_box_style;
    const image_style = { maxWidth: width, maxHeight: height };
    const wrapper = {
      padding: "0px 20px",
      border: "2px solid darkgrey",
      borderRadius: "10px",
      boxShadow: "0px 0px 8px 0 #ccc",
      background: "lightgrey",
      position: "absolute"
    };
    const ip_wrapper = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "5px auto"
    };
    const btn_wrapper = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "0.8em",
      marginBottom: "1em"
    };
    const reload_symbol = String.fromCharCode( 8635);
    return (
      <div className="container" style={wrapper} >
        <h3>Add New Image</h3>
        <div style={image_box_style} >
          <ImageDefault style={image_style} src={url}
            missing_url="http://via.placeholder.com/200x200?text=noimage"/>
        </div>
        <div style={ip_wrapper} >
          Title
          <input type="text" value={title} onChange={this.onTitleChange} />
        </div>
        <div style={ip_wrapper} >
          Url
          <input type="text" value={url_text}
            onChange={this.onUrlChange}
            onKeyUp={this.handleUrlKeyUp}
            onBlur={this.onUrlBlur}/>
        </div>
        <div style={btn_wrapper}>
          <button type="button" onClick={this.grabUrl} >{reload_symbol}</button>
          <button type="button" onClick={this.onOK} >OK</button>
          <button type="button" onClick={this.onCancel} >Cancel</button>
        </div>
      </div>
    );
  };
};
