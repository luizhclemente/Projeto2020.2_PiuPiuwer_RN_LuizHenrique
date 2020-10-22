import React, {createContext, useCallback, useContext, useEffect, useState, VoidFunctionComponent} from 'react';
import { AsyncStorage } from 'react-native';
import * as Yup from 'yup';

import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData extends AuthState{
  user: object;
  SignIn(user: object): void;
  LogOut(): void;
}

interface LoginCredentials {
  username: string;
  password: string;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);


  useEffect(() => {
    async function loadUserData() {
      const [user, token] = await AsyncStorage.multiGet(['@Project:cred', '@Piupiwer:token']);

      if(user[1] && token[1]){
        api.defaults.headers.Authorization = `JWT ${token}`;
  
        setData({user: JSON.parse(user[1]), token: token[1]});
      }
    }
    loadUserData();
  }, [])

  const SignIn = useCallback(async ({ username, password }: LoginCredentials) => {
    console.log('passei por aqui');


      // await esquema.validate({username, password}, {abortEarly: false})
      const response = await api.post('/login/',
        {
          username,
          password
        });

      const { token } = response.data;
      AsyncStorage.setItem('@Project:token', token);

      if (!!token) {
        api.defaults.headers.Authorization = `JWT ${token}`;
        const userResponse = await api.get('usuarios/?search=' + username);
        const user = userResponse.data[0];
        AsyncStorage.setItem('@Project:user', JSON.stringify(user));

        setData({ token, user });
      };
    },[api, setData]);

    const LogOut = useCallback(() => {
       AsyncStorage.removeItem('@Project:user');
       AsyncStorage.removeItem('@Project:token');

      setData({} as AuthState);
    },[]);

  return(
    <AuthContext.Provider value={{user: data.user, SignIn, LogOut, token: data.token}}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context
}
