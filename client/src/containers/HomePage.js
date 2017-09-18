import React from 'react';
import ImageWall from '../components/ImageWall';
import Auth from '../modules/Auth';

export default class HomePage extends React.Component {
  render = () => {
    console.log( "user id:", Auth.get_id());
    // generate a list of pics
    const bu = "https://via.placeholder.com/";
    const data = [
      bu+"350x100", "bloopydoo", bu+"100x350", bu+"350x100", bu+"250x250", bu+"250x350",
      bu+"250x150", bu+"100x100", bu+"100x100", bu+"100x100", bu+"100x100"
    ];
    return (
      <div className="App">
        <h1>pcloneInterest</h1>
        <ImageWall data={data} />
      </div>
    );
  };
}
