import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('AUD');
  const [result, setResult] = useState('');
  useEffect(() => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4f1daa95f33a32d1c3f5a99b3d7c4ecf')
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
