import React from 'react';
import PIGrid from '../components/PIGrid';

export default class HomePage extends React.Component {
  render = () => {
    // generate a list of pics
    const bu = "https://via.placeholder.com/";
    const data = [
      bu+"350x100", bu+"100x350", bu+"350x100", bu+"250x250", bu+"250x350",
      bu+"250x150", bu+"100x100", bu+"100x100", bu+"100x100", bu+"100x100"
    ];
    return (
      <div className="App">
        <h1>pcloneInterest</h1>
        <div className="image_grid">
          <PIGrid data={data} />
        </div>
      </div>
    );
  };
}
