import React, {useContext,useEffect,useState} from 'react';
import {BackHandler, Button, View, Text} from 'react-native';
import {Layout,Avatar,Card} from '@ui-kitten/components';
import {useStore} from '../../store';

export const Profile = () => {
    const name = "Ignacio Romang";
    const store = useStore();
    return(
        <Layout style={{flex: 1, paddingTop: 16}} level="2">
            <Card style={{borderRadius: 8, marginHorizontal: 8, marginBottom: 8}}>
            <Avatar source={require('../../assets/perfil.jpg')} size="giant"/>
            <View style={{flexDirection: 'column'}}>
                 <Text>Nombre: {name}</Text>
                 <Text>ToWatch List size : {store.toWatchList.length}</Text>
                 <Text>Favorites List size : {store.favorites.length}</Text>
            </View>
            </Card>
            <Button  onPress= {() => BackHandler.exitApp()} title="Salir"/>
        </Layout>
    );
};