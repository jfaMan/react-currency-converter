import React from 'react';

const DropdownList = (props) => {
  const {currencies} = props;
  return (
    <select className="input" name="currencies" id="currencies">
      {currencies.map(currency => <option value={currency} key={currency}>{currency}</option> )}
    </select>
  );
};

export default DropdownList;
