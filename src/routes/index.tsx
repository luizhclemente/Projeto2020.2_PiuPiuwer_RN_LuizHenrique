// IMPORTS
// libs
import React from 'react';

// hooks
import {useAuth} from '../hooks/useAuth';

import AppTabs from './AppTabs';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

const Routes: React.FC = () => {
  const {token} = useAuth();

  return (
    <NavigationContainer>
      {
        !token ? <AuthStack /> : <AppStack/>
      }
    </NavigationContainer>
  )
}

export default Routes