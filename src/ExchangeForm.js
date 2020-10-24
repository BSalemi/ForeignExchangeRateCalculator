import React from 'react';
import {EXCHANGE_URL} from './assets/constants.js'
import swapIcon from './assets/swap.png'

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

    setCurrencies = (e) => {
        this.setState({
            ...this.state,
            [e.target.parentElement.name]: e.target.value
        })
    }

    updateAmount = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    calculateExchangeRate = (e) => {
        e.preventDefault()
        const {baseCurrency, returnCurrency, amount} = this.state,
              {setConvertedAmount} = this.props

        if(!baseCurrency || !returnCurrency || !amount){
            alert("Please select both a base and return currency and enter an amount.")
        }  else {
            fetch(EXCHANGE_URL + baseCurrency)
            .then(res => res.json())
            .then(data => {
                let converted = (amount * data.rates[returnCurrency]),
                    num = converted.toFixed(2)
                setConvertedAmount(num, returnCurrency)
            })
        }
    }

    swapCurrencies = (e) => {
        const {baseCurrency, returnCurrency} = this.state
        e.preventDefault()
        this.setState({
            ...this.state,
            baseCurrency: returnCurrency,
            returnCurrency: baseCurrency
        })
        alert("Currencies swapped! Click 'Convert Amount'.")
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
                <input placeholder="Amount" type="number" min="0" step="any" name="amount" value={this.state.amount}  onChange={e => this.updateAmount(e)}/>
                <label>Convert To:</label>
                <select name="returnCurrency">
                    {this.generateCurrencyOptions(currencyNames)}
                </select>
                <div className="containerDiv">
                    <button className="convertButton" onClick={e => this.calculateExchangeRate(e)} >
                        Convert Amount
                    </button>
                    <img src={swapIcon} alt="swap currency button" className="swapButton" onClick={e => this.swapCurrencies(e)}/>
                </div>
            </form>
        )
    }
}


export default ExchangeForm 