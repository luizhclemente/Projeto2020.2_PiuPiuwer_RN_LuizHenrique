import styled from 'styled-components/native';


export const LoginDiv = styled.View`
  /* margin-top: 100; */
  height: 100%;

  align-items: center;
  justify-content: center;
`

export const LogoLogin = styled.Image`
  width: 90px;
  height: 90px;
`

export const TextInputLogin = styled.TextInput`
  font-family: "Montserrat_400Regular"
`

export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  background: #E5E5E5;
  
  margin-top: 60px;
  
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  elevation: 10;
`

export const LoginButton = styled.TouchableOpacity`
  background: #0000FF;

  border-radius: 20px;

  align-items: center;
  justify-content: center;

  width: 210px;
  height: 35px;

  margin-top: 30px;
`

export const TextBtn = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: #FFF;
`

export const TextTitle = styled.Text`
  font-family: "Montserrat_400Regular";
  font-size: 18px;

  padding-top: 20px;
`

export const NameApp = styled.Text`
  font-family: "Montserrat_400Regular";
`

export const TextError = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: red;
`
