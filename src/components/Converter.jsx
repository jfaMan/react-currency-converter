import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DropdownList from './DropdownList';

const Converter = (props) => {
  const { inputAmount, getNewAmount, currencies, selectedFrom, selectedTo, changeSelectedCurrency, calculateConversion, result } = props;

  const handleChange = (event) => {
    const { value, type, id } = event.target;
    if (type === 'text') {
      const input = value;
      getNewAmount(input);
    } else {
      changeSelectedCurrency(id, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(inputAmount)) {
      fetch(`https://free.currconv.com/api/v7/convert?q=${selectedFrom}_${selectedTo}&compact=ultra&apiKey=12c4f2cfb0dacfe008d3`)
        .then(response => response.json())
        .then(data => {
          const fromTo = `${selectedFrom}_${selectedTo}`;
          calculateConversion(data[fromTo] * inputAmount);
        });
    } else {
      alert('ERROR! Incorrect input type. Please enter numbers only.')
    }
  };
  return (
    <div className="converter">
      <div>
        <h2>Enter an amount and select your currencies</h2>
        <div className="container converter-main">
          <div className="row">
            <div className="col-sm-5">
              <label htmlFor="amount">Amount</label>
            </div>
            <div className="col-sm-3">
              <label htmlFor="currency-from">From</label>
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              <label htmlFor="currency-to">To</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              <input
                className="input"
                type="text"
                id="amount"
                value={inputAmount}
                placeholder="Enter an amount.."
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-3">
              <DropdownList
                onChange={handleChange}
                currencies={currencies}
                value={selectedFrom}
                id="selectedFrom"
              />
            </div>
            <div className="col-sm-1 arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="col-sm-3">
              <DropdownList
                onChange={handleChange}
                currencies={currencies}
                value={selectedTo}
                id="selectedTo"
              />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="row converter-bottom">
          <h4 className="col-sm-9">{result ? `Conversion: ${selectedFrom} ${inputAmount} = ${selectedTo} ${result}` : ''}</h4>
          <div className="col-sm-3">
            <button className="btn btn-primary" type="submit">Convert</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// <h4 className="col-sm-2">Conversion:</h4>
// <h4 className="col-sm-2">{selectedFrom} {inputAmount}</h4>
// <h4 className="col-sm-1">=</h4>
// <h4 className="col-sm-4">{selectedTo} {result}</h4>

export default Converter;
