import React,{useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';

const SimpleMovieCard = props => {
  const {movie, withActions = true} = props;
  const navigator = useNavigation();
 
  return (
    <Card
      style={{borderRadius: 8, marginHorizontal: 8, marginBottom: 8}}
      onPress={() => navigator.navigate('Details', {id: movie.imdbID})}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            margin: 8,
          }}>
          {movie.title}
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{margin: 'auto'}}
          width={250} // height will be calculated automatically
          source={{uri: movie.poster}}
        />
      </View>
    </Card>
  );
};

export default SimpleMovieCard;
