import React from 'react';

const TipSelection = ({onValueChange, resetFunc}) => {
  const buttonList = [
    {name:'tip5', value:5},
    {name:'tip10', value:10},
    {name:'tip15', value:15},
    {name:'tip25', value:25},
    {name:'tip50', value:50}
  ];
  const customEltName = 'tipCustom';
  const customEltInput = React.useRef();

  const [activeItem, setActiveItem] = React.useState('');
  resetFunc( () => setActiveItem('') );

  const handleTip = (evt) => {
    setActiveItem(evt.target.name);
    if (evt.target.name !== customEltName) {
      customEltInput.current.value = '';
    }
    const value = Number(evt.target.value).valueOf();
    onValueChange(((value > 0) && (value <= 100)) ? value : 0);
  }

  return (
    <div id='tip-selection'>
      <p className='section-title'>Select Tip %</p>
      <div id='tips'>        
        {buttonList.map((item) =>
          <button key={item.name}
                  name={item.name}
                  type='button'
                  value={item.value}
                  onClick={handleTip}
                  className={'tip-item tip-button' + ((activeItem === item.name) ? ' active' : '')}
          >{item.value}%</button>
        )}
        <input name={customEltName}
              ref={customEltInput}
              type='number'
              inputMode='numeric'
              placeholder='Custom'
              onChange={handleTip}
              className={'calc-input tip-item tip-custom' + ((activeItem === customEltName) ? ' active' : '')}
        />
      </div>
    </div>
  );
}

export default TipSelection;
