import React, { Component } from 'react';

class Search extends Component {
  searchOutput = (e) => {
    e.preventDefault();
    const quote = e.target.elements.getQuote.value.trim();
    this.props.history.push(`/${quote}`);
    
  };
  

  render() {
    return (
      <div>
        <form className = "mt-4" onSubmit = {this.searchOutput}  method = "GET">
          <div class = "input-group">
            <input class = "form-control form-control-lg" placeholder = "example: AAPL" type = "text" name = "getQuote"></input>
            <div className = "input-group-append">
              <button class = "btn btn-info">Get Info</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;