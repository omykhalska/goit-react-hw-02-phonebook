import React from 'react';
import { CommonBtn } from './Button.styled';

function Button({ label, onClick = () => null, type = 'button' }) {
  return (
    <CommonBtn type={type} onClick={onClick}>
      {label}
    </CommonBtn>
  );
}

export default Button;
