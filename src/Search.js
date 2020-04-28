import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchShows(this.state.text);
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Search"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
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
