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
import Alert from "./components/Alert/Alert";

const SEARCH_URL = " https://api.tvmaze.com/search/shows?q=";
const BASE_URL = "https://api.tvmaze.com/shows";
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
      showsbyPage: [], // all shows
      tvshows: [], // search shows
      isLoading: false,
      isSearching: false,
      alert: null,
    };
  }


  //* Fetch full list of shows by page
  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    //* MAIN CALL
    const res = await axios.get(`${BASE_URL}`);
    console.log(res.data);
    this.setState({
      showsbyPage: res.data,
    });
    this.setState({
      isLoading: false,
    });
  }


  //* Search for show name
  //* func is pass down in props to Search Component
  //* but sets this Component state
  searchShows = async (showName) => {
    this.setState({
      isLoading: true,
      isSearching: true,
    });
    const res = await axios.get(`${SEARCH_URL}${showName}`);
    console.log(res.data);
    this.setState({
      tvshows: res.data,
      showsbyPage: [],
      isLoading: false,
      isSearching: false,
    });
  };
  //* Clears out other object call
  clearShowbyPage = () => {
    this.setState({
      showsbyPage: [],
    });
  };

  //* Set Alert
  //* Pass down to Search Component
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type },
    });
    //* Time out to remove the Alert from the UI
    setTimeout(() => this.setState({ alert: null }), 3000);
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
                searchShows={this.searchShows}
                setAlert={this.alert}
              />

              <div className="container">
                <Switch>
                  <Route exact path="/">
                    <ShowResults
                      tvshows={this.state.tvshows}
                      isLoading={this.state.isLoading}
                    />
                    <ShowPages
                      showsbypages={this.state.showsbyPage}
                      isLoading={this.state.isLoading}
                    />
                  </Route>

                  <Route exact path="/show/:name">
                    <ShowPage showsbypages={this.state.showsbyPage} />
                  </Route>
                  <Route exact path="/results/:name">
                    <Show tvshows={this.state.tvshows} />
                  </Route>
                </Switch>
              </div>

              <Route exact path="/about" component={About} />
              <Footer />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}
{
  /* <ShowPages showsbypages={this.state.showsbyPage} /> */
}

{
  /* <Route exact path="/show/:name">
<ShowPage showsbypages={this.state.showsbyPage} />
</Route> */
}
export default App;
