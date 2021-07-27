import React, { useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App = () => {
  useEffect(() => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4f1daa95f33a32d1c3f5a99b3d7c4ecf')
      .then(response => response.json())
      .then(data => console.log(data.rates));
  }, []);

  return (
    <div>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
