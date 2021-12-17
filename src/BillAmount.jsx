import React from 'react';

const BillAmount = ({onValueChange}) => {
  const handleChange = (evt) => {
    const value = Number(evt.target.value).valueOf();
    onValueChange(value >= 0 ? value : 0);
  }
  const inputName = 'amount';
  return (
    <div id='bill-amount'>
      <label htmlFor={inputName} className='section-title'>Bill</label>
      <input name={inputName}
             id={inputName}
             type='number'
             inputMode='numeric'
             placeholder='0'
             onChange={handleChange}
             className='calc-input'
      />
    </div>
  );
}

export default BillAmount;
