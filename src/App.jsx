import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';
// import data from './currencies.json'; // IF YOU WANT TO USE THE MOCK API

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [result, setResult] = useState('');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=12c4f2cfb0dacfe008d3')
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
export default App;
