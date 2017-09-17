import React from 'react';

export default class PIGrid extends React.Component {
  render = () => {
    const {data} = this.props;
    const pix = data.map( (p) => {
      return (
        <img className="item" src={p} alt="missing" />
      );
    });
    return (
      <div className="container">
        {pix}
      </div>
    );
  };
};
