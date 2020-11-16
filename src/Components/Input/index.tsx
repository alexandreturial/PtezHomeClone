import React, { SelectHTMLAttributes } from 'react';

 import { 
   InputContainer 
  
} from './styles';

interface IInputProps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  
};


const Input: React.FC<IInputProps> = ({name, ...rest}) => {
  return (
    <InputContainer type="text" placeholder="O que você procura?"/>
  );
}

export default Input;