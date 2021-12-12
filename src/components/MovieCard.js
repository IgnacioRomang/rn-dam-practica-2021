import React,{useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Icon} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {useStore} from '../store';
import {useNavigation} from '@react-navigation/native';

const MovieCard = props => {
  const {movie, withActions = true} = props;
  const store = useStore();
  const navigator = useNavigation();
 
  return (
    <Card
      style={{borderRadius: 8, marginHorizontal: 16, marginBottom: 16}}
      onPress={() => navigator.navigate('Details', {id: movie.imdbID})}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            margin: 8,
          }}>
          {movie.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
            }}>
            {movie.imdbRating || (Math.random() * 10).toFixed(1)}
          </Text>
          <Icon
            style={{width: 24, height: 24}}
            fill={'#ead76d'}
            name="star-outline"
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{margin: 'auto'}}
          width={250} // height will be calculated automatically
          source={{uri: movie.poster}}
        />
      </View>
      {withActions && (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => (!store.existFavorite(movie))?store.addFavorites(movie):store.removeFavorite(movie)}>
            <Icon
              style={styles.icon}
              fill={
                (store.existFavorite(movie))
                  ? '#f14c63'
                  : '#8F9BB3'
              }
              name="heart"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (!store.existInWatchList(movie))?store.addToWatchList(movie):store.removeToWatchList(movie)}>
            <Icon
              style={styles.icon}
              fill={
                (store.existInWatchList(movie))
                  ? '#45ee89'
                  : '#8F9BB3'
              }
              name="play-circle-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              fill="#8F9BB3"
              name="message-circle-outline"
            />
          </TouchableOpacity>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 8,
    marginTop: 8,
  },
});
export default MovieCard;
