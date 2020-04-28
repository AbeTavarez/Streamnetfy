import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import { NavBar } from "./components/Nav/NavBar";
import { Header } from "./components/Header/Header";
import { ShowResults } from "./components/ShowResults/ShowResults";
import Footer from "./components/Footer/Footer";

const baseURL = " http://api.tvmaze.com/search/shows?q=";

const date = new Date();
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
const ISO = `${y}-0${m}-${d}`;
console.log(ISO);
const showByDate = `http://api.tvmaze.com/shows/1/episodesbydate?date=${ISO}`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      tvshows: [],
      byPage: [],
    };
  }
  //* Fetch full list of shows
  //! images are not working from calling this endpoint
  async componentDidMount() {
    const res = await axios.get("http://api.tvmaze.com/shows");

    this.setState({
      byPage: res.data,
    });
    console.log(res.data);
  }
  //* Search for show name
  //* func is pass down in props to Search Component
  //* but sets this Component state
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

  //* Render
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Search tvShows={this.state.tvshows} searchShows={this.searchShows} />
        <ShowResults tvshows={this.state.tvshows} />
        <Footer />
      </div>
    );
  }
}

export default App;
