import React from 'react';

export default class PIGrid extends React.Component {
  render = () => {
    const {data} = this.props;
    const heart = String.fromCharCode( 10084);
    const heart_style = { color: "red"};
    const card_style = {}; // { width:"100%"};
    const image_style = {}; // width: "100%", borderRadius: "5px"};
    const pix = data.map( (p,i) => {
      return (
        <div className="item" key={i} >
          <div style={card_style} >
            <img style={image_style} src={p} alt="missing" />
            <p>some text</p>
            <button className="heart_button" type="button" ><span style={heart_style}>{heart}</span></button>
            </div>
        </div>
      );
    });
    return (
      <div className="masonry">
        {pix}
      </div>
    );
  };
};
