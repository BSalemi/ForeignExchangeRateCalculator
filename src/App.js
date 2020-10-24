import React from 'react';
import {BASE_URL} from './assets/constants.js'

import ExchangeForm from './ExchangeForm.js'


class App extends React.Component{

  state = {
    currencyNames: [],
    convertedAmount: null,
    returnRate: null
  }

  componentDidMount(){
    this.fetchCurrencyNames()
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

  setConvertedAmount = (amount, rate) => {
    this.setState({
      ...this.state,
      convertedAmount: amount,
      returnRate: rate
    })
  }
  
  render(){
    const {currencyNames, convertedAmount, returnRate} = this.state
    
    return(
      <div className="App">
        <h4>Foreign Exchange Rate Calculator</h4>
        <ExchangeForm currencyNames={currencyNames} setConvertedAmount={this.setConvertedAmount}/> 
        <strong className="results">{convertedAmount && returnRate ? `${convertedAmount} ${returnRate}`: null}</strong>
      </div>
    )
  }
}
export default App;
