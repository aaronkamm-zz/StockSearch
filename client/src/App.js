import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Search from './components/Search';
import Stock from './components/Stock';
import {BrowserRouter, Route} from "react-router-dom";


const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <BrowserRouter>
          <div className="container">
            <h1>Stock Search</h1>
            <Route exact path = "/" component = {Search} />
            <Route exact path = "/:quote" component = {Stock} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
