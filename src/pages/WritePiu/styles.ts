import styled from 'styled-components/native';

interface CounterCharacterTextProp {
  color: string;
};


export const HeaderWritePiuPage = styled.View`
  flex-direction: row;
  
  justify-content: space-between;

  padding-top: 50px;
  padding-bottom: 10px;
  padding-left: 18px;
  padding-right: 18px;
`

export const PiuBtn = styled.TouchableOpacity`
  background: #FB4C64;

  /* border: 2px solid #FB4C64; */
  border-radius: 20px;

  align-items: center;
  justify-content: center;

  width: 70px;
  height: 35px;

`

export const TextBtn = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: #fff;
`

export const WritePiuContainer = styled.View`
  flex-direction: row;

  margin-left: 18px;
  margin-right: 18px;
  margin-top: 20px;

  /* height: 200px; */

  justify-content: flex-start;
  align-items: center;
`

export const WritePiuInput = styled.TextInput<CounterCharacterTextProp>`
  
  padding-top: 0;
  padding-bottom: 0;

  font-family: "Montserrat_400Regular";

  font-size: 17px;

  width: 80%;
  /* height: 200px; */

  padding-right: 20px;

  color: ${props => props.color};
`

export const AvatarImg = styled.Image`
  width: 60px;
  height: 60px;
  
  margin-right: 10px;

  border-radius: 50px;
`

export const IconsContainer = styled.View`
  flex-direction: row;

  justify-content: space-around;

  align-items: flex-end;

  margin-bottom: 20px;
`

export const IconImage = styled.Image`
  width: 25px;
  height: 25px;
`

export const CharacterCountText = styled.Text<CounterCharacterTextProp>`
  font-family: 'Montserrat_500Medium';
  color: ${props => props.color}; 
`

export const ModalErrorWritePiuView = styled.View`

  height: 120px;
  width: 80%;

  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;

  align-items: center;
  justify-content: center;

  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  position: absolute;
  top: 2%;
  left: 10%;

  background: rgba(196, 196, 196,0.9);
`

export const TextModal = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 15px;

  text-align: center;

  color: #FB4C64;

`