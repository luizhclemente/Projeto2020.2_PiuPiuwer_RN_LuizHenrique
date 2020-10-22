import styled from 'styled-components/native';

interface UsernameText {
  color: string;
}

export const UserPiuContainer = styled.View`

  flex-direction: row;
  /* align-items: center; */
  
  margin-left: 11px;
  margin-right: 11px;
  margin-top: 15px;
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 8px;

  elevation: 5;

  width: 91%;

  /* height: 100%; */

  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  background: #fafafc;

`

export const UserImage = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 50px;
`

export const PiuContentContainer = styled.View`
  /* flex-direction: column; */
  width: 90%;
`

export const InfoUserContainer = styled.View`
  flex-direction: row;
  padding-left: 5px;

`

export const Username = styled.Text<UsernameText>`
  font-family: 'Montserrat_500Medium';
  font-size: 11px;
  color: ${(props) => props.color};

  padding-left: 5px;
`

export const TextPiuContainer = styled.View`
  /* flex: 1; */
  width: 90%;
  
  padding-left: 10px;
  margin-top: 7px;


  padding-right: 15px;
`

export const TextPiu = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 12px;

  /* width: 0; */
  /* flex-grow: 1; */
  /* flex: 1; */
`

export const PiuIconsContainer = styled.View`
  width: 90%;
  
  flex: 0;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 10px;
  padding-right: 15px;
  padding-top: 5px;

  margin-top: 8px;
`

export const LikeBtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextLike = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 12px;

  margin-left: 6px;
`

// export const IconsPiu = styled.Image`
//   width: 20px;
//   height: 20px;

//   margin-top: 8px;
// `