import React from 'react';
export default class Message extends React.Component {
  messageTimeout = () => {
    this.props.removeMessage();
    this.is_running = false;
  };
  startTimer = () => {
    if( !this.is_running){
      this.is_running = true;
      window.setTimeout( this.messageTimeout, 5000);
    }
  };
  render = () => {
    const { style, text} = this.props;
    if( text.length) this.startTimer();
    const wrapper = {
      ...style,
      position: "absolute",
      width: "350px",
      top: "8em",
      padding: "0.5em 1em"
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
    return (
        <div style={wrapper}>
          {text}
          <button type="button" style={cross_style}
            onClick={this.props.removeMessage} >
            {cross_mark}
          </button>
        </div>
    );
  };
};
