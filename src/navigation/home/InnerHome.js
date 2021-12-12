import React, {useContext,useEffect,useState} from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {StoreContext} from '../../store';
import {FlatList} from 'react-native';
import SimpleMovieCard from '../../components/SimpleMovieCard';

const InnerHome = () => {
  const navigation = useNavigation();
  const store = useContext(StoreContext);
  return (
    <Layout level="2">
        <Button onPress={() => navigation.navigate('Favorites List')}>
          Show favorites list
        </Button>
        <Button onPress={() => navigation.navigate('To Watch List')}>
          Show to Wacth list
        </Button>
    </Layout>
  );
};

const showFavorites = () =>{
  const store = useContext(StoreContext);
  return(
    <Layout level="2">
      <FlatList
          data={store.favorites}
          renderItem={({item}) => <SimpleMovieCard movie={item} />}
        />
    </Layout>
  );
}

const showToWatchList =()=>{
  const store = useContext(StoreContext);
  return(
    <Layout style={{flex: 1}} level="2">
    <Layout level="2">
        <FlatList
          data={store.toWatchList}
          renderItem={({item}) => <SimpleMovieCard movie={item} />}
        />
    </Layout>
  </Layout>
  );
}
export {InnerHome,showFavorites,showToWatchList};
