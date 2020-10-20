import 'react-native-gesture-handler';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SimpleLineIcons, AntDesign, EvilIcons} from '@expo/vector-icons'


import Feed from '../pages/Feed';
import Search from '../pages/Search';
import NotificationsPage from '../pages/Notifications';
import Profile from '../pages/Profile';
import WritePiu from '../pages/WritePiu';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
  return(
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },

        showLabel: false,

        iconStyle: {
          flex: 0,
          width: 40,
          height: 40,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => {
            return(
              <SimpleLineIcons name="home" size={28}/>
            );
          }
        }}
      />
      <Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: () => {
          return(
            <EvilIcons name="search" size={35} />
          )
        }
      }}
      />
      <Screen
      name="Notifications"
      component={NotificationsPage}
      options={{
        tabBarIcon: () => {
          return(
            <EvilIcons name="bell" size={35} />
          )
        }
      }}
      />
      <Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => {
          return(
            <EvilIcons name="user" size={35} />
          )
        }
      }}
      />

    </Navigator>
  );
}

export default AppTabs;
