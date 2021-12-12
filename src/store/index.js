import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreContext = createContext([]);

export const StoreComponent = props => {
  const [favorites, setFavorites] = useState([]);
  const [toWatchList, setToWatchList] = useState([]);

  const fetchStore = async () => {
    const store = await AsyncStorage.getItem('@dam_example');
    if (store) {
      const parsedStore = JSON.parse(store);
      setFavorites(parsedStore.favorites);
      setToWatchList(parsedStore.toWatchList);
    }
  };

  // Trae la lista de favorites y toWatchList al iniciar la app
  useEffect(() => {
    // Creacion
    fetchStore();
  }, []);

  // Guarda en el store en cada modificación de favorites o towatchlist
  useEffect(() => {
    AsyncStorage.setItem(
      '@dam_example',
      JSON.stringify({favorites, toWatchList}),
    );
  }, [favorites, toWatchList]);

  const initialState = {
    favorites,
    addFavorites: movie => setFavorites(prevState => [...prevState, movie]),
    removeFavorite: movie => RemoveItemInFavorites(favorites.indexOf(movie),favorites),
    existFavorite: movie => favorites.find(item => item.imdbID == movie.imdbID),
    sizeFavorite: () => favorites.length(),
    toWatchList,
    existInWatchList: movie => toWatchList.find(item => item.imdbID == movie.imdbID),
    addToWatchList: movie => setToWatchList(prevState => [...prevState, movie]),
    removeToWatchList: movie => RemoveItemInWatchList(toWatchList.indexOf(movie),toWatchList),
    sizeToWatchList: () => toWatchList.length()
  };

  const RemoveItemInFavorites = (idx) => {
    const temp = [...favorites];
    temp.splice(idx, 1);
    setFavorites(temp);
  }
  const RemoveItemInWatchList = (idx) => {
    const temp = [...toWatchList];
    temp.splice(idx, 1);
    setToWatchList(temp);
  }
  return <StoreContext.Provider value={initialState} {...props} />;
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  return ctx;
};
