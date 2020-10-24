import React from 'react';
import {EXCHANGE_URL} from './assets/constants.js'

class ExchangeForm extends React.Component {

    state = {
        baseCurrency: null,
        returnCurrency: null,
        amount: 0
    }


    generateCurrencyOptions = (currencyNames) => {
        const currencyOptions = currencyNames.map((name) => {
            return <option onClick={e => this.setCurrencies(e)} value={name}> {name} </option>
        })
        return currencyOptions
    }

    render(){
        const {currencyNames} = this.props

        return(
            <form className="exchangeForm">
                <label>Base Currency:</label>
                <select name="baseCurrency">
                    {this.generateCurrencyOptions(currencyNames)}
                </select>
                <label>Amount:</label>
                <input placeholder="Amount" type="number" min="0" step="any" name="amount" value={this.state.amount}/>
                <label>Convert To:</label>
                <select name="returnCurrency">
                    {this.generateCurrencyOptions(currencyNames)}
                </select>
                <div className="containerDiv">
                    <button className="convertButton" >Convert Amount</button>
                </div>
            </form>
        )
    }
}


export default ExchangeForm 