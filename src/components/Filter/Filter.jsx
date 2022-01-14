import React from 'react';
import { Label, Input } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
}

export default Filter;
