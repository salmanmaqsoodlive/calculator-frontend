import React, { useEffect, useState } from 'react';
import './calculator.css'
import History from './History';
import CurrencySwitch from './CurrencySwitch';
import CustomInput from '../input/CustomInput';
import axios from 'axios';

const Calculator = () => {
  const [value, setValue] = useState({
    num1: '',
    num2: ''
  });

  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState({});
  const [currency, setCurrency] = useState('USD');


  useEffect(() => {
    fetchHistory()
  }, [])

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    let payload = {
      "num1": value.num1,
      "num2": value.num2,
      "operation": operation,
      "symbol": currency === 'USD' ? '$' : '€',
      "userId": user.uid
    }
    const response = await axios.post(process.env.REACT_APP_BASE_URL + '/calculate', payload)

    setResult(response.data.result);

    //Reset the values
    resetValues()

  };


  const fetchHistory = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    let payload = {

      "userId": user.uid
    }
    const response = await axios.post(process.env.REACT_APP_BASE_URL + '/history', payload)

    setHistory(response.data?.history)
  }

  const resetValues = () => {

    setValue({ num1: '', num2: '' });
  }

  const handleInputChange = (e) => {
    setValue(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }




  return (
    <div>
      <h1>Calculator App</h1>
      <div className='result'>Result: <span>{result !== '' && (currency === 'USD' ? '$' : '€')} {result}</span></div>
      <CustomInput name="num1" className='input-value' type="number" value={value.num1} onChange={(e) => handleInputChange(e)} />
      <select className='select-value' onChange={(e) => handleOperation(e)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <CustomInput name="num2" className='input-value' type="number" value={value.num2} onChange={(e) => handleInputChange(e)} />
      <CurrencySwitch currency={currency} setCurrency={setCurrency} />
      <button className='button-value' onClick={calculateResult}>=</button>
      <History history={history} />
    </div>
  );
};

export default Calculator;
