import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const StockComponent = ({latest: {symbol, price, high, low, latestDay}}) => (
  <div className = "card mt-4">
    <div className = "card-header">
      <h3>Info for {symbol} (as of <Moment format = "MMM Do, YYYY">{latestDay}</Moment>)</h3>
    </div>
      
    <div className = "card-body">
      <h4>Current Price: {price}</h4>
      <h4>High: {high}</h4>
      <h4>Low: {low}</h4>
      <Link className = "btn btn-warning mt-3" to = '/'>Back to Search</Link>
    </div>
  </div> 
);


export default StockComponent;