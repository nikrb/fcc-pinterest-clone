import React from 'react';
import Author from './Author';
import {FavouriteButton} from './Favourite';
import DeleteButton from './DeleteButton';
import ImageDefault from './ImageDefault';

export default class PIGrid extends React.Component {
  componentWillMount = () => {
    console.log( "PIGrid props:", this.props);
  };
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
              missing_url="//via.placeholder.com/200x100?text=noimage"/>
            <span>{p.title}</span>
            <Author author={p.owner} authorClicked={this.props.authorClicked} />
            <div style={button_wrapper}>
              {this.props.onDeleteClicked?
                <DeleteButton onClick={this.props.onDeleteClicked} data={p._id} />
                // blank div to keep favourite button on right
                :<div/>
              }
              <FavouriteButton data={p._id}
                addFavourite={this.props.onFavouriteClicked}
                favourite_count={p.favourites.length||0} />
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
