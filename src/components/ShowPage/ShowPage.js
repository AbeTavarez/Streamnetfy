import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ShowPage.css";

class ShowPage extends Component {
  constructor(props) {
    super(props);

    const currentShow = this.props.showsbypages.find(
      (show) => show.name === this.props.match.params.name
    );
    // console.log("--->", this.props.showsbypages);
    this.state = {
      shows: currentShow,
    };

    // console.log("--->", this.state.shows);
  }

  render() {
    return (
      <div className="card grid-2">
        <div className="all-center">
          <h1>{this.state.shows.name}</h1>
          <span>{this.state.shows.language}</span>
          <span>{this.state.shows.runtime}</span>
          {this.state.shows.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
          <p>{this.state.shows.summary}</p>
        </div>
        <div>
          <img src={this.state.shows.image.original} />
        </div>
      </div>
    );
  }
}

export default withRouter(ShowPage);
