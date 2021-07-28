import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [result, setResult] = useState('');
  const [currencies, setCurrencies] = useState(['AUD', 'USD', 'GBP', 'JPY', 'EUR']);
  // useEffect(() => {
  //   fetch('https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=12c4f2cfb0dacfe008d3')
  //     .then(response => response.json())
  //     .then(data => {
  //       const rate = data;
  //       document.querySelector('input').innerHTML = rate;
  //     });
  // }, []);

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

export default App;
