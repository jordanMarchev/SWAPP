import React from 'react';

import './input.scss';

const Input = ({ value, placeholder, inputType, onChange }) => {
  return (
    <div className='input'>
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
