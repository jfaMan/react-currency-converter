import React from 'react';

const Converter = () => {
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
              <input className="input" type="text" id="amount"/>
            </div>
            <div className="col-sm-3">
              <select className="input" name="currencies" id="currencies">
                <option value="AUD">🦘AUD</option>
              </select>
            </div>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-3">
              <select className="input" name="currencies" id="currencies">
                <option value="AUD">🦘AUD</option>
              </select>
            </div>
          </div>
        </div>
        <div className="converter-bottom">
          <div className="results">
            <h4>Results go here</h4>
          </div>
          <button className="btn btn-primary">Convert</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Converter;
