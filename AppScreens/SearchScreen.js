import React from 'react';
import { Text, View, StatusBar} from 'react-native';

export default function SearchScreen() {
    return(
        <View style={{backgroundColor:"black", flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="black"/>
            <Text style={{color:"white"}}>
                Helo there
            </Text>    
        </View>
    );
}