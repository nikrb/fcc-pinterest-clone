import React from 'react';

export default class MessageBox extends React.Component {
  state = {
    show: false,
    text: ""
  };
  componentWillMount = () => {
    window.addEventListener( "message-box", this.handleMessage);
  };
  componentWillUnmount = () => {
    window.removeEventListener( "message-box", this.handleMessage);
  };
  handleMessage = ( e) => {
    const {action, text} = e.detail;
    console.log( "@handleMessage data:", e);
    switch( action){
      case "show":
        this.startTimer();
        this.setState( { show: true, text});
        break;
      case "hide":
      default:
        this.hideMessage();
        break;
    }
  };
  messageTimeout = () => {
    console.log( "message timeout");
    this.hideMessage();
  };
  hideMessage = () => {
    window.clearTimeout( this.timeout_id);
    this.timeout_id = 0;
    this.setState( {show: false});
  };
  startTimer = () => {
    if( this.timeout_id === 0){
      this.timeout_id = window.setTimeout( this.messageTimeout, 5000);
    }
  };
  render = () => {
    const {text} = this.state;
    const wrapper = {
      position: "fixed",
      width: "350px",
      top: "1em",
      left: "calc( 50% - 175px - 0.5em)",
      padding: "0.5em 1em",
      color: "tomato",
      background: "linen"
    };
    const cross_mark = String.fromCharCode( 10008);
    const cross_style = {
      visibility: text.length?"visible":"hidden",
      position: "absolute",
      top: "0.2em",
      right: "0.5em",
      fontSize: "0.8em",
      color: "tomato",
      background: "inherit",
      border: "none"
    };
    const {show} = this.state;
    return show?(
        <div style={wrapper}>
          {text}
          <button type="button" style={cross_style}
          onClick={this.hideMessage} >
          {cross_mark}
          </button>
        </div>
    ):null;
  };
};
