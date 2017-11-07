import React from 'react';
import {Redirect} from 'react-router-dom';
import Author from './Author';
import FavouriteButton from './FavouriteButton';
import DeleteButton from './DeleteButton';
import ImageDefault from './ImageDefault';

export default class PIGrid extends React.Component {
  state = {
    redirect: null
  };
  componentWillMount = () => {
    console.log( "PIGrid props:", this.props);
  };
  authorClicked = (owner) => {
    // redirect to author wall
    this.setState( {redirect: owner});
  };
  render = () => {
    if( this.state.redirect){
      return (
        <Redirect to={{
          pathname:"/authorwall",
          state: { from: this.props.location},
          author: this.state.redirect
        }} />
      );
    }
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
            <Author author={p.owner} authorClicked={this.authorClicked} />
            <div style={button_wrapper}>
              {this.props.onDeleteClicked?
                <DeleteButton onClick={this.props.onDeleteClicked} data={p._id} />
                // blank div to keep favourite button on right
                :<div/>
              }
              <FavouriteButton data={p._id}
                favourite_count={p.favourites.length||0}
                onFavouriteClick={this.props.onFavouriteClicked} />
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
