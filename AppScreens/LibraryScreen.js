import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, StatusBar, Text, Image } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import Entypo from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('screen');
let db = new Array();
fetch('https://spotisongsapi.herokuapp.com/songs').then(function(u){return u.json();}).then(function(json){db = json;})

let tot = db.length;

export default class LibraryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVisibleIndex:0,
            scrollPosition:0,
            dataProvider :new DataProvider((r1) => r1 ===r1).cloneWithRows(db)
        };
        this.layoutProvider = new LayoutProvider(
          (i) => { return this.state.dataProvider.getDataForIndex(i).type; },
          (type, dim) => {
            switch (type) {
              case 'NORMAL':
                dim.width = width;
                dim.height = 80;
                break;
              default:
                dim.width = 0;
                dim.height = 0;
                break;
            }
          },
        );
        }
        rowRenderer = (type, data) => {
            switch (type) {
                case 'NORMAL':
                  return (
                        <View style={{marginBottom:7.5, marginTop:7.5, flexDirection:"row"}}>
                            <Image source = {{ uri: data.item.artwork }} style={styles.image}/>
                            <View style={{flexDirection:"column", flex:5}}>
                                <Text style={{color:"white", fontSize: 20, marginHorizontal: 10, marginVertical: 1}}>{data.item.title}</Text>
                                <Text style={{color:"white", fontSize: 15, marginHorizontal: 10}}>{data.item.artist}</Text>
                            </View>
                            <View style={styles.icnbox}><Entypo name="dots-three-horizontal" color="white" size={25} /></View> 
                        </View>
                )
              }
        };
         onScroll=(e)=>{
             const yOffset = e.nativeEvent.contentOffset.y  ;
             this.setState({scrollPosition:yOffset});
             const currentPage = Math.floor(yOffset/height );
             this.setState({ currentVisibleIndex: currentPage });
             console.log(this.state.currentVisibleIndex);
         }
    render() {
         return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="black"/>
                <Text style={{color:"white", fontSize: 30, marginBottom: 5, textAlign:"center"}}>Library</Text>
                <Text style={{color:"white", fontSize: 15, marginBottom: 20, textAlign:"center"}}>{tot} Songs</Text>
                <RecyclerListView rowRenderer={this.rowRenderer} dataProvider={this.state.dataProvider} layoutProvider={this.layoutProvider} onScroll={(e)=>{this.onScroll(e)}} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
    image: {
        height: 50,
        width: 50,
        marginBottom: 5,
        marginLeft: 10,
        flex:1

    },
    icnbox: {
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        flex:1,
        
    }
});