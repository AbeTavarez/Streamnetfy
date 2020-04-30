import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Show extends Component {
  constructor(props) {
    super(props);

    const currentShow = this.props.tvshows.find(
      (show) => show.name === this.props.match.params.name
    );

    this.state = {
      show: currentShow,
    };
  }

  render() {
    // console.log("show data->", this.state.show);
    return (
      <div className="card grid-2">
        <h1>Show component</h1>
        {/* <div>
          <h3>{this.state.show.name}</h3>
          {this.state.show.genres.map((genre) => (
            <p>{genre}</p>
          ))}
          <p>{this.state.show.summary}</p>
          <h6>{this.state.show.premiered}</h6>
        </div>
        <div className="all-center">
          <img src={this.state.show.image.original} />
        </div> */}
      </div>
    );
  }
}

export default withRouter(Show);
