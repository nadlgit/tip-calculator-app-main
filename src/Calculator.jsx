import React from 'react';
import BillAmount from './BillAmount';
import TipSelection from './TipSelection';
import NumberPeople from './NumberPeople';
import Display from './Display';

function Calculator() {
  const initialState = {
    billAmount: null,
    tipPercent: null,
    nbPeople: null,
    tipPart: 0,
    totalPart: 0,
    isEmpty: true
  }
  const [state, setState] = React.useState(initialState);

  // Handling state update
  function calculate({newBillAmount, newTipPercent, newNbPeople}) {
    const newState = {...state};
    newState.isEmpty = false;
    newState.billAmount = newBillAmount ?? state.billAmount;
    newState.tipPercent = newTipPercent ?? state.tipPercent;
    newState.nbPeople = newNbPeople ?? state.nbPeople;    
    const totalTip = newState.billAmount * newState.tipPercent / 100.0; 
    newState.tipPart = (newState.nbPeople > 0) ? (totalTip / newState.nbPeople) : 0;
    newState.totalPart = (newState.nbPeople > 0) ? ((newState.billAmount + totalTip) / newState.nbPeople) : 0;
    setState(newState);
  }
  const handleBillAmount = (value) => calculate({newBillAmount: value});
  const handleTipPercent = (value) => calculate({newTipPercent: value});
  const handleNbPeople = (value) => calculate({newNbPeople: value});

  // Handling form reset
  let tipSelectionResetFunc;
  function setTipSelectResetFunc(func) {
    tipSelectionResetFunc = func;
  }
  function resetForm() {
    setState(initialState);
    tipSelectionResetFunc();
  }

  return (
    <form id='calculator'>
      <BillAmount onValueChange={handleBillAmount} />
      <TipSelection onValueChange={handleTipPercent} resetFunc={setTipSelectResetFunc} />
      <NumberPeople onValueChange={handleNbPeople} />
      <Display tipPart={state.tipPart} totalPart={state.totalPart} onReset={resetForm} isEmpty={state.isEmpty} />
    </form>
  );
}

export default Calculator;
