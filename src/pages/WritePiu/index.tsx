// IMPORTS
// libs
import React, { FormEvent, useCallback, useState } from 'react';

// components
import { TouchableOpacity, View } from 'react-native';

// styled components
import { 
  AvatarImg,
  HeaderWritePiuPage,  
  IconImage,  
  IconsContainer, 
  PiuBtn, 
  TextBtn, 
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
 function handleBackToFeed(){
    navigate('Feed');
  };

  const {navigate} = useNavigation();
  const {user}:any = useAuth()
  const [piuText, setPiuText] = useState('');

  const postPiu = useCallback(async () => {
    console.log(piuText);
    if(piuText.length < 140) {
      await api.post('/pius/',
      {
        usuario: user.id,
        texto:piuText,
      });
      setPiuText('');
      navigate('Feed');
    };
  }, [api, user, piuText, setPiuText])
  
  return(
    <View style={{justifyContent:'space-between', height: '100%'}}>
      <View>
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
        onChangeText={(text) => (setPiuText(text))}
        />
      </WritePiuContainer>
      </View>
      <IconsContainer>
        <IconImage source={SmileIcon} />
        <IconImage source={ImageIcon} />
        <IconImage source={VideoIcon} />
      </IconsContainer>
    </View>

  );
}

export default WritePiu;