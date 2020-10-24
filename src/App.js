import React from 'react';
import {BASE_URL} from './assets/constants.js'


class App extends React.Component{

  state = {
    currencyNames: [],
    convertedAmount: null,
    returnRate: null
  }


  fetchCurrencyNames = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      let currencyNamesArray = Object.keys(data.rates)
      this.setState({
        currencyNames: currencyNamesArray
      })
    })
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
