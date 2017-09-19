import React from 'react';
import ImageWall from '../components/ImageWall';
import Auth from '../modules/Auth';

export default class HomePage extends React.Component {
  render = () => {
    console.log( "user id:", Auth.get_id());
    // generate a list of pics
    const bu = "https://via.placeholder.com/";
    const data = [
      { url:bu+"350x100", title: "one", favourites: []},
      { url:"bloopydoo", title:"nope", favourites: []},
      { url: bu+"100x350", title:"two", favourites: ["a"]},
      { url:bu+"350x100", title:"three", favourites: []},
      { url: bu+"250x250", title: "four", favourites: []},
      { url:bu+"250x350", title: "five", favourites: []},
      { url:bu+"250x150", title: "six", favourites: []},
      { url: bu+"100x100", title: "seven", favourites: []},
      { url: bu+"100x100", title: "eight", favourites: []},
      { url: bu+"100x100", title: "nine", favourites: []},
      { url: bu+"100x100", title: "ten", favourites: []}
    ];
    return (
      <div className="App">
        <h1>pcloneInterest</h1>
        <ImageWall data={data} />
      </div>
    );
  };
}
