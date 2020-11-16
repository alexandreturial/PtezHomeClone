import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    opitions?: Array<{
        value: string;
        label:string;
    }>
};

const Select: React.FC<SelectProps> = ({label , name, opitions, ...rest}) => {
  return (
    <Container>
      <select id="teste" {...rest}>
          <option defaultValue="" value="" hidden>{label}</option>
          <option key="1" value="1">test1</option>
      </select>
    </Container>
  );
}

export default Select;