import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [result, setResult] = useState('');
  const [currencies, setCurrencies] = useState('');
  useEffect(() => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=12c4f2cfb0dacfe008d3')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      // setCurrencies(Object.keys(data.results));
    }, []);
  });

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
export default App;
