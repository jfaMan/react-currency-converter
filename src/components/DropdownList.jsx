import React from 'react';

const DropdownList = (props) => {
  const {currencies, value, id, onChange} = props;
  return (
    <select className="input" name="currencies" value={value} onChange={onChange} id={id}>
      <option value="">-- Select a currency --</option>
      {currencies.map(currency => <option value={currency} key={currency}>{currency}</option> )}
    </select>
  );
};

export default DropdownList;
