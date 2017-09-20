import React from 'react';
import ImageWall from '../components/ImageWall';
import {getAllImages} from './PImageActions';

export default class HomePage extends React.Component {
  state = {
    data: []
  };
  componentWillMount = () => {
    getAllImages()
    .then( (response) => {
      console.log( response);
      const data = response.data.map( (i) => {
        return {...i, url: decodeURIComponent( i.url),
          title: decodeURIComponent( i.title)};
      });
      this.setState( {data});
    });
  };
  render = () => {
    return (
      <div className="App">
        <h1>pcloneInterest</h1>
        <ImageWall data={this.state.data} />
      </div>
    );
  };
}
