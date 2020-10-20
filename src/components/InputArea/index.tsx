import React, { InputHTMLAttributes } from 'react';
import { InputAreaDiv, TextInputLogin, TitleInputLogin } from './styles';
import { TextInput, Text } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';

interface InputAreaProps{
  name?: string;
  isPassword: boolean;
  functionOnChange(text: string): void;
}

const InputArea: React.FC<InputAreaProps> = ({ name, isPassword, functionOnChange }) => {
  return (
    <InputAreaDiv>
      <TitleInputLogin>
        {name}
      </TitleInputLogin>
      {/* arrumar a fonte que fica diferente com o secureTextEntry true */}
      <TextInputLogin  
      secureTextEntry={isPassword}
      onChangeText={functionOnChange}
      />
    </InputAreaDiv>
  )
}

export default InputArea;