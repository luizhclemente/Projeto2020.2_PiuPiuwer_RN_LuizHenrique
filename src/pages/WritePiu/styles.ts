import styled from 'styled-components/native';

export const HeaderWritePiuPage = styled.View`
  flex-direction: row;
  
  justify-content: space-between;

  padding-top: 50;
  padding-bottom: 10;
  padding-left: 18;
  padding-right: 18;
`

export const PiuBtn = styled.TouchableOpacity`
  /* background: #0000FF; */

  border: 2px solid #FB4C64;
  border-radius: 20;

  align-items: center;
  justify-content: center;

  width: 70;
  height: 35;

`

export const TextBtn = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: #FB4C64;
`

export const WritePiuContainer = styled.View`
  flex-direction: row;

  margin-left: 18;
  margin-right: 18;
  margin-top: 20;

  align-items: center;
`

export const WritePiuInput = styled.TextInput`
  font-family: "Montserrat_400Regular";

  font-size: 17;

  width: 80%;

  padding-right: 20;
`

export const AvatarImg = styled.Image`
  width: 60;
  height: 60;
  
  margin-right: 10;

  border-radius: 50;
`

export const IconsContainer = styled.View`
  flex-direction: row;

  justify-content: space-around;

  align-items: flex-end;

  margin-bottom: 20;
`

export const IconImage = styled.Image`
  width: 30;
  height: 30;
`
