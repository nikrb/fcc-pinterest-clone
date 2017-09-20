import React from 'react';
import PIGrid from '../components/PIGrid';

export default class ImageWall extends React.Component {
  render = () => {
    return (
      <div className="image_grid">
        <PIGrid {...this.props} />
      </div>
    );
  };
}
