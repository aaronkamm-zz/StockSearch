import React from 'react';

const StockComponent = ({latest: {symbol}}) => {
  return(
    <div>
      <h1>{symbol}</h1>
    </div>
  )
}

export default StockComponent;