import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [result, setResult] = useState('');
  const [currencies, setCurrencies] = useState();

  useEffect(() => {
    // const object = JSON.parse(mockApi).results;
    // const currencyArray = Object.keys(object);
    // console.log('Rendering from useEffect!')
    // setCurrencies(currencyArray.sort());
    // https://free.currconv.com/api/v7/currencies?apiKey=12c4f2cfb0dacfe008d3
    fetch('./currencies.json')
      .then(response => response.json())
      .then(data => {
        const newArray = Object.keys(data.results);
        setCurrencies(newArray.sort());
      });
  }, []);

  const getNewAmount = (newAmount) => {
    setInputAmount(newAmount);
  };

  const changeSelectedCurrency = (id, currencyValue) => {
    id === 'selectedFrom' ? setSelectedFrom(currencyValue) : setSelectedTo(currencyValue)
  };

  const calculateConversion = (conversion) => {
    setResult(conversion);
  };



  return (
    <div>
      <Header />
      <Converter
        inputAmount={inputAmount}
        getNewAmount={getNewAmount}
        currencies={currencies}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        changeSelectedCurrency={changeSelectedCurrency}
        result={result}
        calculateConversion={calculateConversion}
      />
    </div>
  );
};
// ['AUD', 'USD', 'GBP', 'JPY', 'EUR']
// https://free.currconv.com/api/v7/currencies?apiKey=12c4f2cfb0dacfe008d3
export default App;
