// IMPORTS
// libs
import React, { useCallback, useMemo, useState } from 'react';
import { View, Image } from 'react-native';
import {formatDistance} from 'date-fns';
import { Feather, AntDesign } from '@expo/vector-icons';


// styled components
import { 
  InfoUserContainer, 
  LikeBtnContainer, 
  PiuContentContainer, 
  PiuIconsContainer, 
  TextLike, 
  TextPiu, 
  TextPiuContainer, 
  UserImage, 
  Username, 
  UserPiuContainer 
} from './styles'

// images
import Luiz from '../../assets/images/luiz.jpg';
import ReplyIcon from '../../assets/images/message-square.png';
import LikeIcon from '../../assets/images/like.png'
import FavoriteIcon from '../../assets/images/star.png'
import TrashIcon from '../../assets/images/trash.png'
import { useAuth } from '../../hooks/useAuth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectedLikeIcon from '../../assets/images/likeselected.png';

// services
import api from '../../services/api';

// interfaces
export interface PiuData {
  usuario: Usuario;
  likers: [];
  favoritado_por: [];
  texto: string;
  horario: string;
  id: number;
}

export interface Usuario {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  sobre: string;
  foto: string;
}

interface PiuItemProps {
  piuData: PiuData;
}


const Piu: React.FC<PiuItemProps> = ({ piuData }) => {

  const {user, token}:any = useAuth();

  const [likes, setLikes] = useState<Array<Usuario>>(piuData.likers);

  const today = new Date();
  const distance = formatDistance(
    new Date(piuData.horario),
    today
  )

  const deletePiu = useCallback(async () => {
    console.log("Antes do delete: ",piuData.id);
    if (piuData.usuario.id === user.id) {
      const response = await api.delete(`/pius/${piuData.id}`);
      console.log({data: response});
    };
  }, [piuData, api, user])

  const usuarioDeuLike = useMemo(() => {
    // Se no array de likes possuir o user, o piuDataLikers retornará uma array vazio
    // e portanto a função usuarioDeuLike retornará false. Caso tenha dado like, 
    // retorna true
    const piuDataLikers = likes.filter((e: Usuario) => e.id === user.id);
    return piuDataLikers.length > 0;
  }, [likes, user])

  const likePiu = useCallback(async () => {
    // console.log(piuData.usuario.foto)
    if (usuarioDeuLike) {
      // deslike -> likesCopy retorna um array dos likers sem o user
      const likesCopy = likes.filter((e: Usuario) => e.id !== user.id);
      // atualiza o numero de likes 
      setLikes(likesCopy);
    } else {
      setLikes([...likes, user])
    }
    await api.post('/pius/dar-like/', {
      usuario: user.id,
      piu: piuData.id,
    }
    )
  }, [api, token, setLikes, piuData, user, likes, usuarioDeuLike]);

  return(
      <UserPiuContainer>
          <UserImage source={{uri:piuData.usuario.foto}}/>

        <PiuContentContainer>
          <InfoUserContainer>
            <Username color='#000'>{piuData.usuario.first_name}</Username>
            <Username color='#9197A3'>{piuData.usuario.username}</Username>
            <Username color='#9197A3'>· {distance}</Username>
          </InfoUserContainer>

          <TextPiuContainer>
            <TextPiu>{piuData.texto}</TextPiu>
          </TextPiuContainer>

          <PiuIconsContainer>
            <TouchableOpacity>
              <Feather name="message-square" size={18} color="black" />
            </TouchableOpacity>
            
              <TouchableOpacity onPress={likePiu}>
                <LikeBtnContainer>
                  {
                    usuarioDeuLike ? 
                    <AntDesign name="heart" size={18} color="#FB4C64" /> :
                    <Feather name="heart" size={18} color='black' />  
                  }
                  <TextLike>{likes.length}</TextLike>
                </LikeBtnContainer>
              </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="star" size={18} color="black" /> 
            </TouchableOpacity>

            <TouchableOpacity onPress={deletePiu}>
              <Feather name="trash-2" size={18} color="black" /> 
            </TouchableOpacity>
          </PiuIconsContainer>
        </PiuContentContainer>
      </UserPiuContainer>
      
    
  )
}

export default Piu