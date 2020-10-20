// IMPORTS
// lib
import React, { useCallback, useState, useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {ValidationError} from 'yup';

// images
import logoIconLogin from '../../assets/images/parrot-logo.png';

// contexto
import { useAuth } from '../../hooks/useAuth';

// styled-components
import {
  LoginDiv,
  InputContainer,
  LoginButton,
  TextBtn,
  TextTitle,
  NameApp,
  LogoLogin,
  TextError} from './styles';

// components
import InputArea from '../../components/InputArea';


interface Errors {
  [key: string]: string;
}

function Login() {
  const [cred, setCred] = useState({
    username: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const getValidationErrors = useCallback((error: ValidationError): Errors => {
    const validationErrors: Errors = {};
  
    error.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
  
    return validationErrors;
  },[]);

  const {SignIn} = useAuth();

  const {navigate} = useNavigation();

  const handleLogin = useCallback(async () => {
    try{
      const esquema = Yup.object().shape({
        username: Yup.string().required("Username obrigatório"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await esquema.validate(cred, {abortEarly: false});

      await SignIn(cred);
    } catch (err) {
      if (err instanceof Yup.ValidationError){
        const erro = getValidationErrors(err);
        if(erro.username && !erro.password){
          setErrorMessage('Sem usuário');
        }
        if(erro.password && !erro.username){
          setErrorMessage('Sem senha');
        }
        if(erro.password && erro.username){
          setErrorMessage('Sem usuario e senha');
        }
      } else {
        setErrorMessage('');
      }
    };
    
  },[cred, setErrorMessage, SignIn])

  return (
    <LoginDiv>
      <LogoLogin source={logoIconLogin} />
      <TextTitle>Entrar no <NameApp>Piupiuwer</NameApp></TextTitle>
      <InputContainer>
        <InputArea
          name="login"
          isPassword={false}
          functionOnChange={text => 
            setCred({
              username: text,
              password: cred.password
            })
          }
        />
        <InputArea
          name="senha"
          isPassword={true}
          functionOnChange={text => 
            setCred({
              username: cred.username,
              password: text
            })
          }
        />
        <TextError>{errorMessage}</TextError>
        <LoginButton onPress={handleLogin}>
          <TextBtn>Entrar</TextBtn>
        </LoginButton>
      </InputContainer>

    </LoginDiv>
  );
}

export default Login