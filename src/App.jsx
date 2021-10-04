import React, { useState, useEffect } from 'react';
import Converter from './components/Converter';
import Header from './components/Header';
// import data from './currencies.json'; // IF YOU WANT TO USE THE MOCK API
require('dotenv').config();

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [fetchError, setFetchError] = useState(false);

  const api = process.env.API_KEY;

  useEffect(() => {
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${api}`)
      .then((response) => { return response.json(); })
      .then((data) => {
        const newArray = Object.keys(data.results);
        setCurrencies(newArray.sort());
        setFetchError(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFetchError(true);
      });
  }, []);

  const getNewAmount = (newAmount) => {
    setInputAmount(newAmount);
  };

  const changeSelectedCurrency = (id, currencyValue) => {
    id === 'selectedFrom' ? setSelectedFrom(currencyValue) : setSelectedTo(currencyValue);
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
        api={api}
        fetchError={fetchError}
      />
    </div>
  );
};
export default App;
