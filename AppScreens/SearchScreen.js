import React from 'react';
import { Text, View, StatusBar, TextInput, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function SearchScreen() {
    return(
        <View style={{backgroundColor:"black", flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="black"/>
            <Text style={{color:"white", fontSize: 30, marginBottom: 20, marginLeft: 5}}>Search</Text>
            <View style={styles.searchbar}>
                <View style={styles.icnbox}><Entypo name="magnifying-glass" color="white" size={25} /></View>
                <TextInput style={styles.txtinput} placeholder="Enter Song/Artist Name" placeholderTextColor="white"/>    
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    searchbar: {
        flexDirection: 'row',
        marginTop: 10,
        color: '#757575',
        borderWidth: 1,
        borderColor: '#9E9E9E',
        paddingBottom: 5,
        marginHorizontal: 10
    },
    txtinput: {
        color: "white",
        fontSize: 20,
        marginLeft: 20
    },
    icnbox: {
        alignItems:"center",
        justifyContent:"space-evenly",
        marginLeft:10
    }
})

