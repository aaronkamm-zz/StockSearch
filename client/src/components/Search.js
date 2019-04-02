import React, { Component } from 'react';
import classNames from 'classnames';

class Search extends Component {
  state = {
    quote: undefined
  };  

  searchOutput = (e) => {
    e.preventDefault();
    const quote = e.target.elements.getQuote.value.trim();
    this.props.history.push(`/${quote}`);
  };

  textChange = (e) => {
    this.setState({quote: e.target.value});
  }
  
  render() {
    return (
      <div>
        <form className = "mt-4" onSubmit = {this.searchOutput}>
          <div className = "input-group">
            <input 
              onChange = {this.textChange} 
              className = "form-control form-control-lg" 
              placeholder = "example: AAPL" type = "text" 
              name = "getQuote" 
            />
            <div className = "input-group-append">
              <button className = {classNames({
                'btn btn-secondary': true,
                'btn btn-info': this.state.quote
              })} disabled = {!this.state.quote}>Get Info</button>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default Search;