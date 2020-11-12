import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default function PremScreen() {
    return(
        <View style={{backgroundColor:"black", flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="black"/>
            <Text style={{color:"white", fontSize: 50}}>
                Get Spotify Premium from the official Spotify App!
            </Text>    
        </View>
    );
}