import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('AUD');
  const [result, setResult] = useState('');
  useEffect(() => {
    fetch('https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=12c4f2cfb0dacfe008d3')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const rate = data;
        document.querySelector('input').innerHTML = rate;
      });
  }, []);

  return (
    <div>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
