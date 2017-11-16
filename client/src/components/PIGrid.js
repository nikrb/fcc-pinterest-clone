import React from 'react';
import PICard from "./PICard";

export default class PIGrid extends React.Component {
  componentWillMount = () => {
    console.log( "PIGrid props:", this.props);
  };
  render = () => {
    const {data} = this.props;
    const pix = data.map( (p,i) => {
      return (
        <PICard key={i} {...this.props}
          image_src={p.url}
          title={p.title}
          author={p.owner}
          data_id={p._id}
          addFavourite={this.props.onFavouriteClicked}
          favourite_count={p.favourites.length || 0} />
      );
    });
    return (
      <div className="masonry">
        {pix}
      </div>
    );
  };
};
