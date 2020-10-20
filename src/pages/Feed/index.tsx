// IMPORTS
// libs
import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


// styled components
import { HeaderFeed, IconsHeader, LogoImage,  PiusContainer, ScrollPius, ViewFeed } from './styles';

// images
import LogoIcon from '../../assets/images/parrot-logo.png';
import WritePiuIcon from '../../assets/images/writepiu.png';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
import Piu, { PiuData } from '../../components/Piu';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

function Feed() {

  const [pius, setPius] = useState([]);
  const {navigate} = useNavigation();

  const delay = useCallback(
    (delay: number) => new Promise(res => setTimeout(res, delay)
    ), []);
    const {LogOut, user} = useAuth();

  const handleFeedToWritePiuPage = useCallback(() =>{
    navigate('WritePiu');
  },[navigate]);

  const handleLogOut = useCallback(() => {
    LogOut();
    navigate('Login');
  },[navigate, LogOut]);

  useEffect(() => {
    async function loadPius() {
      while (true) {
        const response = await api.get('/pius/')
        setPius(response.data);
        await delay(3000);
      }
    }
    loadPius();
  }, [])
  return(
    <ViewFeed>

      <HeaderFeed>
        <TouchableOpacity onPress={handleFeedToWritePiuPage}>
          <IconsHeader source={WritePiuIcon}/>
        </TouchableOpacity>

          <LogoImage source={LogoIcon}/>

        <TouchableOpacity onPress={handleLogOut}>
          <SimpleLineIcons name="logout" size={30} color="black" />
        </TouchableOpacity>
      </HeaderFeed>

      {/* <PiusContainer> */}
      <ScrollPius>
        {pius.map((piuData: PiuData) => {
          return <Piu key={piuData.id} piuData={piuData} />
        })}
      </ScrollPius>
      {/* </PiusContainer> */}

    </ViewFeed>
  )
}

export default Feed
