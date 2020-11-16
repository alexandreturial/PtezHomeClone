import React from 'react';

import { ButtonContainer } from './styles';

interface IButtonProps{
  color: string;
  textColor: string;

}

const Button: React.FC<IButtonProps> = ({children, color, textColor}) => {
  return (
      <ButtonContainer color={color} TextColor={textColor}>
        {children}
      </ButtonContainer>
  );
}

export default Button;