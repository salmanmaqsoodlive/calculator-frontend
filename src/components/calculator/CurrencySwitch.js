import React from 'react';
import "./currency_switch.css"

const CurrencySwitch = ({ currency, setCurrency }) => {
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <div>
            <label className='currency-select' htmlFor="currency">Select Currency:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    );
};

export default CurrencySwitch;