import React from 'react';
import DropdownList from './DropdownList';

const Converter = (props) => {

  const { inputAmount, getNewAmount, currencies, selectedFrom, selectedTo, changeSelectedCurrency } = props;

  const handleChange = (event) => {
    const { value, type, id } = event.target;
    if (type === "text") {
      const input = value;
      console.log(event.currentTarget.value);
      getNewAmount(input);
    } else {
      changeSelectedCurrency(id, value);
    }
  };

  const handleSubmit = () => {
      alert('TESTING');
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
              id='selectedFrom'
            />
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              <DropdownList
              onChange={handleChange}
              currencies={currencies}
              value={selectedTo}
              id='selectedTo'
            />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="converter-bottom">
          <div className="results">
            <h4>Conversion: {selectedFrom} {inputAmount} = {selectedTo}</h4>
          </div>
          <button className="btn btn-primary" type="submit">Convert</button>
        </form>
      </div>
    </div>
  );
};

export default Converter;
