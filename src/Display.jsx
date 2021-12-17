import React from 'react';

const Display = ({tipPart, totalPart, onReset, isEmpty}) => {
  const resultList = [
    {title:'Tip Amount', value:tipPart},
    {title:'Total', value:totalPart}
  ];
  const formatAmount = (value) => '$' + Number(value).toFixed(2);
  return (
    <div id='display'>        
      {resultList.map((item) =>
        <div className='result' key={item.title}>
          <p className='result-title'>
            <span>{item.title}</span>
            / person
          </p>
          <p className='result-value'>{formatAmount(item.value)}</p>
        </div>
      )}
      <button type='reset'
              onClick={onReset}
              className={'reset-button' + (isEmpty ? '' : ' active')}
      >Reset</button>
    </div>
  );
}

export default Display;
