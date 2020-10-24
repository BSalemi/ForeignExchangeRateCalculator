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
        return
    }
}

export default ExchangeForm 