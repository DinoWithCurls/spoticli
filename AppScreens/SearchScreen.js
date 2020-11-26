import React from 'react';
import { Text, View, StatusBar, TextInput, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchScreen = () => {
    const [code, setCode] = React.useState('');
    const [filteredData, setFilteredData] = React.useState([]);
    const [masterData, setMasterData] = React.useState([]);
    React.useEffect(()=> {
        fetch('https://spotisongsapi.herokuapp.com/songs').then((response)=>response.json())
            .then((responseJson)=> {
                setFilteredData(responseJson);
                setMasterData(responseJson);
            }).catch((error)=> {
                console.error(error);
            })
    }, []);
    
    const _finder = (text) => {
        if(text) {
            const newData = masterData.filter(function(item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1; 
            });
            setFilteredData(newData);
            setCode(text);
        } else {
            setFilteredData(masterData);
            setCode(text);
        }
    }
    const _viewer = ({item}) => {
        return(
        <View style={{flexDirection:"column", flex:5, marginTop: 7, marginBottom: 7}}>
            <Text style={{color:"white", fontSize: 20, marginHorizontal: 10, marginVertical: 1}}>{item.item.title}</Text>
            <Text style={{color:"white", fontSize: 15, marginHorizontal: 10}}>{item.item.artist}</Text>
        </View>   
        );
    };
    return(
        <SafeAreaView style={{flex: 1}}>    
            <View style={{backgroundColor:"black", flex: 1, flexDirection: "column"}}>
                <StatusBar barStyle="light-content" backgroundColor="black"/>
                <Text style={{color:"white", fontSize: 30, marginBottom: 20, marginLeft: 5}}>Search</Text>
                <View style={styles.searchbar}>
                    <View style={styles.icnbox}><Entypo name="magnifying-glass" color="white" size={25} /></View>
                    <TextInput style={styles.txtinput} placeholder="Enter Song/Artist Name" placeholderTextColor="white" onChangeText={(code) => _finder(code)}/>
                </View>
                {console.log(filteredData)}
                <FlatList 
                    data={filteredData}
                    keyExtractor={(index) => index.toString()}
                    renderItem={(filteredData) => _viewer(filteredData)}
                />
            </View>
        </SafeAreaView>        
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
    },
    button: {
        backgroundColor:"green",
        height: 40,
        width: 90,
        marginTop: 20,
        borderRadius: 20
    }

})
export default SearchScreen;