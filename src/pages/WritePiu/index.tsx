// IMPORTS
// libs
import React, { FormEvent, useCallback, useState } from 'react';

// components
import { TouchableOpacity, View, Text, Modal } from 'react-native';

// styled components
import { 
  AvatarImg,
  CharacterCountText,
  HeaderWritePiuPage,  
  IconImage,  
  IconsContainer, 
  ModalErrorWritePiuView, 
  PiuBtn, 
  TextBtn, 
  TextModal, 
  WritePiuContainer, 
  WritePiuInput } from './styles';

// images 
import { AntDesign } from '@expo/vector-icons';
import Luiz from '../../assets/images/luiz.jpg';
import ImageIcon from '../../assets/images/image.png';
import VideoIcon from '../../assets/images/video.png';
import SmileIcon from '../../assets/images/smile.png';

// hooks
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { PiuData } from '../../components/Piu';


function WritePiu() {
   
  const {navigate} = useNavigation();
  const {user}:any = useAuth()
  const [piuText, setPiuText] = useState('');
  const [countChar, setCountChar] = useState(0);
  const [colorCounter, setColorCounter] = useState('#f1f1f1');
  const [colorInputPiu, setColorInputPiu] = useState('#000');
  const [isModalVisible, setIsModalVisible] = useState(false);


  const countCharacteres = useCallback((text:string) => {
    console.log(colorCounter);
    if(text.length == 0) {
      setColorCounter('#f1f1f1');
    }
    setPiuText(text);
    setCountChar(text.length);
    if(text.length > 140) {
      setColorCounter('#f00');
      setColorInputPiu('#f00')
    } else if(text.length > 0 && text.length <= 140) {
      setColorCounter('#000');
      setColorInputPiu('#000');
    }
  },[setPiuText, setCountChar, setColorCounter, setColorInputPiu])


  const handleBackToFeed = useCallback(() => {
  navigate('Feed');
  },[]);
    

  const postPiu = useCallback(async () => {
    if(piuText.length <= 140) {
      await api.post('/pius/',
      {
        usuario: user.id,
        texto:piuText,
      });
      setPiuText('');
      setColorCounter('#f1f1f1');
      navigate('Feed');
    } else {
      setIsModalVisible(true);
    }; 
  }, [api, user, piuText, setPiuText, setIsModalVisible])
  
  return(
    <View style={{justifyContent:'space-between',height: '100%'}}>
        <Modal 
          animationType={'slide'}
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ModalErrorWritePiuView>
            <View style={{width:'100%', justifyContent:'flex-start', marginBottom:7}}>
              <TouchableOpacity onPress={() => {setIsModalVisible(false)}}>
                <AntDesign name="closecircleo" size={20} color="#000" />
              </TouchableOpacity>
            </View>
              <TextModal>Seu Piu está ultrapassando o limite de 140 caracteres ⚆ _ ⚆</TextModal>
          </ModalErrorWritePiuView>
        </Modal>
      <View >
      <HeaderWritePiuPage>
        <TouchableOpacity onPress={handleBackToFeed}>
          <AntDesign name="closecircleo" size={30} color="#5b5bff" />
        </TouchableOpacity>
        <PiuBtn onPress={postPiu}>
          <TextBtn>Piar</TextBtn>
        </PiuBtn>
      </HeaderWritePiuPage>
      <WritePiuContainer>
        <AvatarImg source={{uri: user.foto}}/>
        <WritePiuInput 
        placeholder="Você já piou hoje ?"
        autoFocus={true}
        value={piuText}
        onChangeText={(text) => (countCharacteres(text))}
        color={colorInputPiu}
        multiline={true}
        textAlignVertical='top'
        />
      </WritePiuContainer>
      </View>
      <IconsContainer>
        <CharacterCountText color={colorCounter}>{countChar}/140</CharacterCountText>
        <IconImage source={SmileIcon} />
        <IconImage source={ImageIcon} />
        <IconImage source={VideoIcon} />
      </IconsContainer>
    </View>

  );
}

export default WritePiu;