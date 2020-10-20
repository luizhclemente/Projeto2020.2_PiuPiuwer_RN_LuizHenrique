import styled from 'styled-components/native';

interface UsernameText {
  color: string;
}

export const UserPiuContainer = styled.View`

  flex-direction: row;
  /* align-items: center; */
  
  margin-left: 11;
  margin-right: 11;
  margin-top: 15;
  padding-top: 8;
  padding-left: 8;
  padding-bottom: 8;

  elevation: 5;

  width: 91%;

  /* height: 100%; */

  border-top-left-radius: 20;
  border-bottom-right-radius: 20;

  background: #fafafc;

`

export const UserImage = styled.Image`
  width: 60;
  height: 60;

  border-radius: 50;
`

export const PiuContentContainer = styled.View`
  /* flex-direction: column; */
  width: 90%;
`

export const InfoUserContainer = styled.View`
  flex-direction: row;
  padding-left: 5;

`

export const Username = styled.Text<UsernameText>`
  font-family: 'Montserrat_500Medium';
  font-size: 11;
  color: ${(props) => props.color};

  padding-left: 5;
`

export const TextPiuContainer = styled.View`
  /* flex: 1; */
  width: 90%;
  
  padding-left: 10;
  margin-top: 7;


  padding-right: 15;
`

export const TextPiu = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 12;

  /* width: 0; */
  /* flex-grow: 1; */
  /* flex: 1; */
`

export const PiuIconsContainer = styled.View`
  width: 90%;
  
  flex: 0;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 10;
  padding-right: 15;
  padding-top: 5;
`

export const LikeBtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextLike = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 12;

  margin-left: 6;
  margin-top: 7;
`

export const IconsPiu = styled.Image`
  width: 20;
  height: 20;

  margin-top: 8;
`