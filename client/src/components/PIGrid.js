import React from 'react';
import FavouriteButton from './FavouriteButton';
import DeleteButton from './DeleteButton';
import ImageDefault from './ImageDefault';

export default class PIGrid extends React.Component {
  render = () => {
    const {data} = this.props;
    const card_style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "5px"
    };
    const image_style = {
      maxWidth: "100%"
    };
    const button_wrapper = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%"
    };
    const pix = data.map( (p,i) => {
      return (
        <div className="item" key={i} >
          <div style={card_style} >
            <ImageDefault style={image_style} src={p.url}
              missing_url="http://via.placeholder.com/200x100?text=noimage"/>
            <span>{p.title}</span>
            <div style={button_wrapper}>
              <DeleteButton />
              <FavouriteButton favourite_count={p.favourites.length||0} />
            </div>
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
