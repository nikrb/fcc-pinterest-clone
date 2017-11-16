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
        <PICard key={i}
          image_src={p.url}
          title={p.title}
          author={p.owner} authorClicked={this.props.authorClicked}
          data_id={p._id}
          onFavouriteClicked={this.props.onFavouriteClicked}
          favourite_count={p.favourites.length || 0}
          onDeleteClicked={this.props.onDeleteClicked} />
      );
    });
    return (
      <div className="masonry">
        {pix}
      </div>
    );
  };
};
