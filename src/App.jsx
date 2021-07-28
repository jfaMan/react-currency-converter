import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('AUD');
  const [result, setResult] = useState('');
  const [currencies, setCurrencies] = useState(['AUD', 'USD', 'GBP', 'JPY', 'EUR']);
  useEffect(() => {
    fetch('https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=12c4f2cfb0dacfe008d3')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const rate = data;
        document.querySelector('input').innerHTML = rate;
      });
  }, []);

  const getNewAmount = (newAmount) => {
      setInputAmount(newAmount);
  };
  return (
    <div>
      <Header />
      <Converter
        inputAmount={inputAmount}
        getNewAmount={getNewAmount}
        currencies={currencies}
      />
    </div>
  );
};

export default App;
