import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, StatusBar, Text, Image } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

const { width, height } = Dimensions.get('screen');
import songs from '../components/data';
export default class LibraryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVisibleIndex:0,
            scrollPosition:0,
            dataProvider :new DataProvider((r1) => r1 ===r1).cloneWithRows(songs)
        };
        this.layoutProvider = new LayoutProvider(
          (i) => { return this.state.dataProvider.getDataForIndex(i).type; },
          (type, dim) => {
            switch (type) {
              case 'NORMAL':
                dim.width = width;
                dim.height = 100;
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
                        <View style={{marginBottom:20,marginTop:20, flexDirection:"row"}}>
                            <Image source = {data.item.artwork} style={styles.image}/>
                            <Text style={{color:"white", fontSize: 20, marginHorizontal: 10, marginVertical: 10}}>{data.item.title}</Text>
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
                <Text style={{color:"white", fontSize: 30, marginBottom: 20, textAlign:"center"}}>Library</Text>
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
        marginLeft: 10

    }
});