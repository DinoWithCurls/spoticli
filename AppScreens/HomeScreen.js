import React from 'react';
import { Text, View, StatusBar} from 'react-native';

import Album from '../components/Album/index'; 
const album = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadLine: 'Taylor Swift, Kygo, Avicii'
}
export default function HomeScreen() {
    return(
        <View style={{backgroundColor:"black", flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="black"/>
            <Album album={album}/> 
        </View>
    );
}