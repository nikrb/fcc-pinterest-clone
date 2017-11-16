import React from 'react';
import Author from './Author';
import {FavouriteButton} from './Favourite';
import DeleteButton from './DeleteButton';
import ImageDefault from './ImageDefault';

export default class PICard extends React.Component {
  render = () => {
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
    const { author, title, authorClicked, image_src, onDeleteClicked, data_id,
      onFavouriteClicked, favourite_count} = this.props;
    return (
      <div className="item" >
        <div style={card_style} >
          <ImageDefault style={image_style} src={image_src}
            missing_url="//via.placeholder.com/200x100?text=noimage"/>
          <span>{title}</span>
          <Author author={author} authorClicked={authorClicked} />
          <div style={button_wrapper}>
            {onDeleteClicked?
              <DeleteButton onClick={onDeleteClicked} data={data_id} />
              // blank div to keep favourite button on right
              :<div/>
            }
            <FavouriteButton data={data_id} author_id={author._id}
              addFavourite={onFavouriteClicked}
              favourite_count={favourite_count||0} />
          </div>
        </div>
      </div>
    );
  };
};
