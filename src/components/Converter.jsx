import React from 'react';

const Converter = (props) => {

  const { inputAmount, getNewAmount, currencies } = props;

  const handleChange = (event) => {
    const input = event.currentTarget.value;
    console.log(event.currentTarget.value);
    getNewAmount(input);
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
              <select className="input" name="currencies" id="currencies">
                {currencies.map(currency => <option value={currency}>{currency}</option> )}
              </select>
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
            <select className="input" name="currencies" id="currencies">
                {currencies.map(currency => <option value={currency}>{currency}</option> )}
              </select>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="converter-bottom">
          <div className="results">
            <h4>Converted Amount: {inputAmount}</h4>
          </div>
          <button className="btn btn-primary" type="submit">Convert</button>
        </form>
      </div>
    </div>
  );
};

export default Converter;
