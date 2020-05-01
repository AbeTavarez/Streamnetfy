import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Show extends Component {
  constructor(props) {
    super(props);

    const currentShow = this.props.tvshows.find(
      (show) => show.show.name === this.props.match.params.name
    );

    this.state = {
      shows: currentShow,
    };
  }

  render() {
    // console.log("curr data->", this.props.currentShow);
    // console.log("props data->", this.props.tvshows);
    // console.log("sate data->", this.state.shows);
    return (
      <div className="card grid-2">
        <div>
          <h3>{this.state.shows.show.name}</h3>
          {this.state.shows.show.genres.map((genre) => (
            <p>{genre}</p>
          ))}
          <p>{this.state.shows.show.summary}</p>
          <h6>{this.state.shows.show.premiered}</h6>
        </div>
        <div className="all-center">
          <img src={this.state.shows.show.image.original} />
        </div>
      </div>
    );
  }
}

export default withRouter(Show);
