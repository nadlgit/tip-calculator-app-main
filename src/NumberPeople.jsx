import React from 'react';

const NumberPeople = ({onValueChange}) => {
  const handleChange = (evt) => {
    const value = Number(evt.target.value).valueOf();
    onValueChange((Number.isInteger(value) && (value > 0)) ? value : 0);
  }
  const inputName = 'people';
  return (
    <div id='number-people'>
      <label htmlFor={inputName} className='section-title'>Number of People</label>
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

export default NumberPeople;
