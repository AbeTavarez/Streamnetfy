import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
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
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            name="text"
            type="text"
            className="test"
            placeholder="Search TV Shows"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;

// {this.state.tvshows.map((show) => (
//   <div>
//     <h3>{show.show.name}</h3>
//     <img src={show.show.image.original} />
//   </div>
// ))}
