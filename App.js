/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TabNavigator} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StoreComponent} from './src/store';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StoreComponent>
          <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </StoreComponent>
      </ApplicationProvider>
    </>
  );
};

export default App;
