import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DropdownList from './DropdownList';

const Converter = (props) => {
  const {
    inputAmount, getNewAmount, currencies, selectedFrom, selectedTo, changeSelectedCurrency, calculateConversion, result, api, fetchError
  } = props;

  const handleChange = (event) => {
    const { value, type, id } = event.target;
    if (type === 'text') {
      const input = value.replace(/\D/, '');
      getNewAmount(input);
    } else {
      changeSelectedCurrency(id, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://free.currconv.com/api/v7/convert?q=${selectedFrom}_${selectedTo}&compact=ultra&apiKey=${api}`)
      .then((response) => { return response.json(); })
      .then((data) => {
        const fromTo = `${selectedFrom}_${selectedTo}`;
        const conversionFull = data[fromTo] * inputAmount;
        const conversionRounded = Math.round((conversionFull + Number.EPSILON) * 10000) / 10000;
        calculateConversion(conversionRounded);
      });
  };

  const errorMessageOrResult = () => {
    if (fetchError) {
      return (
        <i>
          *API server is currently down. Unable to fetch currencies. Check server status
          <a href="https://www.currencyconverterapi.com/server-status" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}> here</a>
          .
        </i>
      );
    }
    return result && `${selectedFrom} ${inputAmount} =`;
  };

  return (
    <div className="converter">
      <div>
        <h2>Enter an amount and select your currencies</h2>
        <div className="container row converter-main">
          <div className="child col-sm-5">
            <p htmlFor="amount">Amount</p>
          </div>
          <div className="child col-sm-3">
            <p htmlFor="currency-from">From</p>
          </div>
          <div className="child col-sm-1" />
          <div className="child col-sm-3">
            <p htmlFor="currency-to">To</p>
          </div>
          <div className="child col-sm-5">
            <input
              className="input"
              type="text"
              id="amount"
              value={inputAmount}
              placeholder="Enter an amount"
              onChange={handleChange}
            />
          </div>
          <div className="child col-sm-3">
            <DropdownList
              onChange={handleChange}
              currencies={currencies}
              value={selectedFrom}
              id="selectedFrom"
            />
          </div>
          <div className="child col-sm-1 arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="child col-sm-3">
            <DropdownList
              onChange={handleChange}
              currencies={currencies}
              value={selectedTo}
              id="selectedTo"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="row converter-bottom">
          <h4 className="col-sm-12">{errorMessageOrResult()}</h4>
          <h4 className="col-sm-5">{result && `${selectedTo} ${result}`}</h4>
          <h4 className="col-sm-4">{result && `(1 ${selectedFrom} = ${result / inputAmount} ${selectedTo})`}</h4>
          <div className="col-sm-3">
            {!fetchError ? <button className="btn btn-primary" type="submit">Convert</button> : <button disabled className="btn btn-primary" type="submit">Convert</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Converter;
