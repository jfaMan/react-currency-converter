import React, { useEffect } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';


const App = () => {

  useEffect(() => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=');
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
