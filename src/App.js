import React from 'react';
import {BASE_URL} from './constants.js'


class App extends React.Component{

  state = {
    currencyNames: [],
    convertedAmount: null,
    returnRate: null
  }

  render(){
    return(
      <div className="app">
        <h4>Foreign Exchange Rate Calculator</h4>
      </div>
    )
  }
}
export default App;
