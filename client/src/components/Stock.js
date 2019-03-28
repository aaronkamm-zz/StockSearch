import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import StockComponent from './StockComponent';

const STOCK_QUERY = gql`
  query StockQuery($quote: String!){
    latest(quote: $quote) {
      symbol
      price
      high
      low
      latestDay
    }
  }
`

class Stock extends Component {
  render() {
    let { quote } = this.props.match.params;
    console.log(quote);
    
    return (
      <div>
        <Query query = {STOCK_QUERY} variables = {{quote}}>
          {
            ({loading, error, data}) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
            
              console.log(data)
              return (
                <React.Fragment>
                  <StockComponent latest = {data.latest} />
                </React.Fragment>
              )
              
            }
          }
      </Query>
    </div> 
  )
  } 
}
export default Stock;