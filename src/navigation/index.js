import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from '@ui-kitten/components';
import NombreComponente from '../components/Componente';
import {InnerHome, showFavorites,showToWatchList} from './home/InnerHome';
import Discover from './discover/Dicover';
import {Details} from './discover/Details';
import {Profile} from './profile/Profile';

const MainStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Select" component={InnerHome} />
      <MainStack.Screen name="Favorites List" component={showFavorites} />
      <MainStack.Screen name="To Watch List" component={showToWatchList} />
      <DiscoverStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
};

const DiscoverStack = createNativeStackNavigator();

const DiscoverNavigator = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="DiscoverView" component={Discover} />
      <DiscoverStack.Screen name="Details" component={Details} />
    </DiscoverStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        safeAreaInsets: {bottom: 8},
        tabBarIcon: ({color, size, focused}) => {
          let iconName = 'home-outline';
          switch (route.name) {
            case 'Home': {
              iconName = 'home-outline';
              break;
            }
            case 'Discover': {
              iconName = 'search-outline';
              break;
            }
            case 'Profile': {
              iconName = 'people-outline';
              break;
            }
          }

          return (
            <Icon
              name={iconName}
              size={size}
              fill={color}
              style={{
                fontSize: focused ? size + 2 : size,
                width: 24,
                height: 24,
              }}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Discover"
        options={{headerShown: false}}
        component={DiscoverNavigator}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{simpleMock: true}}
      />
    </Tab.Navigator>
  );
};

export {TabNavigator};
