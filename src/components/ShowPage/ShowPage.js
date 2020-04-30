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
            <span>{genre}</span>
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

/* <div className="all-center">
          {/* <img src={this.props.showsbypages.image.original} /> */

// </div>
//       <div className="cardShow">
//         <div className="lineDetails">
//           <h1>{this.props.showsbypages.name}</h1>
//           <p>{this.props.showsbypages.language}</p>
//           <p>{this.props.showsbypages.runtime}m</p>
//           {this.props.showsbypages.genres.map((genre) => (
//             <p>{genre}</p>
//           ))}
//           <p>{this.props.showsbypages.premiered}</p>
//         </div>
//         <WatchNowBtn network={this.state.shows} />
//       </div>
