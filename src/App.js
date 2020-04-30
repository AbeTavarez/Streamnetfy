import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import { NavBar } from "./components/Nav/NavBar";
import { Header } from "./components/Header/Header";
import ShowResults from "./components/ShowResults/ShowResults";
import Footer from "./components/Footer/Footer";
import ShowPages from "./components/ShowPages/ShowPages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowPage from "./components/ShowPage/ShowPage";
import About from "./components/About/About";
import Show from "./components/Show/Show";

const SEARCH_URL = " http://api.tvmaze.com/search/shows?q=";
const BASE_URL = "http://api.tvmaze.com/shows";
const date = new Date();
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
const ISO = `${y}-0${m}-${d}`;
const showByDate = `http://api.tvmaze.com/shows/1/episodesbydate?date=${ISO}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      tvshows: [],
      showsbyPage: [],
      loading: false,
    };
  }
  //* Fetch full list of shows by page
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    //* MAIN CALL
    const res = await axios.get(`${BASE_URL}`);
    this.setState({
      showsbyPage: res.data,
    });
    this.setState({
      loading: false,
    });
  }
  //* Search for show name
  //* func is pass down in props to Search Component
  //* but sets this Component state
  searchShows = async (showName) => {
    const res = await axios.get(`${SEARCH_URL}${showName}`);
    this.setState({
      tvshows: res.data,
    });
    this.setState({
      showsbyPage: [],
    });
  };

  clearShowbyPage = () => {
    this.setState({
      showsbyPage: [],
    });
  };

  //* Render
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route>
              <NavBar />
              <Header />

              <Search
                tvShows={this.state.tvshows}
                searchShows={this.searchShows}
              />
              <Fragment>
                <div className="container">
                  <Route exact path="/">
                    <ShowResults tvshows={this.state.tvshows} />
                  </Route>
                  <Route exact path="/results/:name">
                    <Show tvshows={this.state.tvshows} />
                  </Route>

                  <Route exact path="/">
                    <ShowPages showsbypages={this.state.showsbyPage} />
                  </Route>

                  <Route exact path="/show/:name">
                    <ShowPage showsbypages={this.state.showsbyPage} />
                  </Route>

                  <Route exact path="/about" component={About} />
                </div>
              </Fragment>
              <Footer />
            </Route>
            <Route></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
