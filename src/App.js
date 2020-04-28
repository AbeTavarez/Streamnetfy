import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";

const baseURL = " http://api.tvmaze.com/search/shows?q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tvshows: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("http://api.tvmaze.com/schedule/full");
    // console.log(res.data);
    this.setState({
      tvshows: res.data,
    });
  }

  searchShows = async (showName) => {
    const res = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${showName}`
    );
    // console.log(showName);
    // console.log(res.data);
    this.setState({
      tvshows: res.data,
    });
    // console.log(this.state.tvshows);
  };

  render() {
    // console.log(this.state.tvshows[0]);
    // const [name] = this.state.tvshows;
    console.log("-->", this.state.tvshows);
    return (
      <div className="App">
        <Search tvShows={this.state.tvshows} searchShows={this.searchShows} />
        {this.state.tvshows.map((show) => (
          <div>
            <h3>{show.show.name}</h3>
            <img src={show.show.image.original} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
