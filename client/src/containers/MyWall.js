import React from 'react';
import Auth from '../modules/Auth';
import ImageWall from '../components/ImageWall';

export default class MyWall extends React.Component {
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
        <ImageWall data={data} />
      </div>
    );
  };
}
