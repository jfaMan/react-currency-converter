import React from 'react';

const DropdownList = (props) => {
  const { currencies, value, id, onChange } = props;
  return (
    <select className="input" name="currencies" value={value} onChange={onChange} id={id}>
      <option value="">-- Select a currency --</option>
      {console.log('Rendering from Dropdown Component!')}
      {currencies ? currencies.map(currency => <option value={currency} key={currency}>{currency}</option> ) : console.log('Currencies state not yet set!')}
    </select>
  );
};

export default DropdownList;
