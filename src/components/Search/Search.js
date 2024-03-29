import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      validEntry: false,
    };
  }

  //* Sets changes on search bar to state
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      // [e.target.name]: e.target.value
    });
  };
  //* Calls searchShows from App Component
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchShows(this.state.text);
    // console.log(this.state.text);
    this.setState({
      text: "",
      validEntry: true,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form form-test">
          <input
            name="text"
            type="text"
            className="test search-layout"
            placeholder="Search TV Shows"
            value={this.state.text}
            onChange={this.handleChange}
            required
          />
          <input type="submit" className="btn btn-dark btn-block btn-test" />
        </form>
      </div>
    );
  }
}

export default Search;
