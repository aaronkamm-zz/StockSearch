import React, { Component } from 'react';
// import Form from 'react-router-form';

class Search extends Component {
  searchOutput = (e) => {
    e.preventDefault();
    const quote = e.target.elements.getQuote.value.trim();
    this.props.history.push(`/company/${quote}`);
    
  };
  

  render() {
    return (
      <div>
        <form onSubmit = {this.searchOutput}  method = "GET">
          <input type = "text" name = "getQuote"></input>
          <button>GetInfo</button>
        </form>
      </div>
    )
  }
}

export default Search;